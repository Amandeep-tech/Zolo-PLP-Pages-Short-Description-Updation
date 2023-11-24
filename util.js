const fs = require("fs");
const couplePageTypeInLocalityCityDescription = require("./descriptions/couplePageTypeInLocalityCity");
const coupleSingleRoomForRentInCityDescription = require("./descriptions/couplesSingleRoomForRentInCity");
const genderPageTypeInCityDescription = require("./descriptions/genderPageTypeInCity");
const genderSingleRoomForRentInCityDescription = require("./descriptions/genderSingleRoomForRentInCity");

// type1
const genderPageTypeInLocalityCity = (obj) => {
  const { gender, pageType, locality, city } = obj;
  let pageTypeSmallCase = pageType.toLowerCase();
  let genderCapitalFirstLetter =
    gender.charAt(0).toUpperCase() + gender.slice(1);
  const a = locality.replaceAll("_", " ");
  const localityCapitalFirstLetter = a.charAt(0).toUpperCase() + a.slice(1);

  let cityCapitalFirstLetter = city.charAt(0).toUpperCase() + city.slice(1);
  let citySmallCase = city.toLowerCase();

  let res = genderPageTypeInCityDescription;
  res = res.replaceAll("$citySmallCase", citySmallCase);
  res = res.replaceAll("$cityCapitalFirstLetter", cityCapitalFirstLetter);
  res = res.replaceAll("$city", city);
  res = res.replaceAll("$pageTypeSmallCase", pageTypeSmallCase);

  res = res.replaceAll(
    "$localityCapitalFirstLetter",
    localityCapitalFirstLetter
  );
  res = res.replaceAll("$genderCapitalFirstLetter", genderCapitalFirstLetter);
  res = res.replaceAll("$gender", gender);
  return res;
};

// type 6
const genderPageTypeInCity = (obj) => {
  const { gender, pageType, city } = obj;
  let pageTypeSmallCase = pageType.toLowerCase();
  let genderCapitalFirstLetter =
    gender.charAt(0).toUpperCase() + gender.slice(1);
  let cityCapitalFirstLetter = city.charAt(0).toUpperCase() + city.slice(1);
  let citySmallCase = city.toLowerCase();

  let res = genderPageTypeInCityDescription;
  res = res.replaceAll("$citySmallCase", citySmallCase);
  res = res.replaceAll("$cityCapitalFirstLetter", cityCapitalFirstLetter);
  res = res.replaceAll("$city", city);
  res = res.replaceAll("$pageTypeSmallCase", pageTypeSmallCase);

  res = res.replaceAll("$localityCapitalFirstLetter", "");
  res = res.replaceAll("$genderCapitalFirstLetter", genderCapitalFirstLetter);
  res = res.replaceAll("$gender", gender);
  return res;
};

// type 5
const couplePageTypeInLocalityCity = (obj) => {
  const { gender, pageType, locality, city } = obj;
  let cityCapitalFirstLetter = city.charAt(0).toUpperCase() + city.slice(1);
  let pageTypeSmallCase = pageType.toLowerCase();
  const citySmallCase = city.toLowerCase();
  const a = locality.replaceAll("_", " ");
  const modifiedLocality = a.charAt(0).toUpperCase() + a.slice(1);
  let res = couplePageTypeInLocalityCityDescription;
  res = res.replaceAll("$citySmallCase", citySmallCase);
  res = res.replaceAll("$cityCapitalFirstLetter", cityCapitalFirstLetter);
  res = res.replaceAll("$city", city);
  res = res.replaceAll("$localityCapitalFirstLetter", modifiedLocality);
  res = res.replaceAll("$pageTypeSmallCase", pageTypeSmallCase);
  res = res.replaceAll("$gender", "couple");
  return res;
};

//type 3
const couplePageTypeInCity = (obj) => {
  const { gender, pageType, locality, city } = obj;
  let cityCapitalFirstLetter = city.charAt(0).toUpperCase() + city.slice(1);
  let pageTypeSmallCase = pageType.toLowerCase();
  const citySmallCase = city.toLowerCase();

  let res = couplePageTypeInLocalityCityDescription;
  res = res.replaceAll("$citySmallCase", citySmallCase);
  res = res.replaceAll("$cityCapitalFirstLetter", cityCapitalFirstLetter);
  res = res.replaceAll("$city", city);
  res = res.replaceAll(" $localityCapitalFirstLetter", "");
  res = res.replaceAll("$pageTypeSmallCase", pageTypeSmallCase);
  res = res.replaceAll("$gender", "couple");
  return res;
};

// type 4
const coupleSingleRoomForRentInCity = (obj) => {
  const { gender, pageType, locality, city } = obj;
  let citySmallCase = city.toLowerCase();
  let cityCapitalFirstLetter = city.charAt(0).toUpperCase() + city.slice(1);
  let res = coupleSingleRoomForRentInCityDescription;
  res = res.replaceAll("$cityCapitalFirstLetter", cityCapitalFirstLetter);
  res = res.replaceAll("$citySmallCase", citySmallCase);
  res = res.replaceAll(" $localityCapitalFirstLetter", "");
  return res;
};

// type 2
const coupleSingleRoomForRentInLocalityCity = (obj) => {
  const { gender, pageType, locality, city } = obj;
  let citySmallCase = city.toLowerCase();
  let localityCapitalFirstLetter = (
    locality.charAt(0).toUpperCase() + locality.slice(1)
  ).replaceAll("_", " ");
  let res = coupleSingleRoomForRentInCityDescription;
  let cityCapitalFirstLetter = city.charAt(0).toUpperCase() + city.slice(1);
  res = res.replaceAll("$cityCapitalFirstLetter", cityCapitalFirstLetter);
  res = res.replaceAll("$citySmallCase", citySmallCase);
  res = res.replaceAll(
    "$localityCapitalFirstLetter",
    localityCapitalFirstLetter
  );
  return res;
};

const genderSingleRoomForRentInCity = (obj) => {
  const { gender, pageType, locality, city } = obj;
  let citySmallCase = city.toLowerCase();
  let cityCapitalFirstLetter = city.charAt(0).toUpperCase() + city.slice(1);

  // let localityCapitalFirstLetter = (locality.charAt(0).toUpperCase() + locality.slice(1)).replaceAll("_", " ");
  let res = genderSingleRoomForRentInCityDescription;
  res = res.replaceAll("$cityCapitalFirstLetter", cityCapitalFirstLetter);

  res = res.replaceAll("$citySmallCase", citySmallCase);
  res = res.replaceAll("$localityCapitalFirstLetter", "");

  if (gender == "men") {
    const mens = ["mens", "boys"];
    const genderRelatedIndex = Math.floor(Math.random() * mens.length);
    console.log(mens[genderRelatedIndex], "amandeep");
    res = res.replaceAll("$genderSynonyms", mens[genderRelatedIndex]);
  } else if (gender == "women") {
    const womens = ["womens", "girls", "ladies"];
    const genderRelatedIndex = Math.floor(Math.random() * womens.length);
    res = res.replaceAll("$genderSynonyms", womens[genderRelatedIndex]);
  }
  res = res.replaceAll("$gender", gender);
  return res;
};

const genderSingleRoomForRentInLocalityCity = (obj) => {
  const { gender, pageType, locality, city } = obj;
  let citySmallCase = city.toLowerCase();
  let cityCapitalFirstLetter = city.charAt(0).toUpperCase() + city.slice(1);

  let localityCapitalFirstLetter = (
    locality.charAt(0).toUpperCase() + locality.slice(1)
  ).replaceAll("_", " ");
  let res = genderSingleRoomForRentInCityDescription;
  res = res.replaceAll("$cityCapitalFirstLetter", cityCapitalFirstLetter);

  res = res.replaceAll("$citySmallCase", citySmallCase);
  res = res.replaceAll(
    "$localityCapitalFirstLetter",
    localityCapitalFirstLetter
  );
  if (gender == "men") {
    const mens = ["mens", "boys"];
    const genderRelatedIndex = Math.floor(Math.random() * mens.length);
    console.log(mens[genderRelatedIndex], "amandeep");
    res = res.replaceAll("$genderSynonyms", mens[genderRelatedIndex]);
  } else if (gender == "women") {
    const womens = ["womens", "girls", "ladies"];
    const genderRelatedIndex = Math.floor(Math.random() * womens.length);
    res = res.replaceAll("$genderSynonyms", womens[genderRelatedIndex]);
  }
  res = res.replaceAll("$gender", gender);
  return res;
};

const createMongoCommand = (urlMapping) => {
  
  let command = ``;
  const writeStream = fs.createWriteStream("mongoCommands.txt");
  urlMapping.map((urlDescObj) => {
    command = `db.getCollection('metainfos').update({'og_url': "${urlDescObj.url}"}, {$set:{'short_description': "${urlDescObj.shortDescription}"}}, {multi: false})`;
    // append all these commands in a separate file line by line
    writeStream.write(command + "\n");
  })
  writeStream.end();
}

module.exports = {
  genderPageTypeInLocalityCity,
  genderPageTypeInCity,
  couplePageTypeInCity,
  couplePageTypeInLocalityCity,
  coupleSingleRoomForRentInCity,
  coupleSingleRoomForRentInLocalityCity,
  genderSingleRoomForRentInCity,
  genderSingleRoomForRentInLocalityCity,
  createMongoCommand
};
