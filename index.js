function show(){
  var text = document.getElementById("screen").value
  console.log(text)
}
function changeClr(self){
  document.getElementById("screen").value+=self
}
function clearScreen(){
  document.getElementById("screen").value=""
}
function textEval(){
  var text =document.getElementById("screen").value
  res = eval(text)
  document.getElementById("screen").value = res
    
