var mat = [];

function init()
{
    let main = document.querySelector("main");

    for(let i = 0; i < 3; i++)
    {
        console.log(i);
        main.innerHTML += `<section><button id = "button${i}_0"></button><button id = "button${i}_1"></button><button id = "button${i}_2"></button></section>`;
    }
}