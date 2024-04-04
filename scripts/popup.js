import { changeColor } from './change_color.js';
import { invertColor } from "./invert.js"
import { applyFilter } from './apply_filter.js';
import { applyRemoveFilter } from './remove_filter.js';
import { resetColor } from './reset.js';
import { applyContrast } from './apply_contrast.js';

document.addEventListener('DOMContentLoaded', function () {

  // Script for invert button
  var colorButton = document.getElementById('invertButton');
  colorButton.addEventListener('click', invertColor);

  //Script for high contrast
  var highContrastButton = document.getElementById('highContrastButton');
  highContrastButton.addEventListener('click', function () {
    applyContrast(200);
  });

  //Script for low contrast
  var lowContrastButton = document.getElementById('lowContrastButton');
  lowContrastButton.addEventListener('click', function () {
    applyContrast(50);
  });

  // Script for activate filter button
  var activateButton = document.getElementById('activateButton');
  activateButton.addEventListener('click', function() {
    var selectMenu = document.querySelector('.form-select');
    var selectedOption = selectMenu.options[selectMenu.selectedIndex].value;

    // Check the selected option and apply the corresponding filter
    if (selectedOption === "1") {
      applyFilter("PROTANOPIA");
    } else if (selectedOption === "2") {
      applyFilter("DEUTERANOPIA");
    } else if (selectedOption === "3") {
      applyFilter("TRITANOPIA");
    } else {
      console.log("No filter selected");
    }
  });

  // Script for remove filter button
  var removeButton = document.getElementById('removeButton');
  removeButton.addEventListener('click', applyRemoveFilter);

  // Script for backgroung color changer picker
  var colorPicker = new iro.ColorPicker('#picker', {width: 225});
  colorPicker.on('color:change', function(color) {
    changeColor(color.hexString);
  });

  // Script for reset button
  var resetButton = document.getElementById('resetButton');
  resetButton.addEventListener('click', function() {
    resetColor(colorPicker);
  });
});  