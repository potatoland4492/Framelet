---
title: "Framelet Docs | Disguiselet List"
description: "The official Framelet Documentation"
---

## Stable Disguiselets

### Universal

Disguises the current tab as any tab. This only changes the tab name. The icon is set to the Google Chrome browser default.

Code:

```JAVASCRIPT
javascript: var link = document.querySelector("link[rel*='icon']") || document.createElement('link'); link.type = 'image/png'; link.rel = 'icon'; link.href = 'https://raw.githubusercontent.com/potatoland4492/Framelet/6443d87e575d1b2557f75ab702e7539798ec7b21/images/web-icon.png'; document.title = prompt('Page Name'); document.getElementsByTagName('head')[0].appendChild(link);
```

### gDoc

Disguises the current tab as a Google Docs tab. This only changes the tab name and icon.

Code:

```JAVASCRIPT
javascript: var link = document.querySelector("link[rel*='icon']") || document.createElement('link'); link.type = 'image/x-icon'; link.rel = 'icon'; link.href = 'https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico'; document.title = prompt('Document Name:', 'YourName - DocName').concat(' - Google Docs'); document.getElementsByTagName('head')[0].appendChild(link);
```

### gSlide

Disguises the current tab as a Google Slides tab. This only changes the tab name and icon.

Code:

```JAVASCRIPT
javascript: var link = document.querySelector("link[rel*='icon']") || document.createElement('link'); link.type = 'image/x-icon'; link.rel = 'icon'; link.href = 'https://ssl.gstatic.com/docs/presentations/images/favicon5.ico'; document.title = prompt('Slidewhow Name:', 'YourName - SlideName').concat(' - Google Sheets'); document.getElementsByTagName('head')[0].appendChild(link);
```

### gSheet

Disguises the current tab as a Google Sheets tab. This only changes the tab name and icon.

Code:

```JAVASCRIPT
javascript: var link = document.querySelector("link[rel*='icon']") || document.createElement('link'); link.type = 'image/x-icon'; link.rel = 'icon'; link.href = 'https://ssl.gstatic.com/docs/spreadsheets/favicon3.ico'; document.title = prompt('Spreadsheet Name:', 'YourName - SheetName').concat(' - Google Sheets'); document.getElementsByTagName('head')[0].appendChild(link);
```

## Insiders Framelets

***These Framelets are in development and may not work. If they do not work, they will do no damage. To fix a problem, reload the page that the Framelet was used on.***

### Original (Insiders)

Creates a frame that completely covers the current webpage and fills it with a new one. Adds a "CLOSE" button to close and a "HIDE" button to hide temporarily. The "HIDE" button will hide itself, the frame and the "CLOSE" button and will also make visible a "SHOW" button, which when clicked will hide itself and unhide the other buttons and the frame.

Code:

```JAVASCRIPT
javascript: var frame = document.createElement("iframe"); frame.src = prompt("URL:", "https://"); frame.setAttribute("style", "border:none;position:fixed;top:0%;right:0%;height:100vh;width:100vw;background-color:white;z-index:10000;"); document.body.appendChild(frame); var closebtn = document.createElement("button"); closebtn.setAttribute("style", "border:2px solid black;color:black;padding:2px;font-weight:bold;background-color:lightgrey;position:fixed;top:0%;right:50%;z-index:1000000;"); closebtn.innerText = "CLOSE"; document.body.appendChild(closebtn); closebtn.onclick = function () { frame.remove(); closebtn.remove(); minbtn.remove(); maxbtn.remove(); }; var minbtn = document.createElement("button"); minbtn.setAttribute("style", "border:2px solid black;color:black;padding:2px;font-weight:bold;background-color:lightgrey;position:fixed;top:0%;right:25%;z-index:1000000;"); minbtn.innerText = "HIDE"; document.body.appendChild(minbtn); minbtn.onclick = function () { frame.style.visibility = "hidden"; closebtn.style.visibility = "hidden"; maxbtn.style.visibility = "visible"; minbtn.style.visibility = "hidden"; }; var maxbtn = document.createElement("button"); maxbtn.setAttribute("style", "border:2px solid black;color:black;padding:2px;font-weight:bold;background-color:lightgrey;position:fixed;top:0%;right:75%;z-index:1000000;"); maxbtn.innerText = "SHOW"; document.body.appendChild(maxbtn); maxbtn.style.visibility = "hidden"; maxbtn.onclick = function () { frame.style.visibility = "visible"; closebtn.style.visibility = "visible"; minbtn.style.visibility = "visible"; maxbtn.style.visibility = "hidden"; };
```
