// 1. 대학 목록 및 초기 변수 선언
const universitys = [
    "서울대학교", "고려대학교", "연세대학교", "한양대학교", "경희대학교", "중앙대학교", 
    "서강대학교", "성균관대학교", "이화여자대학교", "한국외국어대학교", "숭실대학교", 
    "동국대학교", "부산대학교", "경북대학교", "울산대학교", "한림대학교", "아주대학교", 
    "KAIST", "POSTECH", "인하대학교", "인천대학교", "전남대학교", "전북대학교", 
    "충남대학교", "충북대학교", "광주과학기술원", "경상대학교", "강원대학교", "동아대학교", 
    "국민대학교", '경복대학교(남양주캠퍼스)', '경복대학교(양주캠퍼스)'
];
const universitysMembers = [];
const sidebarCampusItems = document.querySelector('.sidebar .campus_list_items');
const expandedCampusItems = document.querySelector('.expanded .campus_list_items');
const campusSearch = document.querySelector('.campus_search_input');

// 2. 페이지 로드 시 초기화
window.onload = function() {
    // 대학마다 랜덤한 인원 수 생성
    for (let i = 0; i < universitys.length; i++) {
        universitysMembers.push(randomMembers());
    }
    updateCampus(universitys);
};

// 3. 캠퍼스 목록 업데이트 함수
function updateCampus(filterUniversitys) {
    // 사이드바와 확장 영역 초기화
    sidebarCampusItems.innerHTML = '';
    expandedCampusItems.innerHTML = '';

    // 캠퍼스 리스트 업데이트
    filterUniversitys.map((campus, idx) => {
        const li = document.createElement('li');
        li.setAttribute('class', 'campus_item');

        const a = document.createElement('a');
        a.setAttribute('class', 'campus_link');
        a.setAttribute('href', '#');

        const campusName_span = document.createElement('span');
        campusName_span.setAttribute('class', 'campus_name');
        campusName_span.textContent = campus;

        const campusMember_span = document.createElement('span');
        campusMember_span.setAttribute('class', 'campus_members');
        campusMember_span.textContent = universitysMembers[universitys.findIndex(item => item === campus)] + '명';

        a.appendChild(campusName_span);
        a.appendChild(campusMember_span);
        li.appendChild(a);

        sidebarCampusItems.appendChild(li);

        const liForExpanded = li.cloneNode(true);
        expandedCampusItems.appendChild(liForExpanded);
    });
}

// 4. 랜덤 인원 수 생성 함수
function randomMembers() {
    const randomNumber = Math.floor(Math.random() * (100000 - 1000 + 1)) + 1000;
    return randomNumber.toLocaleString();
}

// 5. 캠퍼스 검색 처리 함수
function handleSearch() {
    const text = campusSearch.value.trim();
    if (text === '') {
        updateCampus(universitys);
        return;
    }

    const temp = universitys.filter(campus => campus.includes(text));

    if (temp.length !== 0) {
        updateCampus(temp);
    } else {
        updateCampus(universitys);
    }
}

// 6. 검색 입력 이벤트 리스너
campusSearch.addEventListener('keyup', handleSearch);

// =========================
//  모바일 헤더 관련 코드
// =========================

// 1. 변수 선언
const contentContainer = document.querySelector(".content_container");
const mobileHeader = document.querySelector('.mobile_header');
const mobileSymbol = document.querySelector('.mobile_header img');
const mobileHeaderOpenBtn = document.querySelector('.mobile_header button');
const video = document.querySelector('.content_symbol');

// 2. 이벤트 리스너
contentContainer.addEventListener('scroll', handleMobileSymbol);
mobileHeaderOpenBtn.addEventListener('click', handleOpen);

// 3. 모바일 심볼 처리 함수
function handleMobileSymbol(e) {
    const scrollY = e.target.scrollTop;
    if (scrollY === 0) {
        mobileHeader.style.position = "sticky";
        mobileSymbol.style.opacity = '0';
        video.currentTime = 0;
        video.play();
    } else {
        mobileHeader.style.position = "fixed";
        mobileSymbol.style.opacity = '1';
    }
}

// 4. 모바일 헤더 열기 함수
function handleOpen() {
    expanded.style.display = 'flex';
}

// =========================
//  확장된 캠퍼스 목록 관련 코드
// =========================

// 1. 변수 선언
const expanded = document.querySelector('.expanded');
const expandedCloseBtn = document.querySelector('.expanded_header_button');

// 2. 이벤트 리스너
expandedCloseBtn.addEventListener('click', handleClose);

// 3. 확장된 영역 닫기 함수
function handleClose() {
    expanded.style.display = 'none';
}

// =========================
// 국내 최대 대학생활 플랫폼
// =========================

// 1. 변수 선언
const target = document.querySelector('.stats_info');

// 2. 이벤트 리스너
contentContainer.addEventListener('scroll', handleScroll)
  

// 3. 확장된 영역 닫기 함수
function handleScroll() {
    const screenCenter = window.innerHeight / 2;
     
    // 타겟 요소의 위치 계산
    const targetRect = target.getBoundingClientRect();
  
    // 타겟이 화면 중앙에 위치할 때
    if (targetRect.top <= screenCenter && targetRect.bottom >= screenCenter) {
        console.log("영역이 중간에 위치함")
    }
}