window.addEventListener("load", function () {
  if (isDesktop) {
    alert("you in PC");
  } else {
    alert("you in Mobile");
  }
});

const isDesktop = () => {
  return (
    "win16|win32|win64|windows|mac|macintel|linux|freebsd|openbsd|sunos".indexOf(
      navigator.platform.toLowerCase()
    ) >= 0
  );
};
