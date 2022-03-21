let bnt=document.getElementById('init');
bnt.addEventListener('click',input)


function input(){
let fNome=document.getElementById('first-name').value;
let lNome=document.getElementById("last-name").value;
let email=document.getElementById('email').value;
let password=document.getElementById('password').value;

    if(fNome===''){  
        var labelf=document.getElementById('labelf').innerHTML='First Name cannot be empty';
        let imgs=document.getElementById('ic-img')
        let div=document.getElementById("img")
        imgs.classList.add("vi");
        div.classList.add("visivel")
        }else{
            labelf=document.getElementById('labelf').innerHTML='';
            let imgs=document.getElementById('ic-img')
            imgs.classList.remove("vi");
            let div=document.getElementById("img")
            div.classList.remove("visivel")

        }

    if(lNome===''){  
            var labell=document.getElementById('labell').innerHTML='Last Name cannot be empty';
            let imgs=document.getElementById('ic-imgtwo')
            let div=document.getElementById("imgtwo")
            imgs.classList.add("vi");
            div.classList.add("visivel")
            }else{
                labelf=document.getElementById('labell').innerHTML='';
                let imgs=document.getElementById('ic-imgtwo')
                imgs.classList.remove("vi");
                let div=document.getElementById("imgtwo")
                div.classList.remove("visivel")
    
            }
    if(email===''){  
            var labele=document.getElementById('lab-email').innerHTML='Looks like this is not an email';
            let imgs=document.getElementById('ic-img3')
            let div=document.getElementById("img3")
            imgs.classList.add("vi");
            div.classList.add("visivel")
            }else{
                labele=document.getElementById('lab-email').innerHTML='';
                let imgs=document.getElementById('ic-img3')
                imgs.classList.remove("vi");
                let div=document.getElementById("img3")
                div.classList.remove("visivel")
                let corr=email.includes('@gmail.com')
                let corr2=email.includes("@hotmail.com")
                if(!corr && !corr2){
                    labele=document.getElementById('lab-email').innerHTML='Looks like this is not an email';
                    div.classList.add("visivel")
                    imgs.classList.add("vi");

                }else{
                    labele=document.getElementById('lab-email').innerHTML='';
                     div.classList.remove("visivel")
                     imgs.classList.remove("vi");
                }
        
            }
    if(password===''){  
            var labelp=document.getElementById('lab-password').innerHTML='Password cannot be empty';
            let imgs=document.getElementById('ic-img4')
            let div=document.getElementById("img4")
            imgs.classList.add("vi");
            div.classList.add("visivel")
            }else{
                    labelp=document.getElementById('lab-password').innerHTML='';
                    let imgs=document.getElementById('ic-img4')
                    imgs.classList.remove("vi");
                    let div=document.getElementById("img4")
                    div.classList.remove("visivel")
            
            }

}
