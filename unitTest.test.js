const getAboutUsLink = require("./script");

test('should return about-us in english-UK', () => {
  expect(getAboutUsLink("en-UK")).toBe("/about-us");
});



// WHEN USING, INSERT INTO SCRIPT.JS
// Unit testing
// const englishCode = "en-UK";

// const frenchCode = "es-FS";

// function getAboutUsLink(language){

//     switch (language.toLowerCase()){

//       case englishCode.toLowerCase():

//         return '/about-us';

//       case frenchCode.toLowerCase():

//         return '/-à propos de nous';

//     }
//     return '';
// }

// module.exports = getAboutUsLink;
