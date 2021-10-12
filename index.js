var md = new MobileDetect(navigator.userAgent);

const makeList = (device) => {
  let node = document.createElement("li");
  let textnode = document.createTextNode(device);
  let ul = document.getElementById("contents");
  node.appendChild(textnode);

  ul.appendChild(node);
};

window.addEventListener("load", function () {
  if (md.mobile() === null) {
    for (let i = 0; i < 8; i++) {
      makeList("you in PC");
    }
  } else {
    for (let i = 0; i < 10; i++) {
      makeList("you in Mobile");
    }
  }
});
