var ws = new WebSocket("ws://127.0.0.1:8080/");     
ws.binaryType = "arraybuffer";

ws.onopen = function() {    
   alert("Opened");    
   ws.send("I'm Dynamsoft");    
};    
     
ws.onmessage = function (evt) {     
	var bytes = new Uint8Array(evt.data);
    var data = "";
    var len = bytes.byteLength;
    for (var i = 0; i < len; ++i) {
        data += String.fromCharCode(bytes[i]);
    }
    var img = document.getElementById("image");
    img.src = "data:image/png;base64,"+window.btoa(data);	
};    
     
ws.onclose = function() {    
   alert("Closed");    
};    
     
ws.onerror = function(err) {    
   alert("Error: " + err);    
};