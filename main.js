//ajax call(XMLHttpRequest)initiation
function loadjson(file,callback) {
    var xhr=new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function() {
      if(xhr.readyState ===4 && xhr.status =="200"){
        callback(xhr.responseText);
              }
          }
        xhr.send();
}
//function calling
loadjson("data.json",function(text) {
//if we use let tha data cannot be override
  let data=JSON.parse(text);
  console.log(data);
  basics(data.left);
  education(data.education);
})
// for main div calling
// we can use either class or id but not both
//var main=document.queryselector('.main');
//for main div id calling
var main=document.getElementById('main');
// element creation
var left=document.createElement("div");
// add class nmae to element
left.classList.add("left");
// add id to getElementById
 left.setAttribute("id","left");
//adding text to div
left.textContent="Profile Details:"
left.appendChild(document.createElement("HR"));
// to separate the image and profile name
// appending to main div
main.appendChild(left);
function basics(leftside){
  //basic -constructor contains left object detailsof json data
// leftside =data.left
var image=document.createElement("img");
image.src=leftside.photo;
// here photo is json Image
left.appendChild(image);
var name=document.createElement("h3");
name.textContent=leftside.name;
left.appendChild(name);
var email=document.createElement("h5");
email.textContent=leftside.email;
name.appendChild(email);
var ph=document.createElement("p");
ph.textContent=leftside.phone;
email.appendChild(ph);
console.log(left);
}
//right div creation
var right=document.createElement("div");
right.classList.add("right");
main.appendChild(right);
//education div start
var edu=document.createElement("div");
edu.classList.add("edu1");
edu.textContent="Educational Details:";
edu.appendChild(document.createElement("HR"));
right.appendChild(edu);
function education(educa){
for(i in educa){
  var e1=document.createElement("div");
  e1.classList.add("edu2");
  e1.textContent=educa[i].course;
  var ul=document.createElement("ul");
  for(j in educa[i].college){
    var li=document.createElement("li");
    li.textContent=educa[i].college[j];
    ul.appendChild(li);
    e1.appendChild(ul);
    edu.appendChild(e1);
    console.log(edu);
  }
}
}
