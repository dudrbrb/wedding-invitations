
// 계좌번호 복사하기
// const copy = (text) => {
//     // 임시의 textarea 생성
//     const $textarea = document.createElement("input");
//     $textarea.type = "text";
//     // body 요소에 존재해야 복사가 진행됨
//     document.body.appendChild($textarea);
    
//     // 복사할 특정 텍스트를 임시의 textarea에 넣어주고 모두 셀렉션 상태
//     $textarea.value = text;
//     $textarea.select();
    
//     // 복사 후 textarea 지우기
//     document.execCommand('copy');
//     document.body.removeChild($textarea);
// }

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