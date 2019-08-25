chrome.runtime.onMessage.addListener(function(message, callback) {
  //alert("hasd");
  if (window.getSelection && window.getSelection().toString() !== "") {
    chrome.storage.sync.set({ link: window.getSelection().toString() });
  }
});
