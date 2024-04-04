export function executeScriptOnActiveTab(targetFunction, args = []) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: targetFunction,
        args: [args],
      });
    });
  }