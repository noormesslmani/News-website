const news= document.getElementById('news')

let newssection= `<div class="col-lg-4">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  </div>`
$(document).ready(() => {
    $.ajax({
        type: "GET",
        url: "http://localhost/selectnews.php",
        dataType: "html",
        success: (json) => {
        let data = JSON.parse(json);
        for (newsdetails of data){
            console.log(newsdetails.time)
            newssection= `<div class="col-lg-4 news ">
            <div class="title">${newsdetails.title}</div>
            <div class="contents">${newsdetails.contents}</div>
            <div class="date">${newsdetails.time}</div>
            <hr>
            </div>` 
        news.innerHTML+= newssection}
        console.log(data);}
    })
})