$(function() {
  chrome.storage.sync.get(["link", "type"], function(budget) {
    $("#link").text(budget.link);
    $("#type").text(budget.type);
  });

  chrome.tabs.getSelected(null, function(tab) {
    //chrome.extension.getBackgroundPage().console.log(tab);
    let msg = {
      txt: "hola"
    };
    chrome.tabs.sendMessage(tab.id, msg);
  });
});

$(function() {
  chrome.storage.onChanged.addListener(function(changes, namespace) {
    if (changes.link) $("#link").text(changes.link.newValue);

    if (changes.type) $("#type").text(changes.type.newValue);
  });
});
