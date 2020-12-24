const namearea = document.getElementById("namearea");

    document.getElementById("btn_num").onclick = function() {
        const num = document.getElementById("sel_num").value;
        for (var i = 1; i <= num; i++) {
        const txt_name = document.createElement("input");
		txt_name.setAttribute("type","text"); 
		txt_name.setAttribute("maxlength","20"); 
		txt_name.setAttribute("size","20"); 
        txt_name.setAttribute("value","");
        namearea.appendChild(txt_name);
        }   

    document.getElementById("btn_GO").onclick = function() {
    
        const fortunes = [];
        document.querySelectorAll("#namearea input").forEach((element) => {
            fortunes.push(element.value);
        });
        const index = Math.floor(Math.random() * fortunes.length);
        document.getElementById('result-area').innerText = fortunes[index];
    };
}


