const dispCalcEl = document.querySelector(".in_disp-calcu");
const dispResultEl = document.querySelector(".disp-result");
const screenEl = document.querySelector(".screen");
const notificationEl = document.querySelector(".notification");


let a = false;
let ans = 0;

dispScr = function (val) {
    dispCalcEl.textContent = val;
}

addScr = function (val) {
    if(dispCalcEl.textContent === '0'){
        dispCalcEl.textContent = '';
    }
    else if (a == true) {
        dispResultEl.textContent = `Ans = ${ans}`;
        a = false;
    }
    dispCalcEl.textContent = dispCalcEl.textContent + val;
    console.log(dispCalcEl.textContent);

}

eql = function () {
    if(dispCalcEl.textContent===''){
        console.log("boss");
        return 0;
    }
    try {
        dispCalcEl.textContent = dispCalcEl.textContent.replaceAll('ans', ans);
        
        const result = eval(dispCalcEl.textContent);
        a = true;
        ans = result;
        dispResultEl.textContent = dispCalcEl.textContent;
        dispScr(result);
        console.log('ok');
    }
    catch (eql) {
        dispScr('Error');
    }
}

del = function () {
    dispCalcEl.textContent = dispCalcEl.textContent.slice(0, -1);
}

screenEl.addEventListener('click', function(){
    notificationEl.textContent = 'Use virtual keyboard only';
    
    setTimeout(() =>{
        notificationEl.textContent = '';
    }, 2000);


})