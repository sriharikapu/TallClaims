console.log("research details.js");

$.get("http://localhost:5000/comments/" + localStorage.getItem('id'), function(data){
  console.log(data);
  comments = "";
  for(x = 0; x < data.doc.assigned; x++){
    if(data.doc.assigned[x].comment){
      comments += `<li class="list-group-item">${data.doc.assigned[x].comment}</li>`;
    }
  }
  $('#comments').html(comments);
});
