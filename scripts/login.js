const form = document.querySelector("form")
const keepLogin = document.querySelector('.stay_logged_in_label')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const userID = document.querySelector('.login_input_text')
    const userPassword = document.querySelector('.login_input_password')

    if(userID.value.trim() === '') {
        alert("아이디를 입력해주세요.")
        return;
    } 
    if(userPassword.value.trim() === '') {
        alert("비밀번호를 입력해주세요.")
        return;
    }

    //전부다 통과하면 
    alert('올바른 정보를 입력해주세요. 모바일에서는 정상적으로 로그인이 될 경우, 문의하기를 통해 문의해주세요.')
    userID.value = ''
    userPassword.value = ''
    keepLogin.querySelector('img').src = 'https://account.everytime.kr/images/common/icn_e_check_mini_off_light.svg'
})



keepLogin.addEventListener('click', () => {
    const imgSrc = keepLogin.querySelector('img');
    if(imgSrc.src === 'https://account.everytime.kr/images/common/icn_e_check_mini_off_light.svg') {
        imgSrc.src = 'https://account.everytime.kr/images/common/icn_e_check_mini_on_light.svg'
    } else {
        imgSrc.src = 'https://account.everytime.kr/images/common/icn_e_check_mini_off_light.svg'
    }
});