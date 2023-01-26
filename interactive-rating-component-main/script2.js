let rate = document.getElementsByTagName('rater');
let score = document.querySelector('span#score');
let before = document.querySelector('form#before');
let after = document.querySelector('section#after');
let backBt = document.querySelector('div#back');
let send = document.querySelector('input.send');

function rate(n=0){
    let buttons = [bt1, bt2, bt3, bt4, bt5]
    for (let c in buttons){
        if (c == n ){
            if (buttons[n].value == "OFF"){
                buttons[n].value = "ON";
                buttons[n].style.backgroundColor = '#959eac';
                buttons[n].color = '#ffffff';
        }else{
            buttons[n].value = "OFF";
            buttons[n].style.backgroundColor = "#3a4655";
            buttons[n].style.color = '#959eac';
        }
    }else{
        buttons[c].value = "OFF";
        buttons[c].style.backgroundColor = "#3a4655";
        buttons[c].style.color = '#959eac';
        }
    }
        
    
}

function hover(x){
    x.style.backgroundColor = "#fb7413";
    x.style.color = "#ffffff";
    x.style.cursor = "pointer";
}
function hoverout(x){
    if(x.value == "ON"){
        x.style.backgroundColor = '#959eac';
        x.style.color = '#ffffff';
    }else{
        x.style.backgroundColor = "#3a4655";
        x.style.color = '#959eac';
    }
}

function send(){
    if (rate =='rt1'){
        score.innerHTML = '1';
        before.style.display = 'none';
        after.style.display = 'block';
    }
}
    /*
    if (bt1.value == "ON"){
        score.innerHTML = '1';
        
    }
    else if (bt2.value == "ON"){
        score.innerHTML = '2';
        before.style.display = 'none';
        after.style.display = 'block';
    }
    else if (bt3.value == "ON"){
        score.innerHTML = '3';
        before.style.display = 'none';
        after.style.display = 'block';
    }
    else if (bt4.value == "ON"){
        score.innerHTML = '4';
        before.style.display = 'none';
        after.style.display = 'block';
    }
    else if (bt5.value == "ON"){
        score.innerHTML = '5';
        before.style.display = 'none';
        after.style.display = 'block';
    }else{
        window.alert('Please choise a rate!')
    }
    backBt.style.display ='block'
}*/


function back(){
    before.style.display = 'block'
    after.style.display = 'none'
    backBt.style.display = 'none'
    
}

send.addEventListener('click',send)