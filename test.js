// // obj = {a: 1, b:2, c:3, d:4}
// // console.table(obj)

// // console.info("Hey don't drink soda")

// console.log("log")
// console.info("info")
// console.warn("warn")
// console.error("err")
// console.assert("err" !=false)
// console.assert("err" ==false)

// console.time("forloop")
// for(let i=0;i<5;i++){
//     console.log(233)
// }
// console.timeEnd("forloop")


// console.time("whileloop")
// for(let i=0;i<5;i++){
//     console.log(233)
// }
// console.timeEnd("whileloop")

// alert("Enter the value of a!")
// let a = prompt("Enter a here:", "576")

// a = Number.parseInt(a)
// alert("You entered a of type " + (typeof a))
// let write = confirm("Do you want to write it in the page")
// if(write){
//     document.write(a)
// }
// else{
//     document.write("Please allow me to write")
// }


// Window_BOM(Browser_Object_Model)_DOM(Document_Object_Model)
// window.console.log(window)
// console.log(document.body)
// document.body.style.background = "gray"

// // practice problem
// let age = prompt("Enter your age")
// age = Number.parseInt(age)
// let runAgain = true;

// while(runAgain){
// const canDrive = (age)=>{
//     return age>=18?true:false
// }
// if(canDrive(age)){
//     alert ("Yes, you can drive")
// }
// else{
//     alert("No, you cannot drive")
// }
// runAG
// }

// let number = prompt("Enter your number")
// number = Number.parseInt(number)

// if(number > 4){
//     location.href = "https://google.com"
// }

// let color = prompt("Enter your page background color")
// document.body.style.background = color


// const changeBgRed = () => {
//     document.body.firstElementChild.style.background = "red"
// }

// let b = document.body
// console.log("First child of b is: ", b.firstChild)
// console.log("Frist element child of b is: ", b.firstElementChild)

// let t = document.body.firstElementChild.firstElementChild
// console.log(t)
// console.log(t.rows)
// console.log(t.caption)
// console.log(t.tHead.firstElementChild)
// console.log(t.tFoot)
// console.log(t.tBodies)
// console.log(t.rows[0].rowIndex)

// //change the card title to red
// let ctitle = document.getElementById("firstcardtitle")
// ctitle.style.color = "green"

// let ctitles = document.querySelectorAll(".card-title")
// ctitles[0].style.color = "red"
// ctitles[1].style.color = "green"
// ctitles[2].style.color = "blue"
// console.log(ctitles)

// document.querySelector(".this").style.color = "black"
// document.querySelector(".this").style.background = "red"
// console.log(document.getElementsByTagName("a"))
// console.log(document.querySelector(".card").getElementsByTagName("a"))
// console.log(document.getElementsByName("search"))

// let id1 =  document.getElementById("id1")
// console.log(id1)
// console.log(id1.matches(".class"))
// console.log(id1.matches(".box"))
// console.log(sp1.closest("#sp1"))
// console.log(id1.contains(sp1))
// console.log(sp1.contains(sp1))
// console.log(sp1.contains(id1))

// document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"
// document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
// document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"
// document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"

// Array.from(document.getElementsByTagName("li")).forEach(element => {
//     element.style.background = "cyan";
// });


let user = prompt("Enter S, W or G")
let cpuI = Math.floor(Math.random() *3);
let cpu = ["S", "W", "G"][cpuI]
const match = (cpu, user) =>{
    if(cpu === user){
        return "Nobody. This game is tied."
    }
    else if(cpu === "S" && user === "W"){
        return "cpu"
    }
    else if(cpu === "S" && user === "G"){
        return "user"
    }
    else if(cpu === "G" && user === "W"){
        return "user"
    }
    else if(cpu === "G" && user === "S"){
        return "cpu"
    }
    else if(cpu === "W" && user === "S"){
        return "user"
    }
    else if(cpu === "W" && user === "G"){
        return "cpu"
    }
}
let result = match(cpu, user)
document.write(`CPU:${cpu} </br> User:${user} </br>The winner is: ${result}` )
