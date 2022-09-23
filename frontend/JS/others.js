const newsOther= document.getElementById('othernews')

let newssection= `<div class="col-lg-4">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  </div>`
$(document).ready(() => {
    $.ajax({
        type: "GET",
        url: "http://localhost/news/backend/others.php",
        dataType: "html",
        success: (json) => {
        let data = JSON.parse(json);
        for (newsdetails of data){
            console.log(newsdetails.time)
            newssection= `<div class="col-lg-4 news ">
            <div class="title">${newsdetails.title}</div>
            <div class="type">Others</div>
            <div class="contents">${newsdetails.contents}</div>
            <div class="date">${newsdetails.time}</div>
            </div>` 
        newsOther.innerHTML+= newssection}
        console.log(data);}
    })
})