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

filterArr.map((url, index) => {
  const urlSplit = url.split("https://zolostays.com/");
  const URL = urlSplit[1];
  const urlLength = URL.split("-").length;
  if (URL.startsWith("single-room-for-rent")) {
    if (urlLength === 6) {
      singleRoomForRentInCity.push(URL);
    } else {
      singleRoomForRentInLocalityCity.push(URL);
    }
  } else if (URL.startsWith("men-single-room-for-rent")) {
    if (urlLength === 7) {
      genderSingleRoomForRentInCity.push(URL);
    } else {
      genderSingleRoomForRentInLocalityCity.push(URL);
    }
  } else if (URL.startsWith("women-single-room-for-rent")) {
    if (urlLength === 7) {
      genderSingleRoomForRentInCity.push(URL);
    } else {
      genderSingleRoomForRentInLocalityCity.push(URL);
    }
  } else if (URL.startsWith("couple-single-room-for-rent")) {
    if (urlLength === 7) {
      coupleSingleRoomForRentInCity.push(URL);
    } else {
      coupleSingleRoomForRentInLocalityCity.push(URL);
    }
  } else if (URL.startsWith("pgs-in") || URL.startsWith("hostels-in")) {
    if (urlLength === 3) {
      pageTypeInCity.push(URL);
    } else {
      pageTypeInLocalityCity.push(URL);
    }
  } else if (URL.startsWith("men-pgs-in")) {
    if (urlLength === 4) {
      genderPageTypeInCity.push(URL);
    } else {
      genderPageTypeInLocalityCity.push(URL);
    }
  } else if (URL.startsWith("women-pgs-in")) {
    if (urlLength === 4) {
      genderPageTypeInCity.push(URL);
    } else {
      genderPageTypeInLocalityCity.push(URL);
    }
  } else if (URL.startsWith("couple-pgs-in")) {
    if (urlLength === 4) {
      couplePageTypeInCity.push(URL);
    } else {
      couplePageTypeInLocalityCity.push(URL);
    }
  } else if (URL.startsWith("men-hostels-in")) {
    if (urlLength === 4) {
      genderPageTypeInCity.push(URL);
    } else {
      genderPageTypeInLocalityCity.push(URL);
    }
  } else if (URL.startsWith("women-hostels-in")) {
    if (urlLength === 4) {
      genderPageTypeInCity.push(URL);
    } else {
      genderPageTypeInLocalityCity.push(URL);
    }
  } else if (URL.startsWith("couple-hostels-in")) {
    if (urlLength === 4) {
      couplePageTypeInCity.push(URL);
    } else {
      couplePageTypeInLocalityCity.push(URL);
    }
  } else {
    others.push(URL);
  }
});

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
      "$pageTypeUpperCase in $locality is a good option for $capitaliseFirstLetterCity people.";
    const firstSentence = [
      "Opting for accommodation in $locality's $pageTypeUpperCase facilities proves advantageous for residents of $capitaliseFirstLetterCity. The $pageTypeUpperCase in $locality stand out as a favorable choice for those seeking housing in $capitaliseFirstLetterCity due to its positive attributes. Residents in $capitaliseFirstLetterCity find the $pageTypeUpperCase in $locality to be a commendable option for their accommodation needs.",
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

handlePageTypeInLocalityCityUrls();

handleUrls(
  "./results2/pageTypeInLocalityCityMapping.csv",
  pageTypeInLocalityCityMapping
);

// const urlsNotInProdDB = ramda.difference(
//   pageTypeInLocalityCityMapping.map((urlObj) => urlObj.url),
//   urlsInProd
// );

// now creating url for production db
const token =
  "eyJraWQiOiJyY1FhVjJZZW5PVFMyTVNiMmNwMW5HTERtOVJwV0o4ekhSbklFWEg1MHE0PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI4ODIyOWJmMS1jZTI2LTRjODMtODdhNi05YWEyNTA4OGY5ZWQiLCJjb2duaXRvOmdyb3VwcyI6WyJhcC1zb3V0aC0xXzU1dllWYUJpMF9Hb29nbGUiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV81NXZZVmFCaTAiLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI2dTg4cTdjazh2ampnbWx0YzJhcW1wcWRmZiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4gcGhvbmUgb3BlbmlkIHByb2ZpbGUgZW1haWwiLCJhdXRoX3RpbWUiOjE3MDEzMzIyOTMsImV4cCI6MTcwMTg1NTgxNCwiaWF0IjoxNzAxODUyMjE0LCJqdGkiOiIyM2Q1ZTg1Mi0zMzc5LTRkYjMtYmFmZi02MGNkOTIyZTVhNjIiLCJ1c2VybmFtZSI6Ikdvb2dsZV8xMTU1MTUyNDM0Mzc0NzU3ODIyNjEifQ.bH8E-3e8KOd5O0bqhhD2pPK7jGMceUovO5fyFN1SsExo7Fo0e2dLcv0DDz8QIe17PPqAg-kLwDzPaf46buy8xnjeFfhQOf6rsQFCK9XEfzoRJOGWKW98h50tKs5NcY5jwOmsx2cNPUU640GAieZVUZyk6FX4RG8xVcBIwyjHBmxi-NR7fvXKQrlRshzCuot-DiezzMYUq5pCjI8QUd_nO7BaMVKwxteiaIxC4mYG7z_v68SiIwb4nEMWsqhfE3sjSh8BuMLFeyUOAeqoHHFqtQtR8G8N_6WscU1YD_21qo43xfm_Slyn_j5nNBdQAVJecyZ6sPWHarZpCz5uWmCREA";
const callApi = async (payload) => {
  try {
    const response = await fetch("https://hermes.stage.zolostays.com/api/urls/", {
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
//     urlPath: `hostels-in-amandeep-bangalore`,
//     urlType: "hostels",
//     createdAt: "",
//     updatedAt: "",
//     updatedBy: "",
//   });
// })();

const createMongoCommand = (urlMapping) => {

  let command = ``;
  const writeStream = fs.createWriteStream("./results2/updateShortDescMongoCommandsProd.txt");
  urlMapping.map((urlDescObj) => {
    command = `db.getCollection('metainfos').updateOne({'og_url': "/${urlDescObj.url}"}, {$set:{'short_description': "${urlDescObj.shortDescription}"}})`;
    // append all these commands in a separate file line by line
    writeStream.write(command + "\n");
  })
  writeStream.end();
}

createMongoCommand(pageTypeInLocalityCityMapping)
