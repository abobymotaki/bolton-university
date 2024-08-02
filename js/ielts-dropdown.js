var importance1 = document.getElementById('importance-1');
var importance2 = document.getElementById('importance-2');
var impH1 = document.getElementById('imp-1-h1');
var imp2H1 = document.getElementById('imp-2-h1');


importance1.onclick = function() {

    if(importance1.className == 'importance-1') {
        importance1.className = 'importance-1-show';
        impH1.innerHTML = '▴ WHY IS IELTS IMPORTANT';
    } else {
        importance1.className = 'importance-1';
        impH1.innerHTML = '▾ WHY IS IELTS IMPORTANT';
    }

}

importance2.onclick = function() {

    if(importance2.className == 'importance-2') {
        importance2.className = 'importance-2-show';
        imp2H1.innerHTML = '▴ HOW DOES IELTS WORK';
    } else {
        importance2.className = 'importance-2';
        imp2H1.innerHTML = '▾ HOW DOES IELTS WORK';
    }

}