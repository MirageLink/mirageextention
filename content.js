// contentScript.js
chrome.runtime.onMessage.addListener(function (message) {
    if (message.action === "hello") {
      sayHello();
    }
  });
  
  function sayHello() {
    fetch(`http://localhost:6969/${window.location.href}`)
  }
  