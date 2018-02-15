/**
 * Extension to reveal the Google account password while logging in a Chrome Browser.
 *  
 *        Please do not use this to invade other's privacy !
 * 
 * 
 *  You have to fight for your privacy or you lose it. Eric Schmidt
 *  Read more at: https://www.brainyquote.com/topics/privacy
 */

chrome.webRequest.onBeforeRequest.addListener(
  function (info) {
    // Just to avoid errors for wrong pages
    if (info.requestBody && info.requestBody.formData) {
      var request_data = info.requestBody.formData["f.req"];
      var password_ = JSON.parse(request_data[0]);
      alert(password_[4][4][0]);
    }
  },
  // filters
  {
    urls: [
      "https://accounts.google.com/_/*"
    ]

  },
  // extraInfoSpec
  // The password string is in the requestBody.
  ["requestBody"]);