const divElm = document.createElement('div');
divElm.style.width = '130px';
divElm.style.height = '150px';
divElm.style.position = 'absolute';
//divElm.style.backgroundColor = 'red';
divElm.style.backgroundSize = 'cover';
//divElm.style.bottom = `${innerHeight - divElm.offsetHeight - 150}px`;

document.body.append(divElm);

//let dx = 0;
let run = false;

addEventListener ('keydown', (e)=>{
    if (e.key === 'ArrowRight'){
        dx= 10;
        run = true;
        divElm.style.transform = 'rotateY(0deg)';
    }else if (e.key === 'ArrowLeft'){
        dx = -10;
        run = true;
        divElm.style.transform = 'rotateY(180deg)';
    }

});

addEventListener ('keyup' , (e)=>{
    if (e.key === 'ArrowRight'){
        dx= 0;
        run = false;
    }else if (e.key === 'ArrowLeft'){
        dx = 0;
        run = false;
    }

});

function handlePlayerMovements(){
    if (run){
        divElm.style.left =`${divElm.offsetLeft+dx}px`;
    }
}

setInterval(handlePlayerMovements, 50);

index = 1;
function renderCharactor (){

    if (run){
        if (index>=20) index =1;
        divElm.style.backgroundImage = `url('img/Run (${index++}).png')`;

    }else{
        if (index>=15) index =1;
        divElm.style.backgroundImage = `url('img/Idle (${index++}).png')`;
    }
    
    
    

}

setInterval(renderCharactor , 50);


