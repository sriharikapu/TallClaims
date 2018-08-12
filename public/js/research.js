$.get("http://localhost:5000/getList", function(data){
  console.log(data.research);
  data = data.research;
  toShow = "";
  for(var x = 0; x < data.length; x += 3){
    temp = `<div class="row">`;
    for(var y = 0; y < 3 && x+y < data.length; y++){
      temp += `<div class="card col-sm" style="width: 18rem; margin-left: 20px;">
              <div class="card-body">
                <h5 class="card-title">${data[x+y].title}</h5>
                <p class="card-text">${data[x+y].description}</p>
              </div>

              <div class="card-body">
                <a onclick=paperDetails("${data[x+y].id}") class="card-link">3 Approve</a>
                <a onclick=paperDetails("${data[x+y].id}") class="card-link">4 Unapprove</a>
              </div>
            </div>`;
    }
    temp += "</div>";
    toShow += temp;
  }
  $('#allCards').html(toShow);
});

function paperDetails(id){
  localStorage.setItem('id', id);
  window.location.replace("http://localhost:8000/views/research_paper_details.html");
}
