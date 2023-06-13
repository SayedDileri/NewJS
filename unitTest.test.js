const getAboutUsLink = require("./script");

test('should return about-us in english-UK', () => {
  expect(getAboutUsLink("en-UK")).toBe("/about-us");
});
