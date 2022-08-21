console.log("hello");


const container = document.querySelector('.container');

for(let i = 0 ; i < 40 ; i++)
{ 

    const col = document.createElement('div');
    col.classList.add('col');

    for(let j = 0 ; j < 40 ; j++)
    { 

        const content = document.createElement('div');
        content.classList.add('content');

        col.appendChild(content);
    }

    container.appendChild(col);
}


let isMouseDown = false;
container.addEventListener('mousedown', ()=>{isMouseDown = true;})
container.addEventListener('mouseup', ()=>{isMouseDown = false;})


function draw(e){

    if(this.classList.length !== 2 && isMouseDown == true)
    {    
        this.classList.add('color');
    }
}


function drawClick(e){
    
    if(this.classList.length !== 2)
        this.classList.add('color');
    
}

const contentHover = document.querySelectorAll('.content');
contentHover.forEach((content) => {

    content.addEventListener('mouseover', draw);
    content.addEventListener('click', drawClick);
});

function clean(e){

    const contentHover = document.querySelectorAll('.content');

    contentHover.forEach((content) => {

        content.classList.remove('color');
    
    });

}

const button = document.querySelector('.clean');
button.addEventListener('click',clean);