# resptest
responsive test and guideline(auto scale using min-width to html, body)


## Step1 Checking device is PC or Mobile

```
const isDesktop = () => {
  return (
    "win16|win32|win64|windows|mac|macintel|linux|freebsd|openbsd|sunos".indexOf(
      navigator.platform.toLowerCase()
    ) >= 0
  );
};
```


## Step2 Adding break point for Mobile 
