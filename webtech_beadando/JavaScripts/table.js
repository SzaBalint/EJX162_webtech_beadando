function onSliderChange(){
  var size;
  if(document.getElementById("tableSlider").value == 1){
    size = 4;
  } else if (document.getElementById("tableSlider").value == 2){
    size = 5;
  } else {
    size = 6;
  }
  document.getElementById("divTable").remove();
  var table = document.createElement("table");
  table.setAttribute("id","main");
  for(var i = 1; i<=size ;i++){
    var tr = document.createElement("tr");
    for(var j = 1; j<=size ;j++){
      var td = document.createElement("td");
      if(i%2 == 0){
        var text = document.createTextNode("X");
      }else {
        var text = document.createTextNode("O");
      }
      td1.appendChild(text);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  var div = document.createElement("div");
  div.appendChild(table);
  div.classList.add("divStyle");
  div.setAttribute("id","divTable");
  document.body.appendChild(div);
}

function onSliderLoad(){
  var size = 5;
  var table = document.createElement("table");
  table.setAttribute("id","main");
  for(var i = 1; i<=size ;i++){
    var tr = document.createElement("tr");
    for(var j = 1; j<=size ;j++){
      var td = document.createElement("td");
      if(i%2 == 0){
        var text = document.createTextNode("X");
      }else {
        var text = document.createTextNode("O");
      }
      td1.appendChild(text);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  var div = document.createElement("div");
  div.appendChild(table);
  div.classList.add("divStyle");
  div.setAttribute("id","divTable");
  document.body.appendChild(div);
}

