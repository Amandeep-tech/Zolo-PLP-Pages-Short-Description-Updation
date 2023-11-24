const { parse } = require("csv-parse");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const fs = require("fs");

const {
  genderPageTypeInLocalityCity,
  genderPageTypeInCity,
  couplePageTypeInCity,
  couplePageTypeInLocalityCity,
  coupleSingleRoomForRentInCity,
  coupleSingleRoomForRentInLocalityCity,
  genderSingleRoomForRentInCity,
  genderSingleRoomForRentInLocalityCity,
  createMongoCommand,
} = require("./util");

const menRelated = [
  "couple",
  "couples",
  "men",
  "mens",
  "boy",
  "boys",
  "unisex",
];
const womenRelated = [
  "couple",
  "couples",
  "women",
  "womens",
  "girl",
  "girls",
  "lady",
  "ladies",
  "unisex",
];

const coupleRelated = ["men and women", "boys and girls", "ladies and gents"];
const cities = [
  "bangalore",
  "chennai",
  "coimbatore",
  "delhi",
  "hyderabad",
  "mumbai",
  "gurugram",
  "pune",
  "noida",
];
// first task -> make obj from url
let obj = {
  gender: null, // menRelated
  pageType: null, // pgs, hostels, room
  locality: null,
  city: null,
};

let urlMapping = []; // master array
let type1UrlMapping = [];
let type2UrlMapping = [];
let type3UrlMapping = [];
let type4UrlMapping = [];
let type5UrlMapping = [];
let type6UrlMapping = [];
let type7UrlMapping = [];
let type8UrlMapping = [];

const removeSlashFromUrl = (url) => {
  if (url[0] === "/") {
    return url.substring(1);
  }
  return url;
};

const checkUrlType = (splittedUrl) => {
  //! Group 1 Starts
  // :gender-:pageType-in-:locality-:city -> type1 => men-pgs-in-bannerghatta_road-bangalore
  const isType1 =
    splittedUrl.length === 5 &&
    ["men", "women"].includes(splittedUrl[0]) &&
    ["pgs", "hostels", "rooms"].includes(splittedUrl[1]) &&
    splittedUrl[2] === "in" &&
    cities.includes(splittedUrl[4]);

  // :gender-:pageType-in-:city -> type6 => men-pgs-in-bangalore
  const isType6 =
    splittedUrl.length === 4 &&
    ["men", "women"].includes(splittedUrl[0]) &&
    ["pgs", "hostels", "rooms"].includes(splittedUrl[1]) &&
    splittedUrl[2] === "in" &&
    cities.includes(splittedUrl[3]);

  // "couple-:pageType-in-:locality-:city" => "/couple-pgs-in-bannerghatta_road-bangalore
  const isType5 =
    splittedUrl.length === 5 &&
    ["couple"].includes(splittedUrl[0]) &&
    ["pgs", "hostels", "rooms"].includes(splittedUrl[1]) &&
    splittedUrl[2] === "in" &&
    cities.includes(splittedUrl[4]);

  // couple-:pageType-in-:city => /couple-pgs-in-bangalore
  const isType3 =
    splittedUrl.length === 4 &&
    ["couple"].includes(splittedUrl[0]) &&
    ["pgs", "hostels", "rooms"].includes(splittedUrl[1]) &&
    splittedUrl[2] === "in" &&
    cities.includes(splittedUrl[3]);
  //! Group 1 Ends

  //! Group 2 Starts
  //  couple-single-room-for-rent-in-:locality-:city => couple-single-room-for-rent-in-bannerghatta_road-bangalore
  const isType2 =
    splittedUrl.length === 8 &&
    ["couple"].includes(splittedUrl[0]) &&
    splittedUrl.slice(1, 6).join("-") === "single-room-for-rent-in" &&
    cities.includes(splittedUrl[7]);

  // couple-single-room-for-rent-in-bangalore => :couple-single-room-for-rent-in-:city
  const isType4 =
    splittedUrl.length === 7 &&
    ["couple"].includes(splittedUrl[0]) &&
    splittedUrl.slice(1, 6).join("-") === "single-room-for-rent-in" &&
    cities.includes(splittedUrl[6]);

  // type7 => :gender-single-room-for-rent-in-:city
  const isType7 =
    splittedUrl.length === 7 &&
    ["men", "women"].includes(splittedUrl[0]) &&
    splittedUrl.slice(1, 6).join("-") === "single-room-for-rent-in" &&
    cities.includes(splittedUrl[6]);

  // type8 => :gender-single-room-for-rent-in-:locality-:city
  const isType8 =
    splittedUrl.length === 8 &&
    ["men", "women"].includes(splittedUrl[0]) &&
    splittedUrl.slice(1, 6).join("-") === "single-room-for-rent-in" &&
    cities.includes(splittedUrl[7]);
  //! Group 2 Ends

  if (isType1) return "type1";
  if (isType2) return "type2";
  if (isType3) return "type3";
  if (isType4) return "type4";
  if (isType5) return "type5";
  if (isType6) return "type6";
  if (isType7) return "type7";
  if (isType8) return "type8";
};

const mapUrlToDescription = (urls) => {
  return urls.map((url) => {
    const splittedUrl = removeSlashFromUrl(url).split("-");
    const urlType = checkUrlType(splittedUrl);
    if (urlType === "type1") {
      // :gender-:pageType-in-:locality-:city
      const resObj = {
        ...obj,
        gender: splittedUrl[0],
        pageType: splittedUrl[1],
        locality: splittedUrl[3],
        city: splittedUrl[splittedUrl.length - 1],
      };
      const desc = genderPageTypeInLocalityCity(resObj);
      urlMapping.push({ url, shortDescription: desc });
      type1UrlMapping.push({ url, shortDescription: desc });
      handleType1Urls();
    } else if (urlType === "type2") {
      // couple-single-room-for-rent-in-:locality-:city
      const resObj = {
        ...obj,
        gender: splittedUrl[0],
        pageType: "rooms",
        locality: splittedUrl[6],
        city: splittedUrl[splittedUrl.length - 1],
      };
      const desc = coupleSingleRoomForRentInLocalityCity(resObj);
      urlMapping.push({ url, shortDescription: desc });
      type2UrlMapping.push({ url, shortDescription: desc });
      handleType2Urls();
    } else if (urlType === "type3") {
      // couple-:pageType-in-:city
      const resObj = {
        ...obj,
        gender: splittedUrl[0],
        pageType: splittedUrl[1],
        locality: null,
        city: splittedUrl[splittedUrl.length - 1],
      };
      const desc = couplePageTypeInCity(resObj);
      urlMapping.push({ url, shortDescription: desc });
      type3UrlMapping.push({ url, shortDescription: desc });
      handleType3Urls();
    } else if (urlType === "type4") {
      // couple-single-room-for-rent-in-:city
      const resObj = {
        ...obj,
        gender: splittedUrl[0],
        pageType: "rooms",
        locality: null,
        city: splittedUrl[splittedUrl.length - 1],
      };
      const desc = coupleSingleRoomForRentInCity(resObj);
      urlMapping.push({ url, shortDescription: desc });
      type4UrlMapping.push({ url, shortDescription: desc });
      handleType4Urls();
    } else if (urlType === "type5") {
      // couple-:pageType-in-:locality-:city
      const resObj = {
        ...obj,
        gender: "couple",
        pageType: splittedUrl[1],
        locality: splittedUrl[3],
        city: splittedUrl[splittedUrl.length - 1],
      };
      const desc = couplePageTypeInLocalityCity(resObj);
      urlMapping.push({ url, shortDescription: desc });
      type5UrlMapping.push({ url, shortDescription: desc });
      handleType5Urls();
    } else if (urlType === "type6") {
      // gender-:pageType-in-:city
      const resObj = {
        ...obj,
        gender: splittedUrl[0],
        pageType: splittedUrl[1],
        locality: null,
        city: splittedUrl[splittedUrl.length - 1],
      };
      const desc = genderPageTypeInCity(resObj);
      urlMapping.push({ url, shortDescription: desc });
      type6UrlMapping.push({ url, shortDescription: desc });
      handleType6Urls();
    } else if (urlType === "type7") {
      // gender-single-room-for-rent-in-:city
      const resObj = {
        ...obj,
        gender: splittedUrl[0],
        pageType: "rooms",
        locality: null,
        city: splittedUrl[splittedUrl.length - 1],
      };
      const desc = genderSingleRoomForRentInCity(resObj);
      urlMapping.push({ url, shortDescription: desc });
      type7UrlMapping.push({ url, shortDescription: desc });
      handleType7Urls();
    } else if (urlType === "type8") {
      // gender-single-room-for-rent-in-:locality-:city
      const resObj = {
        ...obj,
        gender: splittedUrl[0],
        pageType: "rooms",
        locality: splittedUrl[6],
        city: splittedUrl[splittedUrl.length - 1],
      };
      const desc = genderSingleRoomForRentInLocalityCity(resObj);
      urlMapping.push({ url, shortDescription: desc });
      type8UrlMapping.push({ url, shortDescription: desc });
      handleType8Urls();
    } else {
      console.log("url not covered ", url);
    }
  });
};

const handleUrls = (fileName, urlTypeMapping) => {
  const filePath = fileName;

  // empty the file first
  fs.writeFile(filePath, "", (err) => {
    if (err) throw err;
    console.log("The contents of the file have been deleted");
  });

  const csvWriter = createCsvWriter({
    path: fileName,
    header: [
      { id: "url", title: "url" },
      { id: "shortDescription", title: "shortDescription" },
    ],
  });

  csvWriter
    .writeRecords(urlTypeMapping)
    .then(() => console.log(`${fileName} file was written successfully`));
};

const handleType1Urls = () => handleUrls("genderPageTypeInLocalityCity.csv", type1UrlMapping);
const handleType2Urls = () =>
  handleUrls("coupleSingleRoomForRentInLocalityCity.csv", type2UrlMapping);
const handleType3Urls = () => handleUrls("couplePageTypeInCity.csv", type3UrlMapping);
const handleType4Urls = () => handleUrls("coupleSingleRoomForRentInCity.csv", type4UrlMapping);
const handleType5Urls = () => handleUrls("couplePageTypeInLocalityCity.csv", type5UrlMapping);
const handleType6Urls = () => handleUrls("genderPageTypeInCity.csv", type6UrlMapping);
const handleType7Urls = () => handleUrls("genderSingleRoomForRentInCity.csv", type7UrlMapping);
const handleType8Urls = () =>
  handleUrls("genderSingleRoomForRentInLocalityCity.csv", type8UrlMapping);

let urls = [];
fs.createReadStream("hermesUrls.csv")
  .pipe(parse({ delimiter: "," }))
  .on("data", function (row) {
    urls.push(row[0]);
  })
  .on("error", function (error) {
    console.log("error", error);
  })
  .on("end", function () {
    console.log("finished");
    console.log("urls ", urls.length)
    mapUrlToDescription(urls);
    console.log("urlMapping ", urlMapping.length);

    console.log("type1UrlMapping ", type1UrlMapping.length);
    console.log("type2UrlMapping ", type2UrlMapping.length);
    console.log("type3UrlMapping ", type3UrlMapping.length);
    console.log("type4UrlMapping ", type4UrlMapping.length);

    console.log("type5UrlMapping ", type5UrlMapping.length);
    console.log("type6UrlMapping ", type6UrlMapping.length);
    console.log("type7UrlMapping ", type7UrlMapping.length);
    console.log("type8UrlMapping ", type8UrlMapping.length);
    handleType1Urls();
    handleType2Urls();
    handleType3Urls();
    handleType4Urls();
    handleType5Urls();
    handleType6Urls();
    handleType7Urls();
    handleType8Urls();

    createMongoCommand(urlMapping);
  });
