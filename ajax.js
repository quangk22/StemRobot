function updateData() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        console.log(response);
        var maxSteps = response.maxSteps;
        var delta = response.delta;
        var speed = response.speed;

        // Hiển thị thông tin cập nhật trên giao diện người dùng của trang cụ thể
        document.getElementById("totalSteps").textContent = maxSteps;
        document.getElementById("delta").textContent = delta;
        document.getElementById("value").textContent = speed;

        var select = document.getElementById("programs");
        select.innerHTML = "";
        for (var i = 0; i < response.length; i++) {
          var program = response[i].id;
          var option = document.createElement("option");
          option.text = "Chương trình: " + program;
          select.appendChild(option);
        }
      } else {
        console.error("Request failed:", xhr.status);
      }
    }
  };

  xhr.send();
}

// đồng đồ

let timerInterval;
let running = false;
let milliseconds = 0;

function startOrStopTimer() {
  if (running) {
    stopClock();
  } else {
    resetAndStartClock();
  }
}

function startTimer() {
  if (!running) {
    let seconds = 0;
    timerInterval = setInterval(function () {
      milliseconds++;
      if (milliseconds == 100) {
        milliseconds = 0;
        seconds++;
      }
      updateTime(seconds, milliseconds);
    }, 10);
    document.querySelector(".status-car").textContent = "ĐANG CHẠY";
    running = true;
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  document.querySelector(".status-car").textContent = "ĐÃ DỪNG";
  running = false;
}

function stopClock() {
  stopTimer();
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "url_of_your_server", true); // Thay 'url_of_your_server' bằng địa chỉ URL của máy chủ của bạn
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        console.log("Clock stopped.");
      } else {
        console.error("Request failed:", xhr.status);
      }
    }
  };
  xhr.send("key=stop&value=0");
}

function resetAndStartClock() {
  resetClock(); // Gọi hàm resetClock() để reset clock
  startClock(); // Gọi hàm startClock() để bắt đầu clock
}

function checkClockStatus() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "url_of_your_server?key=status", true); // Thay 'url_of_your_server' bằng địa chỉ URL của máy chủ của bạn
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var status = response.value;

        if (status === 1) {
          // Nếu status là 1, tiếp tục clock
          startTimer();
        } else {
          // Nếu status là 0, dừng clock
          stopTimer();
        }
      } else {
        console.error("Request failed:", xhr.status);
      }
    }
  };
  xhr.send();
}

function resetClock() {
  clearInterval(timerInterval); // Dừng clock nếu đang chạy
  // Thực hiện các thao tác reset clock ở đây nếu cần
  console.log("Clock reset.");
}

function updateTime(seconds, milliseconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime =
    pad(hours) +
    ":" +
    pad(minutes) +
    ":" +
    pad(remainingSeconds) +
    ":" +
    pad(milliseconds);
  document.querySelector(".time").textContent = formattedTime;
}

function pad(number) {
  return number.toString().padStart(2, "0");
}
