function toggleDropdown(e) {
    const dropdown = e.querySelector('.header__dropdown')
    e.addEventListener('mouseover', function() {
        dropdown.style.opacity = 1
        dropdown.style.visibility = 'visible'
    })

    e.addEventListener('mouseout', function() {
        dropdown.style.opacity = 0
        dropdown.style.visibility = 'hidden'
    })


}

window.toggleDropdown = toggleDropdown