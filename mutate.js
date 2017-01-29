
function mutation(arr) {
  
  var fElement = arr[0].toLowerCase();
  var sElement = arr[1].toLowerCase();
  var result;
  
  for(var i = 0; i < sElement.length; i++) {
    
    result = fElement.indexOf(sElement[i]);
    
    if(result < 0) {
      return false;
    } else {
      result = true;
    }
    
    
  }
  
  
  
  return result;
}

mutation(["hello", "hey"]);
