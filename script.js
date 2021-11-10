let body = document.querySelector('body');
let calculator = document.querySelector('calculator');
let topo = document.querySelector('top');
let bottom = document.querySelector('bottom');
let buttons = document.querySelectorAll('button');
let display = document.querySelector('p');
let output = document.querySelector('h1');
let mode = document.querySelector('.mode');
let img = document.querySelector('img');
let operators = ["*","/","-","+","%"];
let keys = ["1","2","3","4","5","6","7","8","9","0"];
body.addEventListener('keypress',function(e){
    if(e.key=="Enter") 
    {
        display.textContent = output.textContent;
        output.textContent = "";

    }
    for(let i=0; i<operators.length; i++)
    {
        if(e.key==operators[i])
        {
            let len = (display.textContent).length;  
            let lastChar = (display.textContent).charAt(len-1);
            if(lastChar!="+" && lastChar!="/" && lastChar!="-" && lastChar!="*" && lastChar!="%")
            display.textContent = display.textContent + operators[i];
        }
    }
    for(let i=0; i<keys.length; i++)
    {
        if(e.key==keys[i])
        {
            display.textContent = display.textContent + keys[i];
            output.textContent = eval(display.textContent);
        }
    }
})
body.onkeydown = function(e)
{
    var keyId = e.keyCode;
    if(keyId == 8)
    {
        display.textContent = (display.textContent).slice(0,-1);
        output.textContent = eval(display.textContent);
    }
}

for(let i=0; i<buttons.length; i++)
{
    if(i!=0 && i!=1 && i!=18 && i!=2 && i!=3 && i!=7 && i!=11 && i!=15)
    buttons[i].addEventListener('click',function(){
            display.textContent = display.textContent+buttons[i].textContent
            output.textContent = eval(display.textContent);
    });
}

for(let i=0; i<buttons.length; i++)
{
    if(i==2 || i==3 || i==11 || i==15)
    {
        buttons[i].addEventListener('click',function()
        {
            let len = (display.textContent).length;  
            let lastChar = (display.textContent).charAt(len-1);
            if(lastChar!="+" && lastChar!="/" && lastChar!="-" && lastChar!="*" && lastChar!="%")
            {
                display.textContent = display.textContent+buttons[i].textContent;
            }
            lastChar = 0;
        })
    }
    else if(i==7)
    {
        buttons[i].addEventListener('click',function()
        {
            let len = (display.textContent).length;  
            let lastChar = (display.textContent).charAt(len-1);
            if(lastChar!="+" && lastChar!="/" && lastChar!="-" && lastChar!="*" && lastChar!="%")
            {
                display.textContent = display.textContent+"*";
            }
        })
    }
}

buttons[0].addEventListener('click',function(){
    display.textContent = "";
    output.textContent = "";
});
buttons[1].addEventListener('click',function(){
    if(display.textContent == "")
    {
        output.textContent="";
    }
    else{
        display.textContent = (display.textContent).slice(0,-1);
        output.textContent = eval(display.textContent);
    }
  
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