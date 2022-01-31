// navigator.serviceWorker
if ("serviceWorker" in navigator) {
  // console.log("ok");
  navigator.serviceWorker.register("./sw.js");
}