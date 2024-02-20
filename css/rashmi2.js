let r=document.getElementById("box");
 let button=document.querySelectorAll("buttons");
 let string="";
 let arr=Array.from(button);
 arr.forEach(function(btn) {
    btn.addEventListener('click',function(event){
        if(event.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1);
            r.value=string;

        }
        else if(event.target.innerHTML=='AC'){
            string='';
            r.value=string;

        }
        else if(event.target.innerHTML=='='){
            string=eval(string);
            r.value=string;

        }
        else{
           string+= event.target.innerHTML
           r.value=string;
        }



    }
    );

    
    
 });