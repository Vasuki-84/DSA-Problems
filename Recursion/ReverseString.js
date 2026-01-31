

// Reverse a String

var RevStr = function(str){
  if(str==="") {
    return "";
    }else{
  return RevStr(str.substring(1))+str.charAt(0);
}
}
console.log(RevStr("hello"));



