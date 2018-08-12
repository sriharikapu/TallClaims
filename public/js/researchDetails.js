console.log("research details.js");

$.get("http://localhost:5000/comments/" + localStorage.getItem('id'), function(data){
  console.log(data);
  comments = "";
  for(x = 0; x < data.doc.assigned.length; x++){
    if(data.doc.assigned[x].comment){
      comments += `<li class="list-group-item">${data.doc.assigned[x].comment}</li>`;
    }
  }
  console.log(comments);
  $('#comments').html(comments);
  $('#disabledInput1').html(data.doc.title);
  $('#disabledInput2').html(data.doc.description);
});
