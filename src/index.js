import "./styles.css";

var rolLength = 4;

const rRandom = () => {
  var min = Math.ceil(0);
  var max = Math.floor(rolLength - 1);
  var status = document.querySelector(".status");
  status.innerHTML = `실행 완료`
  return 1;
};

const rRotate = () => {
  var panel = document.querySelector(".rouletter-wacu");
  var deg = [];
  for (var i = 1, len = rolLength; i <= len; i++) {
    deg.push((360 / len) * i);
  }

  var baseDeg = 7200;
  var stopDeg = baseDeg + deg[rRandom()];
  panel.animate(
    [
      { transform: "rotate(0deg)" },
      { transform: "rotate(" + stopDeg + "deg)" }
    ],
    {
      fill: "forwards",
      duration: 7000,
      easing: "ease-out"
    }
  );
};

document.addEventListener("click", function (e) {
  var target = e.target;
  if (target.tagName === "BUTTON") {
    rRotate();
  }
});

document.getElementById("app").innerHTML = `
<div class="back" xmlns="http://www.w3.org/1999/html">
  <div class="rouletter">
    <div class="rouletter-bg">
        <div class="rouletter-wacu"></div>
    </div>
    <div class="rouletter-arrow"></div>
    <button class="rouletter-btn">돌리기</button>
  </div>
    <div class="status">
        실행 전
    <br>
  </div>
  <div class="command">
    <br>
      존경하는 와이프님<br>
    <br>
      룰렛을 돌려주세요.<br>
    <br>
      룰렛에 나온 상품을 드리겠습니다^~^<br>
    <br><br><br><br><br><br><br><br><br><br><br>
  </div>
</div>
`;
