import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const articleTitles = document.querySelectorAll('.article__title')
const aside = document.querySelector('.main__aside')
const articleTitlesAside = document.querySelectorAll('.main__aside-article')

// articleTitles.forEach(title => {
//     const titleClone = title.cloneNode(true)
    
//     aside.appendChild(titleClone)
// })

// articleTitlesAside.forEach(title => {
//     title.addEventListener('click', () => {
//         const titleText = title.textContent.trim()
        
//         const articlesList = document.querySelectorAll('.article__container')
//         let targetArticle
//         articlesList.forEach(article => {
//             const articleTitle = article.querySelector('.article__title').textContent.trim()
//             if (articleTitle === titleText) {
//                 targetArticle = article
//             }
//         })

//         if (targetArticle) {
//             targetArticle.scrollIntoView({ behavior: 'smooth', block: 'center' })
//         }
//     })
// })

function setArticle(titles) {
    titles.forEach(title => {
        title.addEventListener('click', () => {
            const titleText = title.textContent.trim()
            
            const articlesList = document.querySelectorAll('.article__container')
            let targetArticle
            articlesList.forEach(article => {
                const articleTitle = article.querySelector('.article__title').textContent.trim()
                if (articleTitle === titleText) {
                    targetArticle = article
                }
            })
    
            if (targetArticle) {
                targetArticle.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }
        })
    })
}

// setArticle(articleTitlesAside);

articleTitles.forEach(title => {
    const asideTitle = document.createElement('p')
    asideTitle.classList.add('main__aside-article')
    asideTitle.innerText = title.textContent
    aside.appendChild(asideTitle)
})

const clonedTitles = document.querySelectorAll('.main__aside-article');
setArticle(clonedTitles);


function isElementCentered(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
};

function highlightActiveTitle() {
    // debugger
    const articleTitlesAside = document.querySelectorAll('.main__aside-article');

    articleTitlesAside.forEach(title => {
        title.classList.remove('active-title');
    });

    const articlesList = document.querySelectorAll('.article__container');
    let targetArticle;
    articlesList.forEach(article => {
        if (isElementCentered(article)) {
            targetArticle = article;
        }
    });

    if (targetArticle) {
        const targetTitleText = targetArticle.querySelector('.article__title').textContent.trim();
        articleTitlesAside.forEach(title => {
            if (title.textContent.trim() === targetTitleText) {
                title.classList.add('active-title');
            }
        });
    }
}

const swiper = new Swiper(".videoSwiper", {
    slidesPerView: 3,
    // spaceBetween: 0,
      scrollbar: {
        el: ".swiper-scrollbar",
      },
});

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

window.addEventListener('scroll', highlightActiveTitle);

highlightActiveTitle();