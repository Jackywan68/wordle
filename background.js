chrome.browserAction.onClicked.addListener(function (activeTab) {
  chrome.windows.create({
    url: chrome.runtime.getURL("index.html"),
    type: "popup",
  });
});
