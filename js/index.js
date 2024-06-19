var sideName = document.getElementById("inputName")
var sideURL = document.getElementById("inputURL")
var container =[]
if(localStorage.getItem("BOOKMark") != null){
  container = JSON.parse(localStorage.getItem("BOOKMark"))
  display()
}
function add()
{
   var book = {
    Name :sideName.value,
    URL :sideURL.value,
   }
   container.push(book)
   localStorage.setItem("BOOKMark" , JSON.stringify(container))
   reset()
   display()

   console.log()
}
function display(){
  var cartona =``
  for(var i=0 ; i<container.length ; i++){
    cartona +=`<div class="col-sm-2">${i + 1} </div>
    <div class="col-sm-4">${container[i].Name}</div>
    <div class="col-sm-3">
       <a href="https://www.${container[i].URL}/" class="btn btn-visit " target="_blank">
    <i class="fa-solid fa-eye pe-1"></i>visit
</a>
    </div>
    <div class="col-sm-3">
        <button class="btn btn-delete" onclick="deleteProdect(${i})">
            <i class="fa-solid fa-trash-can"></i>
            Delete
        </button>
       </div> `
  }
  document.getElementById("row").innerHTML= cartona
}

function  deleteProdect(numINDEX){
  container.splice(numINDEX , 1)
  localStorage.setItem("BOOKMark" , JSON.stringify(container))
  display()
}

function reset()
{
  sideName.value =null
  sideURL.value=null
}

function valid(element)
{
  var regex = {
    inputName:/^[A-Z]?[a-z]{3,}$/,
    inputURL: /^[a-z]{1,}\.com$/,
  }

if(regex[element.id].test(element.value) == true){
  element.classList.remove("is-invalid")
  element.classList.add("is-valid")

}else{ 
 element.classList.add("is-invalid")
 element.classList.remove("is-valid")

}
  }

  if(valid(element) != true){
    
  }
