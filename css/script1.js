let v=document.getElementById('box');
let buttons=document.querySelectorAll('button');
let string='';
let arr=Array.from(buttons);
arr.forEach(function(btn){
    btn.addEventListener('click',function(event){
        if(event.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1);
            v.value=string;

        }
        else if(event.target.innerHTML=='AC'){
            string='';
            v.value=string;

        }
        else if(event.target.innerHTML=='='){
            string=eval(string);
            v.value=string;

        }

else{string+=event.target.innerHTML;
v.value=string;
}
    });
});

