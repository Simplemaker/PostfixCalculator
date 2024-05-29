numkeys = "0123456789."
funckeys= "+-ljn"

function screenOut(val){
  document.getElementById("screen").innerHTML=val
}

function evalChar(char){
  console.log(char)
  var isKeyFn = funckeys.indexOf(char)!=-1
  if(!isKeyFn && mode!="number"){
    //number was pressed and not in number mode
    //transition code to number mode
    mode = "number"
    numstring = ""
  }
  if(isKeyFn && mode!="standard"){
    var p = parseFloat(numstring)
    stack.push(new Complex(p))
    skipEnter = true
    mode = "standard";
  }

  if(mode == "standard"){
      if(char == "n" && !skipEnter){
        var c = stack.pop()
        stack.push(c)
        stack.push(c)
      }
      if(char == "+"){
        var c1 = stack.pop()
        var c2 = stack.pop()
        stack.push(add(c1, c2))
      }
      if(char == "-"){
        var c1 = stack.pop()
        var c2 = stack.pop()
        c1.real = -c1.real
        c1.imag = -c1.imag
        stack.push(add(c1, c2))
      }
      if(char == "l"){
        var c = stack.pop()
        stack.push(log(c))
      }
      if(char == "j"){
        var c = stack.pop()
        stack.push(exp(c))
      }
      //display top of stack in standard mode
      screenOut(stack[stack.length-1].string())

  }else if(mode=="number"){
     numstring += char
     screenOut(numstring)
  }
  skipEnter = false
}


stack = [new Complex(0)]
//this is the rpn stack variable

mode = "standard"
//modes include
//standard - acts like a normal rpn calc
//number - number entry mode
//
//if a function key or enter is pressed while in number mode, the number is added onto the stack.
skipEnter = false;
//enter does not get pressed after a number input
numstring = ""
//string used for number input