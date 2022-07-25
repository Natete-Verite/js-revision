// let word = document.getElementsByClassName("paragraph")
// .innerHTML  = "This is a JS file"

// let word = document.getElementsByTagName("p")[0]
// .innerHTML  = "This is a JS file".toLocaleUpperCase()

let child = document.createElement("span")
child.appendChild(document.createTextNode("This is a span"))
// let word = document.getElementById("head").appendChild(child)

let text = document.querySelector("#head").appendChild(child)

console.log(text.children);
document.querySelectorAll(".paragraph").innerHTML = "query Selectors"