var emailItem = {
  id: "checkemail",
  title: "Check Email",
  contexts: ["selection"]
};

chrome.contextMenus.create(emailItem);

//regex para comprobar que sea un link
function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
//Iniz.. de objecto con el url
let body = null;

//Verifica si es malaware
function checkURL() {
  axios
    .post(
      "https://safebrowsing.googleapis.com/v4/threatMatches:find?key=AIzaSyCqCUPOvtB9eSd90rpmhT7AjOcmuhwNhVc",
      body
    )
    .then(res => {
      if (res.data.matches != null) {
        chrome.storage.sync.set({ type: "Malware" });
        //alert("Malware");
        axios
          .post(
            "https://us-central1-hack2019-250821.cloudfunctions.net/api/addPage",
            { pagina: res.data.matches[0].threat.url, status: "pendiente" }
          )
          .then(res => {
            chrome.extension.getBackgroundPage().console.log(res);
          })
          .catch(err => {
            chrome.extension.getBackgroundPage().console.log(err);
          });
      } else {
        chrome.storage.sync.set({ type: "Safe Page" });
        //alert("Safe Page");
      }
    })
    .catch(err => {
      chrome.storage.sync.set({ link: err });
      chrome.extension.getBackgroundPage().console.log(err);
    });
}

chrome.browserAction.onClicked.addListener(function() {
  chrome.extension.getBackgroundPage().console.log("click");
});

function sendURL(selection) {
  if (validURL(selection)) {
    body = {
      client: {
        clientId: "yourcompanyname",
        clientVersion: "1.5.2"
      },
      threatInfo: {
        threatTypes: ["MALWARE", "SOCIAL_ENGINEERING"],
        platformTypes: ["WINDOWS"],
        threatEntryTypes: ["URL"],
        threatEntries: [{ url: selection }]
      }
    };
    chrome.storage.sync.set({ link: selection });
    checkURL();
  } else {
    chrome.storage.sync.set({ type: "Invalid URL" });
    //alert("Invalid URL");
  }
}

chrome.storage.onChanged.addListener(function(changes, namespace) {
  console.log(changes);
  if (changes.link && changes.link.newValue !== "") {
    sendURL(changes.link.newValue);
    console.log("smn");
  }
});

chrome.contextMenus.onClicked.addListener(function(clickData) {
  chrome.extension.getBackgroundPage().console.log(clickData.selectionText);
  if (
    clickData.menuItemId == "checkemail" &&
    validateEmail(clickData.selectionText)
  ) {
    axios.post(
      "https://us-central1-hack2019-250821.cloudfunctions.net/api/addPage",
      { pagina: clickData.selectionText, status: "pendiente" }
    );
    alert("Email has been sent to be verified");
  } else {
    alert("This is not a valid email");
  }
});
