window.selectnav=function(){"use strict";var e=function(e,n){function t(e){var n;e||(e=window.event),e.target?n=e.target:e.srcElement&&(n=e.srcElement),3===n.nodeType&&(n=n.parentNode),n.value&&(window.location.href=n.value)}function a(e){var n=e.nodeName.toLowerCase();return"ul"===n||"ol"===n}function o(e){for(var n=1;document.getElementById("selectnav"+n);n++);return e?"selectnav"+n:"selectnav"+(n-1)}function c(e){v++;var n=e.children.length,t="",r="",m=v-1;if(n){if(m){for(;m--;)r+=s;r+=" "}for(var h=0;n>h;h++){var p=e.children[h].children[0];if("undefined"!=typeof p){var E=p.innerText||p.textContent,g="";if(l&&(g=-1!==p.className.search(l)||-1!==p.parentNode.className.search(l)?f:""),i&&!g&&(g=p.href===document.URL?f:""),t+='<option value="'+p.href+'" '+g+">"+r+E+"</option>",d){var w=e.children[h].children[1];w&&a(w)&&(t+=c(w))}}}return 1===v&&u&&(t='<option value="">'+u+"</option>"+t),1===v&&(t='<select class="selectnav" id="'+o(!0)+'">'+t+"</select>"),v--,t}}if(e=document.getElementById(e),e&&a(e)&&"insertAdjacentHTML"in window.document.documentElement){document.documentElement.className+=" js";var r=n||{},l=r.activeclass||"active",i="boolean"==typeof r.autoselect?r.autoselect:!0,d="boolean"==typeof r.nested?r.nested:!0,s=r.indent||"→",u=r.label||"- Navigation -",v=0,f=" selected ";e.insertAdjacentHTML("afterend",c(e));var m=document.getElementById(o());return m.addEventListener&&m.addEventListener("change",t),m.attachEvent&&m.attachEvent("onchange",t),m}};return function(n,t){e(n,t)}}(),selectnav("menu-top",{label:"Menu",nested:!0,indent:"-"});