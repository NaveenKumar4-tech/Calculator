let box = document.querySelectorAll(".box")
let inp = document.querySelector("#inp")
let boxa = document.querySelectorAll(".boxa"),
status = false,
data1 = "",
data2 = "",
data3 = "",
result = ""

//-------------getting values from buttons--
box.forEach(a=>{
    a.addEventListener("click",()=>{
        inp.value += a.innerText 
        if(status == false){
        data1 += a.innerText
        }else{
        data2 += a.innerText
        }
    })
})
//------------ operator ---------------

boxa.forEach(boxa=>{
    boxa.addEventListener("click",()=>{
        status = true
        inp.value = ""
        data3 = boxa.innerText

    })
})

function operator(){

if(data3 == '+'){
    result = Number(data1) + Number(data2)
}
else if(data3 == '-'){
    result = Number(data1) - Number(data2)
}
else if(data3 == '*'){
    result = Number(data1) * Number(data2)
}
else if(data3 == '/'){
    result = Number(data1) / Number(data2)
}
    data1 = result
    data2 = ""
    data3 = ""
    status = false

inp.value = result

}   


// ------------------clear all ------------
function Clear(){
    data1 = ""
    data2 = ""
    data3 = ""
    result = ""
    inp.value = ""
    status = false
}

// -----------Delete single value  
function Delete(){
    inp.value = inp.value.slice(0,-1) 

    if (status==false){ 
    data1=data1.slice(0,-1)
    }else{
    data2=data2.slice(0,-1)

}
}
