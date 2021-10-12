window.addEventListener("load", function () {
  if (md.mobile() === null) {
    alert("you in Mobile");
  } else {
    alert("you in PC");
  }
});

var md = new MobileDetect(navigator.userAgent);
