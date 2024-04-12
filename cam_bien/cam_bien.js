function fetchData() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "url_of_your_server?key=cambien", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var ir = response.ir;
        var ultrasonic = response.ultrasonic;
        var deviation = response.deviation;

        // Hiển thị thông tin nhận được
        console.log("IR:", ir);
        console.log("Ultrasonic:", ultrasonic);
        console.log("Deviation:", deviation);
      } else {
        console.error("Request failed:", xhr.status);
      }
    }
  };
  xhr.send();
  setInterval(fetchData, 100);
}

// Thiết lập hàm để gọi fetchData() mỗi 100ms
//

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
