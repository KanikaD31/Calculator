
let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");
let string ="";
let a= Array.from(buttons);
a.forEach(button=>{
    button.addEventListener("click",(d)=>{
        if(d.target.innerHTML == "="){
            string= eval(string);
            input.value=string;
        }
        else if(d.target.innerHTML=="C"){
            string="";
            input.value=string;
        }
        else if(d.target.innerHTML== "Del"){
            string=string.substring(0,string.lenght-1);
            input.value=string;

        }
        else{
        string+= d.target.innerHTML;
        input.value=string;
        }
    })
})