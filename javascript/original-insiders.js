javascript: var frame = document.createElement("iframe"); frame.src = prompt("URL:", "https://"); frame.setAttribute("style", "border:none;position:fixed;top:0%;right:0%;height:100vh;width:100vw;background-color:white;z-index:10000;"); document.body.appendChild(frame); var closebtn = document.createElement("button"); closebtn.setAttribute("style", "border:2px solid black;color:black;padding:2px;font-weight:bold;background-color:lightgrey;position:fixed;top:0%;right:50%;z-index:1000000;"); closebtn.innerText = "CLOSE"; document.body.appendChild(closebtn); closebtn.onclick = function () { frame.remove(); closebtn.remove(); minbtn.remove(); maxbtn.remove(); }; var minbtn = document.createElement("button"); minbtn.setAttribute("style", "border:2px solid black;color:black;padding:2px;font-weight:bold;background-color:lightgrey;position:fixed;top:0%;right:25%;z-index:1000000;"); minbtn.innerText = "HIDE"; document.body.appendChild(minbtn); minbtn.onclick = function () { frame.style.visibility = "hidden"; closebtn.style.visibility = "hidden"; maxbtn.style.visibility = "visible"; minbtn.style.visibility = "hidden"; }; var maxbtn = document.createElement("button"); maxbtn.setAttribute("style", "border:2px solid black;color:black;padding:2px;font-weight:bold;background-color:lightgrey;position:fixed;top:0%;right:75%;z-index:1000000;"); maxbtn.innerText = "SHOW"; document.body.appendChild(maxbtn); maxbtn.style.visibility = "hidden"; maxbtn.onclick = function () { frame.style.visibility = "visible"; closebtn.style.visibility = "visible"; minbtn.style.visibility = "visible"; maxbtn.style.visibility = "hidden"; };