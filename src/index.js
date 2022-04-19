import { initializeApp } from "firebase/app";
import firebaseConfig from "../hidden/firebaseConfig";
import { getRemoteConfig } from "firebase/remote-config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const remoteConfig = getRemoteConfig(app);
console.log(remoteConfig.settings);

async function component() {
  const element = document.createElement("div");
  element.innerHTML = "hello";

  return element;
}

document.body.appendChild(component());

// WITH NO CONFIG, -rw-r--r--  1 jackdwyer  primarygroup    37K Apr 19 12:30 dist/main.js
// Run `ls -lh dist/main.js` to get the above
