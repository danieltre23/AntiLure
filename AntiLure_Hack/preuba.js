$(function() {
  $("#emailV").click(function() {
    var dataEmail = $("email").val();
    axios
      .post(
        "https://us-central1-hack2019-250821.cloudfunctions.net/api/addEmail",
        { correo: dataEmail, status: "pendiente" }
      )
      .then(res => {
        chrome.extension.getBackgroundPage().console.log(res);
      })
      .catch(err => {
        chrome.extension.getBackgroundPage().console.log(err);
      });
  });
});
