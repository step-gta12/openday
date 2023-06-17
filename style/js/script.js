
const days = document.querySelectorAll('.day');
const popup__title = document.querySelector('.info__title');
const popup__text = document.querySelector('.info__text');
const popup__adres = document.querySelector('.adres');
const popup__dt = document.querySelector('.info__datetime');
const popup__phone = document.querySelector('.info_phone');
const popup__wh = document.querySelector('.info_wh');
const popup__mail = document.querySelector('.info_mail');
const popupHint = document.querySelector('.popup__hint');
const popupBg = document.querySelector('.infobg');
const popup = document.querySelector('.info');

console.log(popup__phone.children);

days.forEach((item) => {
    item.addEventListener('click', function () {
        const clickedElemDataset = parseInt(this.dataset.id);
        data.forEach((elem, index) => {
            if (clickedElemDataset === index + 1) {
                console.log(elem);
                popup__title.textContent = elem.title;
                popup__text.textContent = elem.descr;
                popup__adres.textContent = elem.adres;
                popup__dt.textContent = elem.dt;
                popup__phone.innerHTML = `<span>Телефон: </span><br><span>${elem.ph}</span>`
                // popup__phone.textContent = elem.ph;
                popup__wh.textContent = elem.wh;
                popup__mail.textContent = elem.mail;
            }
        })

        console.log(this.dataset.title);
        // popup__title.textContent = this.getAttribute('data-title');
        // popup__text.textContent = this.getAttribute('data-text');
        popupBg.classList.add('active');
    });

    item.addEventListener('mouseenter', function () {
        popupHint.textContent = item.getAttribute('data-title');
        popupHint.style.display = 'block';
    });

    item.addEventListener('mouseleave', function () {
        popupHint.textContent = item.getAttribute('data-title');
        popupHint.style.display = 'none';
    });

    item.addEventListener('mousemove', function (e) {
        popupHint.textContent = this.dataset.title;
        popupHint.style.top = (e.layerY + 20) + 'px';
        popupHint.style.left = (e.layerX + 50) + 'px';
    });
});

document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
        popupBg.classList.remove('active');
    }
});