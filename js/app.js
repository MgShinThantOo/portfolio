
// Animation
AOS.init({
    disable: 'mobile',
    anable:'window',
    offset: 20,
});

// darkmood loghtmood switch 
function removeShow(){
    document.querySelector('.navbar-collapse').classList.toggle('show');
}
let darkIcon = document.querySelector('.dark-icon');
darkIcon.addEventListener('click',()=>{
    document.querySelector('.fa-sun').classList.toggle('d-none');
    document.querySelector('.fa-moon').classList.toggle('d-none');
    document.querySelector('body').classList.toggle('dark-mood');
    document.querySelector('body').classList.toggle('light-mood');
    removeShow();
})

// project max-view 
function addDnone(a,b,c,d,e){
    
    document.querySelector(`${a}`).classList.toggle('d-none');
    document.querySelector(`${b}`).classList.toggle('d-none');
    document.querySelector(`${c}`).classList.toggle('d-none');
    document.querySelector(`${d}`).classList.toggle('d-none');
    document.querySelector(`${e}`).classList.toggle('d-none');
};
function addMax (a){
    document.querySelector(`${a}`).classList.toggle('project-max')
};

document.querySelector('#vpOne').addEventListener('click',function(){
    addDnone('.Ptwo','.Pthree','.Pfour','.Pfive','.Psix');
    addMax('.Pone');
});
document.querySelector('#vpTwo').addEventListener('click',function(){
    addDnone('.Pone','.Pthree','.Pfour','.Pfive','.Psix');
    addMax('.Ptwo')
});
document.querySelector('#vpThree').addEventListener('click',function(){
    addDnone('.Pone','.Ptwo','.Pfour','.Pfive','.Psix');
    addMax('.Pthree')
});
document.querySelector('#vpFour').addEventListener('click',function(){
    addDnone('.Pone','.Ptwo','.Pthree','.Pfive','.Psix');
    addMax('.Pfour')
});
document.querySelector('#vpFive').addEventListener('click',function(){
    addDnone('.Pone','.Ptwo','.Pthree','.Pfour','.Psix');
    addMax('.Pfive')
});
document.querySelector('#vpSix').addEventListener('click',function(){
    addDnone('.Pone','.Ptwo','.Pthree','.Pfour','.Pfive');
    addMax('.Psix')
});

// contact message 
let btn = document.getElementById('submitBtn');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let name = document.getElementById('yourName').value;
    let email = document.getElementById('exampleInputEmail1').value;
    let message = document.getElementById('exampleFormControlTextarea1').value;
    let body = `name : ${name} <br> email : ${email} <br> subject : message from portfolio <br> message : ${message}`;

    Email.send({
        Host : "smtp.gmail.com",
        Username : "geekydev.personal@gmail.com",
        Password : "fyeuakeqounehhfd",
        To : 'geekydev.personal@gmail.com',
        From : email,
        Subject : "message from portfolio",
        Body : body
    }).then(
      message => swal({
        title: "Send sucessfull",
        text: "Thank you for your message. I will reply to you soon.",
        icon: "success",
        button: "OK",
      })
    );
})