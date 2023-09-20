
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
    var textarea = document.createElement('textarea');
    textarea.value = textVal;
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 9999);
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert("복사되었습니다.");
}

var copybtn1 = document.querySelector('.copybtn1');
var copyacc1= document.querySelector('.acc1').innerHTML;

copybtn1.addEventListener('click', ()=>{
    copy(copyacc1);
})
copybtn1.addEventListener('touch', ()=>{
    copy(copyacc1);
})




var copybtn2 = document.querySelector('.copybtn2');
var copyacc2= document.querySelector('.acc2').innerHTML;

copybtn2.addEventListener('click', ()=>{
    copy(copyacc2);
})
copybtn2.addEventListener('touch', ()=>{
    copy(copyacc2);
})



var copybtn3 = document.querySelector('.copybtn3');
var copyacc3= document.querySelector('.acc3').innerHTML;

copybtn3.addEventListener('click', ()=>{
    copy(copyacc3);
})
copybtn3.addEventListener('touch', ()=>{
    copy(copyacc3);
})