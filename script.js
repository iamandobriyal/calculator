let body = document.querySelector('body');
let calculator = document.querySelector('calculator');
let topo = document.querySelector('top');
let bottom = document.querySelector('bottom');
let buttons = document.querySelectorAll('button');
let display = document.querySelector('p');
let output = document.querySelector('h1');
let mode = document.querySelector('.mode');
let img = document.querySelector('img');
for(let i=0; i<buttons.length; i++)
{
    if(i!=0 && i!=1 && i!=18)
    buttons[i].addEventListener('click',function(){
        if(i==7)
        {
            display.textContent = display.textContent+"*";
            output.textContent = eval(display.textContent);
        }
        else{
            display.textContent = display.textContent+buttons[i].textContent
            output.textContent = eval(display.textContent);
        }
        
    });
}
console.log(buttons);
buttons[0].addEventListener('click',function(){
    display.textContent = "";
    output.textContent = "";
});
buttons[1].addEventListener('click',function(){
    display.textContent = (display.textContent).slice(0,-1);
});

buttons[18].addEventListener('click',function(){
    display.textContent = output.textContent;
    output.textContent = "";
});
let k=0;

mode.addEventListener('click',function(){
    if(k==0)
    {
        img.src = "images/dark.png";
        body.style.backgroundColor = "#f2f1f1";
        for(let i=0; i<buttons.length; i++)
            {
                if(i!=0 && i!=1 && i!=18 && i!=2 && i!=3 && i!=7 && i!=11 && i!=15)
                {
                    buttons[i].style.color = "black";
                }
            };
        for(let i=0; i<buttons.length; i++)
            {
                buttons[i].style.backgroundColor = "rgba(255,255,255,1)";
                buttons[i].style.boxShadow = "rgba(149, 157, 165, 0.2) 0px 8px 24px;";
            }   
            calculator.style.backgroundColor = "white";
            bottom.style.backgroundColor = "#f2f1f1";
            topo.style.color = "black";
            k++;
        }
        else
        {
            img.src = "images/light.png";
            body.style.backgroundColor = "black";
            for(let i=0; i<buttons.length; i++)
            {
                if(i!=0 && i!=1 && i!=18 && i!=2 && i!=3 && i!=7 && i!=11 && i!=15)
                {
                    buttons[i].style.color = "white";
                }
            };
            calculator.style.backgroundColor = "#f9f9f9";
            for(let i=0; i<buttons.length; i++)
            {
                buttons[i].style.backgroundColor = "#282B33";
                buttons[i].style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
            }
            calculator.style.backgroundColor = "#22252d";
            topo.style.color = "white";
            bottom.style.backgroundColor = "#282B33";
        k--;
    }
});