import "./styles.css";

var rolLength = 6;

const rRandom = () => {
  var min = Math.ceil(0);
  var max = Math.floor(rolLength - 1);
  return 2;
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
<div class="rouletter">
    <div class="rouletter-bg">
        <div class="rouletter-wacu"></div>
    </div>
    <div class="rouletter-arrow"></div>
    <button class="rouletter-btn">start</button>
</div>
`;
