let box=document.querySelector(`#box`);
let ipt=document.querySelector(`#ipt`);
let send=document.querySelector(`#send`);

send.onclick=function(){
    let xhr=new XMLHttpRequest();
    xhr.open(`GET`,'http://localhost:3001/send?msg='+ipt.value,true);
    xhr.onload=function(){

    }
    xhr.send();
}
function checkMessage()
{
    let xhr=new XMLHttpRequest();
    xhr.open('GET','http://localhost:3001/getMsg', true);
    xhr.onload=function(){
        console.log(this.responseText);
        appendMsg(this.responseText);
        checkMessage();
    }
    xhr.timeout=10000000;
    xhr.send();
}
function appendMsg(str)
{
     let p=document.createElement(`p`);
     p.innerText=str;
     box.appendChild(p);
}
checkMessage();