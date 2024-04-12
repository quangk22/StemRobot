function XoaBuoc() {
  var stepSelect = document.getElementById("stepSelect");
  var selectedStep = stepSelect.options[stepSelect.selectedIndex].value;
  console.log("Selected step:", selectedStep);

  // Gửi giá trị selectedStep đến server hoặc xử lý theo nhu cầu của bạn
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://your-server-ip/data", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  var data = JSON.stringify({
    Xoa: selectedStep,
  });

  xhr.send(data);
}
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
//   sửa bước
function editStep() {
  var stepSelect = document.getElementById("stepSelect");
  var selectedStep = stepSelect.options[stepSelect.selectedIndex].value;

  var mainSelect1 = document.getElementById("mainSelect1");
  var selectedMain1 = mainSelect1.options[mainSelect1.selectedIndex].value;

  var giaSoInput = document.getElementById("giaSoInput").value;
  var giaTocInput = document.getElementById("giaTocInput").value;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://your-server-ip/data", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  var data = JSON.stringify({
    Key1: "edit",
    Key2: selectedStep,
    Key3: selectedMain1,
    Key4: parseInt(giaSoInput),
    Key5: parseInt(giaTocInput),
  });

  xhr.send(data);
}
