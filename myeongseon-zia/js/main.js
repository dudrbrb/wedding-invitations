
function copy (t){
    var textVal = t;
    window.navigator.clipboard.writeText(textVal).then(() => {
        // 복사가 완료되면 이 부분이 호출된다.
        alert("계좌번호가 복사되었습니다.");
    });
}

var copybtn1 = document.querySelector('.copybtn1');
var copyacc1= document.querySelector('.acc1').innerText;

copybtn1.addEventListener('click', ()=>{
    copy(copyacc1);
})
copybtn1.addEventListener('touch', ()=>{
    copy(copyacc1);
})




var copybtn2 = document.querySelector('.copybtn2');
var copyacc2= document.querySelector('.acc2').innerText;

copybtn2.addEventListener('click', ()=>{
    copy(copyacc2);
})
copybtn2.addEventListener('touch', ()=>{
    copy(copyacc2);
})



var copybtn3 = document.querySelector('.copybtn3');
var copyacc3= document.querySelector('.acc3').innerText;

copybtn3.addEventListener('click', ()=>{
    copy(copyacc3);
})
copybtn3.addEventListener('touch', ()=>{
    copy(copyacc3);
})