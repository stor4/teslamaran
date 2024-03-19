import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const articleTitles = document.querySelectorAll('.article-t')
const aside = document.querySelector('.titles-aside')
const articleTitlesAside = document.querySelectorAll('.aside-title')

function setArticle(titles) {
    titles.forEach(title => {
        title.addEventListener('click', () => {
            const titleText = title.textContent.trim();
            const articleTitles = document.querySelectorAll('.article-t');
            let targetTitle;
            articleTitles.forEach(articleTitle => {
                if (articleTitle.textContent.trim() === titleText) {
                    targetTitle = articleTitle;
                }
            });

            if (targetTitle) {
                targetTitle.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });
}


setArticle(articleTitlesAside);

articleTitles.forEach(title => {
    const asideTitle = document.createElement('p')
    asideTitle.classList.add('aside-title')
    asideTitle.innerText = title.textContent
    aside.appendChild(asideTitle)
})

const clonedTitles = document.querySelectorAll('.aside-title');
setArticle(clonedTitles);



const swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

function openModal(elem) {
    elem.nextElementSibling.style.display = 'flex'
}

function closeModal(elem) {
    elem.parentElement.style.display = 'none'
}

window.openModal = openModal
window.closeModal = closeModal
