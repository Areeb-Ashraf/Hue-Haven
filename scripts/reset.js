import { executeScriptOnActiveTab } from './tabUtils.js';

export function resetColor(colorPicker) {
  // Set color picker's color to #ffffff (default color)
  colorPicker.color.set('#ffffff');

  // Reset the color on the active tab
  executeScriptOnActiveTab(reset);
}
  
function reset() {
  document.body.style.backgroundColor = 'unset';
}