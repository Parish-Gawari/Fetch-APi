let cont = document.getElementById("container")
let btn = document.getElementById("btn");

// Created a function where we are appending the image to our document
const append = (data) =>{
    console.log(data);
    let image = document.createElement("img");
    image.src = data.message;
    cont.append(image)
    
}

// Fetching the Api
const url = "https://dog.ceo/api/breeds/image/random";
async function getdata(){
    try{
        let res = await fetch(url);
        // console.log(res)
        let data = await res.json();
        console.log(data)
        append(data)
    }catch(err){
        console.log(err)
    }
}
getdata()

// creating a function for our button
const func = ()=>{
    location.reload();
}



