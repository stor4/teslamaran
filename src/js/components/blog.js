const articlesList = document.querySelector('.blog__main')
const aside = document.querySelector('.blog__aside')
const articleTitles = document.querySelectorAll('.blogCard__title a')

articleTitles.forEach(title => {
    const asideTitle = document.createElement('p')
    asideTitle.classList.add('blog__aside-article')
    asideTitle.innerText = title.textContent
    aside.appendChild(asideTitle)
})

