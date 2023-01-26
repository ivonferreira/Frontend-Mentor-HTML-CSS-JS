let btnSubmit = document.querySelector('input#btnSubmit');
let rates = document.getElementsByName('rater');
let score = document.querySelector('span#score');
let before = document.querySelector('fieldset#before');
let after = document.querySelector('fieldset#after');
let btnBack = document.querySelector('div#back')

function scored(){
    console.log(rates)
    for (let i = 0 ; i < rates.length ; i++){
        if (rates[i].checked){
            score.innerHTML = i+1;
            before.style.display = 'none';
            after.style.display = 'block';
            btnBack.style.display='block';

        }
    }
}

function back(){
    before.style.display = 'block';
    after.style.display = 'none';
    btnBack.style.display = 'none';
}