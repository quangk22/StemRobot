function increaseDelta() {
  var delta = 10; // Giá trị delta bạn muốn tăng
  sendDelta(delta);
}

function decreaseDelta() {
  var delta = -10; // Giá trị delta bạn muốn giảm
  sendDelta(delta);
}

function sendDelta() {
  var leftSpeedInput = document.getElementById("leftSpeedInput");
  var rightSpeedInput = document.getElementById("rightSpeedInput");

  var leftSpeed = parseInt(leftSpeedInput.value);
  var rightSpeed = parseInt(rightSpeedInput.value);

  var delta = rightSpeed - leftSpeed;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://your-server-ip/data", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  var data = JSON.stringify({
    key: "delta",
    value: delta,
  });

  xhr.send(data);
}
