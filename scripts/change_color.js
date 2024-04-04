import { executeScriptOnActiveTab } from './tabUtils.js';

export function changeColor(color) {
  executeScriptOnActiveTab(changeBackgroundColor, color);
}

function changeBackgroundColor(color) {
  if (document.body.style.backgroundColor === color) {
      document.body.style.backgroundColor = 'unset';
  } else {
      document.body.style.backgroundColor = color;
  }
}