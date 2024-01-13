// popup.js
document.getElementById("logInfo").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: logPageInfo
      });
    });
  });
  
  function logPageInfo() {
    console.log("Page URL:", window.location.href);
    console.log("Page Title:", document.title);
    console.log("Page HTML:", document.documentElement.outerHTML);
  }
  