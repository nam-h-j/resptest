window.addEventListener("load", function () {
  if (md.mobile() === null) {
    alert("you in PC");
  } else {
    alert("you in Mobile");
  }
});

var md = new MobileDetect(navigator.userAgent);
