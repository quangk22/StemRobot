function toc_do() {
  var slider = document.getElementById("slider");
  var position = slider.value;
  console.log(position);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://your-server-ip/data", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  var data = JSON.stringify({
    key: "setspeed",
    value: position,
  });

  xhr.send(data);
}
