console.log("hello");


const container = document.querySelector('.container');

for(let i = 0 ; i < 85 ; i++)
{ 

    const col = document.createElement('div');
    col.classList.add('col');

    for(let j = 0 ; j < 85 ; j++)
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
        console.log(this.classList);
        this.classList.add('color');
    }
}

const contentHover = document.querySelectorAll('.content');

contentHover.forEach((content) => {

    content.addEventListener('mouseover', draw);
    
});