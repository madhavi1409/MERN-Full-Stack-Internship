var f = document.getElementById("first");
console.log(f);
f.innerHTML = "hey";
let para = document.getElementsByTagName('p')
console.log(para);
for(let i = 0; i<para.length;i++){
  para[i].innerHTML=i+ "hello this is text";
}
let d = document.getElementsByClassName("second")
console.log(d)
console.log(d[0]);
d[0].innerHTML="accessing elements using class";
let e = document.querySelector('div.box')
console.log(e)
let k = document.querySelectorAll("div");
console.log(k[0]);



