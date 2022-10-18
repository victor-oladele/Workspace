// let count = 0
// function increase(){

// count = count + 1
// document.getElementById("counts").textContent = count
// console.log(count)

// }

// function save(){

//     let constr = count + " - "

// document.getElementById("entrycount").textContent += constr
// document.getElementById("counts").textContent = 0
// count = 0

// }

let count = 0

function increase(){

count = count + 1
document.getElementById("counts").textContent = count

}
function save(){

let constr = count + "-"
document.getElementById("entrycount").textContent += constr
document.getElementById("counts").textContent = 0
count = 0


}


