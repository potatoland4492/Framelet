---
title: "Framelet Docs | Framelet List"
description: "The official Framelet Documentation"
---

Here is the complete list of all Framelets.

## Original

Code:

```JAVASCRIPT
javascript: var frame = document.createElement("iframe"); frame.src = prompt("URL:", "https://"); frame.style.border = "none"; frame.style.position = "fixed"; frame.style.top = "0%"; frame.style.right = "0%"; frame.style.height = "100vh"; frame.style.width = "100vw"; frame.style.backgroundColor="white"; frame.style.zIndex = "100000"; document.body.appendChild(frame); var btn = document.createElement("button"); btn.style.position = "fixed"; btn.style.top = "0%"; btn.style.right = "50%"; btn.style.zIndex = "1000000"; btn.innerText = "CLOSE"; document.body.appendChild(btn); btn.onclick = function () { frame.remove(); btn.remove(); };
````

## Percent80

Code:

```JAVASCRIPT

```
