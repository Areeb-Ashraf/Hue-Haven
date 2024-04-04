import { executeScriptOnActiveTab } from './tabUtils.js';

export function applyRemoveFilter() {
  executeScriptOnActiveTab(removeFilter);
}

export function removeFilter(){
  // Check if filter already applied and remove if so
  var styleIds = ["PID", "DID", "TID"];

  styleIds.forEach(function(styleId) {
      var existingStyle = document.getElementById(styleId);
      // Check if style already applied and remove if so
      if (existingStyle) {
          existingStyle.remove();
          // Find corresponding filter and remove if it exists
          var filterId = "f-" + styleId;
          var existingFilter = document.getElementById(filterId);
          if (existingFilter) {
              existingFilter.remove();
          }
      }
  });
}