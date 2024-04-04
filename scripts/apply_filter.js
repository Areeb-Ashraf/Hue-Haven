import { executeScriptOnActiveTab } from './tabUtils.js';

// Constants for filter types
const FILTER_TYPES = {
    PROTANOPIA: {
      id: "PID",
      filterId: "f-PID",
      values: "0.800  0.200  0.000  0.000  0.000 0.200  0.800  0.000  0.000  0.000 0.200 -0.800  1.600  0.000  0.000 0.000  0.000  0.000  1.000  0.000"
    },
    DEUTERANOPIA: {
      id: "DID",
      filterId: "f-DID",
      values: "1.250 -0.125 -0.125  0.000  0.000 0.000  1.000  0.000  0.000  0.000 0.000  0.000  1.000  0.000  0.000 0.000  0.000  0.000  1.000  0.000"
    },
    TRITANOPIA: {
      id: "TID",
      filterId: "f-TID",
      values: "0.550  0.000  0.450  0.000  0.000 0.000  0.650  0.350  0.000  0.000 0.000  0.000  1.000  0.000  0.000 0.000  0.000  0.000  1.000  0.000"
    }
  };
  
    // Function to apply filter
    export function applyFilter(filterType) {
      executeScriptOnActiveTab(applyFilterOnPage, FILTER_TYPES[filterType]);
    } 
  
  // Function to apply filter on page
  function applyFilterOnPage(filterInfo) {
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
  
    // Create and append style element
    var styleElement = document.createElement('style');
    styleElement.id = filterInfo.id;
    document.body.appendChild(styleElement);
  
    // Create and append filter element
    var filterElement = document.createElement('div');
    filterElement.id = filterInfo.filterId;
    filterElement.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
    document.body.appendChild(filterElement);
  
    // Define SVG filter
    filterElement.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="' + filterInfo.id.toLowerCase() + '"> <feColorMatrix type="matrix" values="' + filterInfo.values + '" in="SourceGraphic" /> </filter> </defs> </svg>';
  
    // Apply CSS styles
    styleElement.innerHTML = 'html{-webkit-filter:url(#' + filterInfo.id.toLowerCase() + ');-moz-filter:(#' + filterInfo.id.toLowerCase() + ');-ms-filter:(#' + filterInfo.id.toLowerCase() + ');-o-filter:(#' + filterInfo.id.toLowerCase() + ');filter:(#' + filterInfo.id.toLowerCase() + ');}';
  
    // Scroll fix
    setTimeout(function() {
      window.scrollBy(1, 1);
      window.scrollBy(-1, -1);
    }, 1);
  }  