var Target = document.getElementById("current");
        function clock() {
            var time = new Date();

            var year = time.getFullYear();
            var month = time.getMonth();
            var date = time.getDate();
            var day = time.getDay();
            var week = ['일', '월', '화', '수', '목', '금', '토'];

            var hours = time.getHours();
            var minutes = time.getMinutes();
            var seconds = time.getSeconds();

            Target.innerText = 
            `${year}년 ${month + 1}월 ${date}일 ${week[day]}요일 ` +
            `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
                
        }
        clock();
        setInterval(clock, 1000); // 1초마다 실행

var listBox = document.getElementById("ListBox");

function save(){
    var toDotext = document.getElementById("toDotext");
    var Info = toDotext.value;

    var new_ListInfoBox = document.createElement("div");
    var new_left_div = document.createElement("div");
    var new_right_div = document.createElement("div");
    var new_img = document.createElement("img");
    var new_p = document.createElement("p");

    new_ListInfoBox.setAttribute("class", "ListInfoBox");
    new_left_div.setAttribute("class", "ListInfoImgBox")
    new_right_div.setAttribute("class", "ListInfoTxtBox")
    new_img.setAttribute("src", "/check-mark.png");
    new_img.setAttribute("id", "checkImg");
    new_p.setAttribute("id","ListInfoTxt");

    new_p.innerHTML = Info;

    new_left_div.appendChild(new_img);
    new_right_div.appendChild(new_p);

    new_ListInfoBox.appendChild(new_left_div);
    new_ListInfoBox.appendChild(new_right_div);

    listBox.appendChild(new_ListInfoBox);

    toDotext.value= null;
}




