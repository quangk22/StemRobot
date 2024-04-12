function sendCommand(command) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://<ESP8266_IP_ADDRESS>/", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          console.log("Request successful");
        } else {
          console.error("Request failed:", xhr.status);
        }
      }
    };
    xhr.send("key=" + command);
  }