---
title: "Framelet Docs | Framelet List"
description: "The official Framelet Documentation"
---

## Stable Framelets

### Original

Creates a frame that completely covers the current webpage and fills it with a new one. Adds a "CLOSE" button to close.

Code:

```JAVASCRIPT
javascript: var frame = document.createElement("iframe"); frame.src = prompt("URL:", "https://"); frame.style.border = "none"; frame.style.position = "fixed"; frame.style.top = "0%"; frame.style.right = "0%"; frame.style.height = "100vh"; frame.style.width = "100vw"; frame.style.backgroundColor = "white"; frame.style.zIndex = "100000"; document.body.appendChild(frame); var btn = document.createElement("button"); btn.style.position = "fixed"; btn.style.top = "0%"; btn.style.right = "50%"; btn.style.zIndex = "1000000"; btn.innerText = "CLOSE"; document.body.appendChild(btn); btn.onclick = function () { frame.remove(); btn.remove(); };
```

### Percent80

Creates a frame that covers 64% the current webpage (80% width, 80% height) and fills it with a new one. Adds a "CLOSE" button to close.

Code:

```JAVASCRIPT
javascript: var frame = document.createElement("iframe"); frame.src = prompt("URL:", "https://"); frame.style.border = "none"; frame.style.position = "fixed"; frame.style.top = "20%"; frame.style.right = "10%"; frame.style.left="10%"; frame.style.height = "80vh"; frame.style.width = "80vw"; frame.style.backgroundColor = "white"; frame.style.zIndex = "100000"; document.body.appendChild(frame); var btn = document.createElement("button"); btn.style.position = "fixed"; btn.style.top = "20%"; btn.style.right = "50%"; btn.style.zIndex = "1000000"; btn.innerText = "CLOSE"; document.body.appendChild(btn); btn.onclick = function () { frame.remove(); btn.remove(); };
```

## Insiders Framelets

***These Framelets are in development and may not work. If they do not work, they will do no damage. To fix a problem, reload the page that the Framelet was used on.***

### Original (Insiders)

Creates a frame that completely covers the current webpage and fills it with a new one. Adds a "CLOSE" button to close and a "HIDE" button to hide temporarily. The "HIDE" button will hide itself, the frame and the "CLOSE" button and will also make visible a "SHOW" button, which when clicked will hide itself and unhide the other buttons and the frame.

Code:

```JAVASCRIPT
javascript: var frame = document.createElement("iframe"); frame.src = prompt("URL:", "https://"); frame.setAttribute("style", "border:none;position:fixed;top:0%;right:0%;height:100vh;width:100vw;background-color:white;z-index:10000;"); document.body.appendChild(frame); var closebtn = document.createElement("button"); closebtn.setAttribute("style", "border:2px solid black;color:black;padding:2px;font-weight:bold;background-color:lightgrey;position:fixed;top:0%;right:50%;z-index:1000000;"); closebtn.innerText = "CLOSE"; document.body.appendChild(closebtn); closebtn.onclick = function () { frame.remove(); closebtn.remove(); minbtn.remove(); maxbtn.remove(); }; var minbtn = document.createElement("button"); minbtn.setAttribute("style", "border:2px solid black;color:black;padding:2px;font-weight:bold;background-color:lightgrey;position:fixed;top:0%;right:25%;z-index:1000000;"); minbtn.innerText = "HIDE"; document.body.appendChild(minbtn); minbtn.onclick = function () { frame.style.visibility = "hidden"; closebtn.style.visibility = "hidden"; maxbtn.style.visibility = "visible"; minbtn.style.visibility = "hidden"; }; var maxbtn = document.createElement("button"); maxbtn.setAttribute("style", "border:2px solid black;color:black;padding:2px;font-weight:bold;background-color:lightgrey;position:fixed;top:0%;right:75%;z-index:1000000;"); maxbtn.innerText = "SHOW"; document.body.appendChild(maxbtn); maxbtn.style.visibility = "hidden"; maxbtn.onclick = function () { frame.style.visibility = "visible"; closebtn.style.visibility = "visible"; minbtn.style.visibility = "visible"; maxbtn.style.visibility = "hidden"; };
```
