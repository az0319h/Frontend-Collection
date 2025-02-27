const hamburgerMenuOpenBtn = document.querySelector('.hamburger_menu')
const hamburgerMenuCloseBtn = document.querySelector(".menu_toggle_button")
const mobileMenu = document.querySelector(".mobile_menu")
const menulinks = document.querySelectorAll('.menu_link')
 
menulinks.forEach((item, idx) => {
    item.addEventListener('click', (e)=> {
        if(item.parentNode.querySelector('.submenu') != null) {
            e.preventDefault(); 
            const subMenu = item.parentNode.querySelector('.submenu')
            subMenu.style.display = subMenu.style.display == 'none' || subMenu.style.display == '' ? "block" : "none"
            item.querySelector('.expand_icon').textContent = item.querySelector('.expand_icon').textContent === '+' ? "-" : "+"
        }
    })
})

hamburgerMenuOpenBtn.addEventListener('click',(e)=> {
    mobileMenu.style.display = 'block'
})
hamburgerMenuCloseBtn.addEventListener('click', (e) => {
    mobileMenu.style.display = 'none'
})

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

