
// 계좌번호 복사하기
var copybtn1 = document.querySelector('.copybtn1');
var copyacc1= document.querySelector('.acc1').innerHTML;
const copy1 = (text) => {
    // 임시의 textarea 생성
    const $textarea = document.createElement("textarea");
  
    // body 요소에 존재해야 복사가 진행됨
    document.body.appendChild($textarea);
    
    // 복사할 특정 텍스트를 임시의 textarea에 넣어주고 모두 셀렉션 상태
    $textarea.value = text;
    $textarea.select();
    
    // 복사 후 textarea 지우기
    document.execCommand('copy');
    document.body.removeChild($textarea);
}

copybtn1.addEventListener('click', ()=>{
    copy1(copyacc1);
})

// 계좌번호 복사하기
var copybtn2 = document.querySelector('.copybtn2');
var copyacc2= document.querySelector('.acc2').innerHTML;
const copy2 = (text) => {
    // 임시의 textarea 생성
    const $textarea = document.createElement("textarea");
  
    // body 요소에 존재해야 복사가 진행됨
    document.body.appendChild($textarea);
    
    // 복사할 특정 텍스트를 임시의 textarea에 넣어주고 모두 셀렉션 상태
    $textarea.value = text;
    $textarea.select();
    
    // 복사 후 textarea 지우기
    document.execCommand('copy');
    document.body.removeChild($textarea);
}

copybtn2.addEventListener('click', ()=>{
    copy2(copyacc2);
})