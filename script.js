let string="",string1='';
let count=0;
let op=['+','-','*','%','/']
let button=document.querySelectorAll('.button');
Array.from(button).forEach((buttons)=>{
    buttons.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string1=eval(string);
            string=string1;
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML== 'C'){
            string='';
          document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='(-)'){
            count++;
            if(count%2!=0)
            {  string='-';
              document.querySelector('input').value=string;   
        }
        else
        {
            string='';
            document.querySelector('input').value= string;
        }
    }
        else{
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
        }
    });
});