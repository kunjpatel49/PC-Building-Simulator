function sendUserInfo(dataForServer){
  var xhr = new window.XMLHttpRequest()
  xhr.open("POST", "http://localhost:5000/sendData", true);
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
  xhr.send(JSON.stringify(dataForServer));
}

function getUserInfo() {
  axios.get('http://localhost:5000/getData')
    .then(function (response) {
      console.log("SQL sent: ", response);
    })
    .catch(function (error) {
      console.log(error);
    });
}