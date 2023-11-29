const pageTypeInLocalityCityDesc = require("./descriptions2/pageTypeInLocalityCity");
const fs = require("fs");
const arr = require("./index2");
const { parse } = require("csv-parse");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const ramda = require("ramda");
const urlsInProd = require("./filterUrlsNotInProdDB");

// will do content modidfication now
const pageTypeInCity = []; // These urls do not match any of the PLP url pattern, so not considering them for now.
const pageTypeInCityMapping = [];

const pageTypeInLocalityCity = []; // done
const pageTypeInLocalityCityMapping = [];

const singleRoomForRentInCity = []; // These urls do not match any of the PLP url pattern, so not considering them for now.
const singleRoomForRentInCityMapping = [];

const singleRoomForRentInLocalityCity = [];
const singleRoomForRentInLocalityCityMapping = [];

const coupleSingleRoomForRentInCity = [];
const coupleSingleRoomForRentInCityMapping = [];

const coupleSingleRoomForRentInLocalityCity = [];
const coupleSingleRoomForRentInLocalityCityMapping = [];
// will do content modidfication later
const genderPageTypeInCity = [];
const genderPageTypeInLocalityCity = [];
const couplePageTypeInCity = [];
const couplePageTypeInLocalityCity = [];
const genderSingleRoomForRentInCity = [];
const genderSingleRoomForRentInLocalityCity = [];
const others = [];

const filterArr = arr.filter((url) => !url.includes("pg-hostel-near"));

// filterArr.map((url, index) => {
//   const urlSplit = url.split("https://zolostays.com/");
//   const URL = urlSplit[1];
//   const urlLength = URL.split("-").length;
//   if (URL.startsWith("single-room-for-rent")) {
//     if (urlLength === 6) {
//       singleRoomForRentInCity.push(URL);
//     } else {
//       singleRoomForRentInLocalityCity.push(URL);
//     }
//   } else if (URL.startsWith("men-single-room-for-rent")) {
//     if (urlLength === 7) {
//       genderSingleRoomForRentInCity.push(URL);
//     } else {
//       genderSingleRoomForRentInLocalityCity.push(URL);
//     }
//   } else if (URL.startsWith("women-single-room-for-rent")) {
//     if (urlLength === 7) {
//       genderSingleRoomForRentInCity.push(URL);
//     } else {
//       genderSingleRoomForRentInLocalityCity.push(URL);
//     }
//   } else if (URL.startsWith("couple-single-room-for-rent")) {
//     if (urlLength === 7) {
//       coupleSingleRoomForRentInCity.push(URL);
//     } else {
//       coupleSingleRoomForRentInLocalityCity.push(URL);
//     }
//   } else if (URL.startsWith("pgs-in") || URL.startsWith("hostels-in")) {
//     if (urlLength === 3) {
//       pageTypeInCity.push(URL);
//     } else {
//       pageTypeInLocalityCity.push(URL);
//     }
//   } else if (URL.startsWith("men-pgs-in")) {
//     if (urlLength === 4) {
//       genderPageTypeInCity.push(URL);
//     } else {
//       genderPageTypeInLocalityCity.push(URL);
//     }
//   } else if (URL.startsWith("women-pgs-in")) {
//     if (urlLength === 4) {
//       genderPageTypeInCity.push(URL);
//     } else {
//       genderPageTypeInLocalityCity.push(URL);
//     }
//   } else if (URL.startsWith("couple-pgs-in")) {
//     if (urlLength === 4) {
//       couplePageTypeInCity.push(URL);
//     } else {
//       couplePageTypeInLocalityCity.push(URL);
//     }
//   } else if (URL.startsWith("men-hostels-in")) {
//     if (urlLength === 4) {
//       genderPageTypeInCity.push(URL);
//     } else {
//       genderPageTypeInLocalityCity.push(URL);
//     }
//   } else if (URL.startsWith("women-hostels-in")) {
//     if (urlLength === 4) {
//       genderPageTypeInCity.push(URL);
//     } else {
//       genderPageTypeInLocalityCity.push(URL);
//     }
//   } else if (URL.startsWith("couple-hostels-in")) {
//     if (urlLength === 4) {
//       couplePageTypeInCity.push(URL);
//     } else {
//       couplePageTypeInLocalityCity.push(URL);
//     }
//   } else {
//     others.push(URL);
//   }
// });

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

// pageType-in-:locality-:city
const handlePageTypeInLocalityCityUrls = () => {
  pageTypeInLocalityCity.map((url) => {
    const urlSplit = url.split("-");
    const pageType = urlSplit[0];
    const locality = urlSplit[2].replaceAll("_", " ");
    const city = urlSplit[3];
    let cityCapitalFirstLetter = city.charAt(0).toUpperCase() + city.slice(1);
    // for 1st sentence
    const firstSentenceToBeReplaced =
      "$pageTypeUpperCase in $locality is a good option for $capitaliseFirstLetterCity people";
    const firstSentence = [
      "Opting for accommodation in $locality's $pageTypeUpperCase facilities proves advantageous for residents of $capitaliseFirstLetterCity. The $pageTypeUpperCase in $locality stands out as a favorable choice for those seeking housing in $capitaliseFirstLetterCity due to its positive attributes. Residents in $capitaliseFirstLetterCity find the $pageTypeUpperCase in $locality to be a commendable option for their accommodation needs.",
      "$pageTypeUpperCase in $locality is a good option for $capitaliseFirstLetterCity people.",
      "For those in $capitaliseFirstLetterCity, the $pageTypeUpperCase accommodations in $locality offer a positive and advantageous choice. It's a beneficial option for people residing in the city seeking accommodation.",
    ];
    // for 2nd sentence
    const secondSentenceToBeReplaced =
      "We have single, double, and private occupancy $pageTypeUpperCase in $locality";
    const secondSentence = [
      "In $locality, our available $pageTypeUpperCase accommodations cater to single, double, and private occupancy needs. Our offerings include options for individuals, pairs, and those seeking private living spaces within the $pageTypeUpperCase premises.",
      "We have single, double, and private occupancy $pageTypeUpperCase in $locality.",
    ];

    // for 3rd sentence
    const thirdSentenceToBeReplaced =
      "Are you looking for the best $pageTypeUpperCase in $locality $capitaliseFirstLetterCity.";
    const thirdSentence = [
      "Are you looking for the best $pageTypeUpperCase in $locality $capitaliseFirstLetterCity.",
      "Are you in search of the finest $pageTypeUpperCase in $locality, $capitaliseFirstLetterCity.",
      "Seeking the top-notch $pageTypeUpperCase in $locality, $capitaliseFirstLetterCity.",
    ];

    // for 4th sentence
    const forthSentenceToBeReplaced =
      "Unisex $pageTypeUpperCase in $locality is designed to cater to the diverse needs of both students and working professionals";
    const forthSentence = [
      "In the heart of $locality, our unisex $pageTypeUpperCase offers a comfortable and convenient living space tailored to the needs of both students and working professionals.",
      "Whether you're a student pursuing academic excellence or a professional seeking a hassle-free living space, our unisex $pageTypeUpperCase in $locality caters to your unique needs.",
    ];

    // for 5th sentence
    const fifthSentenceToBeReplaced =
      "For those seeking privacy and convenience, a single-room $pageTypeUpperCase in $locality $capitaliseFirstLetterCity is the perfect choice";
    const fifthSentence = [
      "For those seeking privacy and convenience, a single-room $pageTypeUpperCase in $locality Bangalore is the perfect choice.",
      "Seekers of privacy and convenience will find their ideal living arrangement in a single-room $pageTypeUpperCase in $locality Bangalore.",
    ];

    const randomIndex1 = Math.floor(Math.random() * firstSentence.length);
    const selectedSentence1 = firstSentence[randomIndex1];
    const randomIndex2 = Math.floor(Math.random() * secondSentence.length);
    const selectedSentence2 = secondSentence[randomIndex2];
    const randomIndex3 = Math.floor(Math.random() * thirdSentence.length);
    const selectedSentence3 = thirdSentence[randomIndex3];
    const randomIndex4 = Math.floor(Math.random() * forthSentence.length);
    const selectedSentence4 = forthSentence[randomIndex4];
    const randomIndex5 = Math.floor(Math.random() * fifthSentence.length);
    const selectedSentence5 = fifthSentence[randomIndex5];

    let str = pageTypeInLocalityCityDesc;
    //start replacing all the sentences in str
    str = str.replace(firstSentenceToBeReplaced, selectedSentence1);
    str = str.replace(secondSentenceToBeReplaced, selectedSentence2);
    str = str.replace(thirdSentenceToBeReplaced, selectedSentence3);
    str = str.replace(forthSentenceToBeReplaced, selectedSentence4);
    str = str.replace(fifthSentenceToBeReplaced, selectedSentence5);
    str = str.replaceAll("$locality", locality);
    str = str.replaceAll("$cityLowerCase", city); // used in links -> /pgs-in-bangalore
    str = str.replaceAll("$capitaliseFirstLetterCity", cityCapitalFirstLetter); // used in starting of sentences
    str = str.replaceAll("$pageTypeUpperCase", pageType.toUpperCase());
    str = str.replaceAll("$pageType", pageType);
    pageTypeInLocalityCityMapping.push({ url, shortDescription: str });
  });
};

// handlePageTypeInLocalityCityUrls();

// handleUrls(
//   "./results2/pageTypeInLocalityCityMapping.csv",
//   pageTypeInLocalityCityMapping
// );

// const urlsNotInProdDB = ramda.difference(
//   pageTypeInLocalityCityMapping.map((urlObj) => urlObj.url),
//   urlsInProd
// );

// now creating url for production db
const token =
  "eyJraWQiOiJcL2RzUHFjUFNtRURkaUZSVGJheU1OQmFvczNWVFg3SmdXYTJBY2RubnNxUT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJkZTFkODA3ZS02MTlhLTRmYTUtYTE2ZS01YzM3N2U3ODI3YTMiLCJjb2duaXRvOmdyb3VwcyI6WyJhcC1zb3V0aC0xXzB1R2FLb1VscF9Hb29nbGUiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV8wdUdhS29VbHAiLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiJzYzc1OTBiaWRvcHJidDIwZDRyZW51dTBoIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiBwaG9uZSBvcGVuaWQgcHJvZmlsZSBlbWFpbCIsImF1dGhfdGltZSI6MTcwMDQ3MTk4NSwiZXhwIjoxNzAwODIyODE3LCJpYXQiOjE3MDA4MTkyMTcsImp0aSI6ImJiZWY3ZmI1LTM5YmUtNGJhNS1hNzU0LTVmNGI2NzM0MDM3ZCIsInVzZXJuYW1lIjoiR29vZ2xlXzExNTUxNTI0MzQzNzQ3NTc4MjI2MSJ9.NnXHrWhwM9judkJJFie_mtQpe9Py-0er_kI5V4RzUABiMG49k6lpC2otrn-Jtw7DffofxOjnGbOZZMc69HFADpHQkF53MP25DD3I30bcyeRFR-S_S54AGJ35NaN8YUugAhptBWPTE1a15JTySOfR3CF7Y5LxNr9joFvef05j50FLbtwUge53ARzwOWGxI5juJiH6Ps4y4rR0SU8eMW4tpfVSImf2IZIcXZrRLKLINIrWXuec6IVsMpmb_kQnfbNgFP8j3uko5kHFp4QAvI8iSfDl5h0ZRXa-exPAky808RVWCmX-_qO_ZXPYlW6UK1xO67RcFnS3jQyLRlG04D9mIw";
const callApi = async (payload) => {
  try {
    const response = await fetch("https://hermes.zolostays.com/api/urls/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    console.log("data amandeep", data);
  } catch (err) {
    console.log(`err in creating this url ${payload.urlPath}`, err);
  }
};
// pageTypeInLocalityCityMapping.map(async (urlObj) => {
//   const payload = {
//     isLive: false,
//     isAutoGenerated: false,
//     defaultValue: true,
//     urlPath: `${urlObj.url}`,
//     urlType: "",
//     createdAt: "",
//     updatedAt: "",
//     updatedBy: "",
//   };
//   await callApi(payload);
// })

// first test for 1 url
// (async () => {
//   await callApi({
//     isLive: false,
//     isAutoGenerated: false,
//     defaultValue: true,
//     urlPath: `hostels-in-cv_ramanagar-bangalore`,
//     urlType: "hostels",
//     createdAt: "",
//     updatedAt: "",
//     updatedBy: "",
//   });
// })();

// const createMongoCommand = (urlMapping) => {

//   let command = ``;
//   const writeStream = fs.createWriteStream("./results2/mongoCommands.txt");
//   urlMapping.map((urlDescObj) => {
//     command = `db.getCollection('metainfos').update({'og_url': "https://zolostays.com/${urlDescObj.url}"}, {$set:{'short_description': "${urlDescObj.shortDescription}"}}, {multi: false})`;
//     // append all these commands in a separate file line by line
//     writeStream.write(command + "\n");
//   })
//   writeStream.end();
// }

// createMongoCommand(pageTypeInLocalityCityMapping)
