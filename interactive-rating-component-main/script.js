let bt1 = document.getElementById('rate1')
let bt2 = document.getElementById('rate2')
let bt3 = document.getElementById('rate3')
let bt4 = document.getElementById('rate4')
let bt5 = document.getElementById('rate5')
let score = document.querySelector('span#score')
let before = document.querySelector('div#before')
let after = document.querySelector('div#after')

function rate1(){
    if (bt1.value == "OFF"){
        bt1.value = "ON";
        bt1.style.backgroundColor = '#959eac';
        bt1.style.color = '#ffffff'
        bt2.value = "OFF";
        bt2.style.backgroundColor = "#3a4655";
        bt3.value = "OFF";
        bt3.style.backgroundColor = "#3a4655";
        bt4.value = "OFF";
        bt4.style.backgroundColor = "#3a4655";
        bt5.value = "OFF";
        bt5.style.backgroundColor = "#3a4655";

    }else{
        bt1.value = "OFF";
        bt1.style.backgroundColor = "#3a4655";
        bt1.style.color = '#959eac';
        bt2.value = "OFF";
        bt2.style.backgroundColor = "#3a4655";
        bt3.value = "OFF";
        bt3.style.backgroundColor = "#3a4655";
        bt4.value = "OFF";
        bt4.style.backgroundColor = "#3a4655";
        bt5.value = "OFF";
        bt5.style.backgroundColor = "#3a4655";
        
    }
  
}
function rate2(){
    if (bt2.value == "OFF"){
        bt2.value = "ON";
        bt2.style.backgroundColor = '#959eac';
        bt2.style.color = '#ffffff'
        bt1.value = "OFF";
        bt1.style.backgroundColor = "#3a4655";
        bt3.value = "OFF";
        bt3.style.backgroundColor = "#3a4655";
        bt4.value = "OFF";
        bt4.style.backgroundColor = "#3a4655";
        bt5.value = "OFF";
        bt5.style.backgroundColor = "#3a4655";

    }else{
        bt1.value = "OFF";
        bt1.style.backgroundColor = "#3a4655";
        bt2.style.color = '#959eac';
        bt2.value = "OFF";
        bt2.style.backgroundColor = "#3a4655";
        bt3.value = "OFF";
        bt3.style.backgroundColor = "#3a4655";
        bt4.value = "OFF";
        bt4.style.backgroundColor = "#3a4655";
        bt5.value = "OFF";
        bt5.style.backgroundColor = "#3a4655";
        
    }
  
}
function rate3(){
    if (bt3.value == "OFF"){
        bt3.value = "ON";
        bt3.style.backgroundColor = '#959eac';
        bt3.style.color = '#ffffff'
        bt2.value = "OFF";
        bt2.style.backgroundColor = "#3a4655";
        bt1.value = "OFF";
        bt1.style.backgroundColor = "#3a4655";
        bt4.value = "OFF";
        bt4.style.backgroundColor = "#3a4655";
        bt5.value = "OFF";
        bt5.style.backgroundColor = "#3a4655";

    }else{
        bt1.value = "OFF";
        bt1.style.backgroundColor = "#3a4655";
        bt3.style.color = '#959eac';
        bt2.value = "OFF";
        bt2.style.backgroundColor = "#3a4655";
        bt3.value = "OFF";
        bt3.style.backgroundColor = "#3a4655";
        bt4.value = "OFF";
        bt4.style.backgroundColor = "#3a4655";
        bt5.value = "OFF";
        bt5.style.backgroundColor = "#3a4655";
        
    }
  
}
function rate4(){
    if (bt4.value == "OFF"){
        bt4.value = "ON";
        bt4.style.backgroundColor = '#959eac';
        bt4.style.color = '#ffffff'
        bt2.value = "OFF";
        bt2.style.backgroundColor = "#3a4655";
        bt3.value = "OFF";
        bt3.style.backgroundColor = "#3a4655";
        bt1.value = "OFF";
        bt1.style.backgroundColor = "#3a4655";
        bt5.value = "OFF";
        bt5.style.backgroundColor = "#3a4655";

    }else{
        bt1.value = "OFF";
        bt1.style.backgroundColor = "#3a4655";
        bt4.style.color = '#959eac';
        bt2.value = "OFF";
        bt2.style.backgroundColor = "#3a4655";
        bt3.value = "OFF";
        bt3.style.backgroundColor = "#3a4655";
        bt4.value = "OFF";
        bt4.style.backgroundColor = "#3a4655";
        bt5.value = "OFF";
        bt5.style.backgroundColor = "#3a4655";
        
    }
  
}
function rate5(){
    if (bt5.value == "OFF"){
        bt5.value = "ON";
        bt5.style.backgroundColor = '#959eac';
        bt5.style.color = '#ffffff'
        bt2.value = "OFF";
        bt2.style.backgroundColor = "#3a4655";
        bt3.value = "OFF";
        bt3.style.backgroundColor = "#3a4655";
        bt4.value = "OFF";
        bt4.style.backgroundColor = "#3a4655";
        bt1.value = "OFF";
        bt1.style.backgroundColor = "#3a4655";

    }else{
        bt1.value = "OFF";
        bt1.style.backgroundColor = "#3a4655";
        bt5.style.color = '#959eac';
        bt2.value = "OFF";
        bt2.style.backgroundColor = "#3a4655";
        bt3.value = "OFF";
        bt3.style.backgroundColor = "#3a4655";
        bt4.value = "OFF";
        bt4.style.backgroundColor = "#3a4655";
        bt5.value = "OFF";
        bt5.style.backgroundColor = "#3a4655";
        
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

function submit(){
    
    if (bt1.value == "ON"){
        score.innerHTML = '1';
        before.style.display = 'none';
        after.style.display = 'block';
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
}