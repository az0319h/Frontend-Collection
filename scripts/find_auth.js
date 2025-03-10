const input = document.querySelector(".set_user_value")

document.documentElement.addEventListener('click', (e) => {
    if(e.target.classList.value.includes('set_user_value')) {        
        input.classList.add('visible')
    } else {
        input.classList.remove('visible')
    }
});

const form = document.querySelector('form')

form.addEventListener('submit', (e) => {    
    e.preventDefault();
    const text = input.value.trim();

    if(text.length === 0){
        if(window.location.href.includes('forgot/id')) {
            // 아이디 찾기의 경우
            alert("이메일을 입력하세요.")
            return
        } else {
            //비밀번호 찾기의 경우
            alert("아이디를 입력하세요.")
            return
        }
    } else {
        if(window.location.href.includes('forgot/id')) {
            // 아이디 찾기의 경우
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if(emailPattern.test(text)) {
                alert("안내 이메일을 발송했습니다. 만약 이메일이 오지 않는다면, 스팸 편지함을 확인해주세요.")   
            } else {
                alert("해당 이메일로 가입된 아이디가 없습니다.")   
            }
        } else {
            //비밀번호 찾기의 경우
            alert("가입된 아이디가 없습니다.")
        }
    }
})
