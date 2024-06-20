var mat = [];
var T = 1;
var contaP = 0;
var vittoria = false;
var GiocoAvviato = false;

function init()
{
    for(let i = 0; i < 3; i++)
    {
        mat[i] = [];
        for(let j = 0; j < 3; j++)
        {
            mat[i][j] = 0;
        }
    }
    
    console.log(mat);

    let main = document.querySelector("main");

    for(let i = 0; i < 3; i++)
    {
        main.innerHTML += `<section><button id = "button${i}_0" onclick = "gioco(${i},0)"></button><button id = "button${i}_1" onclick = "gioco(${i},1)"></button><button id = "button${i}_2" onclick = "gioco(${i},2)"></button></section>`;
    }

    main.innerHTML += `<button id = "gioca" onclick = "gioca()">GIOCA</button>`;
}

function gioco(r,c)
{
    if(GiocoAvviato)
    {
        mat[r][c] = T;
        let button = document.getElementById("button" + r + "_" + c);
        switch(T)
        {
            case 1:
                button.innerText = "X";
                T++;
                break;

            case 2:
                button.innerText = "O";
                T--;
                break;
        }

        button.disabled = true;
        contaP++;

        if(contaP == 9)
        {
            alert("Tutte le caselle sono piene, è un pareggio");
        }
        else if(!vittoria)
        {
            controlloVittoria(r,c);
        }
    }
    else
        alert("Prima inizia il gioco");
}

function controlloVittoria(r,c)
{
    controlloColonna(r,c);
    if(!vittoria)
        controlloRiga(r,c);
    if(!vittoria)
        controlloDS(r,c);
    if(!vittoria)
        controlloDP(r,c);

    if(vittoria)
    {
        switch(T)
        {
            case 1:
                alert("Ha vinto il giocatore 2");
                break;
            case 2:
                alert("Ha vinto il giocatore 1");
                break;
        }

        disabilitaBottoni();
    }    
}

function disabilitaBottoni()
{
    for(let i = 0; i < 3; i++)
    {
        for(let j = 0; j < 3; j++)
        {
            document.getElementById("button" + i + "_" + j).disabled = true;
        }
    }
}

function gioca()
{
    if(!GiocoAvviato) 
        GiocoAvviato = true;
    else
    {
        GiocoAvviato = true;
        document.location.reload();
    }
}

function controlloColonna(r,c)
{
    r = 0;
    let cont = 0;
    let X = mat[r][c];
    while(r < 3 && cont != 3)
    {
        if(mat[r][c] == X)
            cont++;
        r++;
    }

    if(cont == 3)
        vittoria = true;
}

function controlloRiga(r,c)
{
    c = 0;
    let cont = 0;
    let X = mat[r][c];
    while(c < 3 && cont != 3)
    {
        if(mat[r][c] == X)
            cont++;
        c++;
    }

    if(cont == 3)
        vittoria = true;
}

function controlloDP(r,c)
{
    if(mat[0][0] === mat[1][1] && mat[1][1] === mat[2][2] && mat[0][0] != 0)
        vittoria = true;
}

function controlloDS(r,c)
{
    if(mat[0][2] === mat[1][1] && mat[1][1] === mat[2][0] && mat[0][2] != 0)
        vittoria = true;
}