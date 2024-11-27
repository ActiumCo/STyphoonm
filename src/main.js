window.onload = function() {
 const btn1 = document.getElementById("btn1");
 const btn2 = document.getElementById("btn2");

 var counter = 0;

 // Create Web Manager Window

 btn2.addEventListener("click", function() {
 	paintWindow("file:///C:/", "Web Manager");
 });

 btn1.addEventListener("click", function() {
 	paintWindow("builtinapp/webinweb.html", "Web Access");
 });

 function paintWindow(lnk, title) {
 	counter++;
 	const windowclass = document.createElement("div");

 	windowclass.innerHTML = '<iframe src="' + lnk + '" name="WINDOWLNK"></iframe>';

 	windowclass.id = "window" + counter ;
	windowclass.style.height = "400px";
	windowclass.style.width = "600px";

 	const domtitle = document.createElement("div");
 	domtitle.id = "domtitle" + counter;

 	domtitle.innerHTML += title	

 	document.body.appendChild(windowclass).appendChild(domtitle);
 	dragElement(document.getElementById("window" + counter));
 }


 function dragElement(elmnt) {
   var domtitle = elmnt.id;
   domtitle = domtitle.replace(/\D/g,'');
   domtitle = "domtitle" + domtitle;


   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
   if (document.getElementById(domtitle)) {
     // if present, the header is where you move the DIV from:
     document.getElementById(domtitle).onmousedown = dragMouseDown;
   } else {
     // otherwise, move the DIV from anywhere inside the DIV:
     //elmnt.onmousedown = dragMouseDown;
   }

   function dragMouseDown(e) {
     e = e || window.event;
     e.preventDefault();
     // get the mouse cursor position at startup:
     pos3 = e.clientX;
     pos4 = e.clientY;
     document.onmouseup = closeDragElement;
     // call a function whenever the cursor moves:
     document.onmousemove = elementDrag;
   }

   function elementDrag(e) {
     e = e || window.event;
     e.preventDefault();
     // calculate the new cursor position:
     pos1 = pos3 - e.clientX;
     pos2 = pos4 - e.clientY;
     pos3 = e.clientX;
     pos4 = e.clientY;
     // set the element's new position:
     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
   }

   function closeDragElement() {
     // stop moving when mouse button is released:
     document.onmouseup = null;
     document.onmousemove = null;
   }
 }
}