import { print_hello } from "./hello.js"; // import each feature from each js file in scripts folder

// Call each feature inside DOMContentLoaded
// An example to call function print_hello() upon action "click" of a button is given below
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('helloButton').addEventListener('click', print_hello);
});
  