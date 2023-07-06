import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://playground-e4fb8-default-rtdb.firebaseio.com/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(
  database,
  "shoppingList"
);
const shoppingListEl = document.getElementById(
  "shopping-list"
);

const inputFieldEl = document.getElementById(
  "input-field"
);
const addButtonEl =
  document.getElementById("add-button");

addButtonEl.addEventListener(
  "click",
  function () {
    let inputValue = inputFieldEl.value;
    push(shoppingListInDB, inputValue);
    shoppingListEl.innerHTML += `<li>${inputValue}</li>`;
    // Challenge: Append a new <li> with text content inputValue to the 'shopping-list' <ul>
  }
);
