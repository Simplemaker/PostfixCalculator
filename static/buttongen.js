var t = document.getElementById("buttons")

function button(name, char){
  return "<button onclick=\"evalChar('"+char+"')\">"+name+"</button>"
}

function buttonRow(rowstring, charstring){
  var text = "<tr>"
  for(var i=0;i<rowstring.length;i++){
    text+="<td>"+button(rowstring[i],charstring[i])+"</td>"
  }
  return text+"</tr>"
}

buttons = ["789+","456-",["1","2","3","Ln"],[".","0","↲","e^x"]]
chars = ["789+","456-","123l",".0nj"]
for(var i=0;i<buttons.length;i++){
  t.innerHTML +=buttonRow(buttons[i],chars[i])
}