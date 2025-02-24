function scrollEvent(e) {
    const headerLeft = document.querySelector('.header_left')
    const headerRight = document.querySelector('.header_right')
    if(window.scrollY > 0) {
        headerLeft.classList.add('scrollAvtive')      
        headerRight.classList.add('scrollAvtive')      
    } else {
        headerLeft.classList.remove('scrollAvtive')      
        headerRight.classList.remove('scrollAvtive')      
    }
}

window.addEventListener('scroll', scrollEvent)