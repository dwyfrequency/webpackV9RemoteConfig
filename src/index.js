import { initializeApp } from "firebase/app";
import firebaseConfig from "../hidden/firebaseConfig";
import {
  getRemoteConfig,
  fetchAndActivate,
  getValue,
} from "firebase/remote-config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const remoteConfig = getRemoteConfig(app);
console.log(remoteConfig.settings);
remoteConfig.settings.minimumFetchIntervalMillis = 3600000;
remoteConfig.defaultConfig = {
  welcome_message: "Welcome",
};
const val = getValue(remoteConfig, "welcome_messsage");
fetchAndActivate(remoteConfig)
  .then(() => {
    // ...
  })
  .catch((err) => {
    // ...
  });

async function component() {
  const element = document.createElement("div");
  element.innerHTML = "hello";

  return element;
}

document.body.appendChild(component());

// WITH NO GET & FETCH, -rw-r--r--  1 jackdwyer  primarygroup    37K Apr 19 12:30 dist/main.js
// WITH GET & FETCH, -rw-r--r--  1 jackdwyer  primarygroup   39K Apr 19 17:48 dist/main.js
// Run `ls -lh dist/main.js` to get the above
