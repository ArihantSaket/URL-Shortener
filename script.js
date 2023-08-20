let button = document.getElementById("shorten");

button.addEventListener('click', short);

async function short(){
    let longURL = document.getElementById('longLink').value;
    let shortURL = document.getElementById('shortened');

    const product = await fetch(`https://api.shrtco.de/v2/shorten?url=${longURL}`)
    const data = await product.json()

    shortURL.value = data.result.short_link2;

    console.log(data.result.short_link2)
}

let newURL = document.getElementById('shortened');
let cpoy = document.getElementById('copy');

cpoy.onclick = ()=>{
    newURL.select();
    window.navigator.clipboard.writeText(newURL.value);
}