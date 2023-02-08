var gallerySwiper = null,
    popupSwiper= null;

window.addEventListener('load', ()=>{
    makeSwiper();
    makeMap();
    popupEvent();
    copyBank();
})


const makeSwiper = ()=>{
    gallerySwiper = new Swiper(".gallery-swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        observer: true,	// 추가
        observeParents: true,	// 추가
    });
    popupSwiper = new Swiper(".popup-swiper", {
        slidesPerView: 1,
        spaceBetween: 50,
        observer: true,	// 추가
        observeParents: true,	// 추가
        autoHeight: true
    });


    var imgNum = 17,
        popupWrapper = document.querySelector('.popup-swiper .swiper-wrapper');

    
    for(var i=1; i <= imgNum; i++){
        popupWrapper.innerHTML += `
            <div class="swiper-slide"><img src="./img/${i}.webp" ></div>
        `
    }

}

const makeMap = ()=>{
    // 지도 띄우기
    var mapContainer = document.querySelector('.map'), //지도를 담을 영역의 DOM 레퍼런스
        mapOption = { 
            center: new kakao.maps.LatLng(36.7908509, 127.1750494), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };
    
    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    
    // 지도를 클릭한 위치에 표출할 마커입니다
    var marker = new kakao.maps.Marker({ 
        // 지도 중심좌표에 마커를 생성합니다 
        position: map.getCenter() 
    }); 
    // 지도에 마커를 표시합니다
    marker.setMap(map);
}    


const popupEvent = ()=>{
    // 이미지 클릭 시 보여주기
    var popup = document.querySelector('.popup-wrapper')
    var thumbs = document.querySelectorAll('.gallery-swiper img')
    var imgIdx = 0;

    thumbs.forEach(t => {
        t.addEventListener('click', (t)=>{
            popup.style.display = 'block';
            imgIdx = Number(t.target.name)-1;
            popupSwiper.slideTo(imgIdx)
        })    
    })    
    
    
    // popup 닫기
    var closeBtn = document.querySelector('.close-btn')
    closeBtn.addEventListener('click', ()=>{
        popup.style.display = 'none'
    })        

}



const copyBank = ()=>{
    
    // 계좌번호 복사하기
    var copybtn = document.querySelectorAll('.copybtn')
    var copyacc = document.querySelectorAll('.acc')
    const copy = (text) => {
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
    copybtn.forEach(e=>{
        e.addEventListener('click', (e)=>{
            var clickValue = Number(e.target.attributes.name.value);
            var targetAcc = copyacc[clickValue- 1].innerHTML
            
            
            copy(targetAcc);
        })
    })

}