function scrollEvent(e) {
    const headerLeft = document.querySelector('.header_left')
    const headerRight = document.querySelector('.header_right')
    const headerContainer = document.querySelector('.header_container')
    if(window.scrollY > 0) {
        headerLeft.classList.add('scrollAvtive')      
        headerRight.classList.add('scrollAvtive')  
        headerContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'    
    } else {
        headerLeft.classList.remove('scrollAvtive')      
        headerRight.classList.remove('scrollAvtive')      
        headerContainer.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    }
}

window.addEventListener('scroll', scrollEvent)