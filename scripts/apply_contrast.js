import { executeScriptOnActiveTab } from './tabUtils.js';

export function applyContrast(percentage) {
  executeScriptOnActiveTab(applyContrastOnPage, percentage);
}
  
export function applyContrastOnPage(contrastPercentage) {
  // the css we are going to inject
  var css = 'html {-webkit-filter: contrast('+ contrastPercentage +'%);' +
    '-moz-filter: contrast('+ contrastPercentage +'%);' + 
    '-o-filter: contrast('+ contrastPercentage +'%);' + 
    '-ms-filter: contrast('+ contrastPercentage +'%); }';
  
  var head = document.getElementsByTagName('head')[0],
      style = document.createElement('style');
  
  // a hack, so you can "invert back" clicking the bookmarklet again
  if (!window.counter) { 
    window.counter = 1;
  } else  { 
    window.counter ++;
    if (window.counter % 2 == 0) { 
      css = 'html {-webkit-filter: contrast(100%); -moz-filter: contrast(100%); -o-filter: contrast(100%); -ms-filter: contrast(100%); }';
    }
  }
  
  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  
  //injecting the css to the head
  head.appendChild(style);
}
