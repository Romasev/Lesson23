window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    // Modal window

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        popupClose = document.querySelector('.popup-close');

        more.addEventListener('click', function() {
            overlay.style.display = 'block';
            this.classList.add('.more-splash');
            document.body.style.overflow = 'hidden';
        });

        popupClose.addEventListener('click', function() {
            overlay.style.display = 'none';
            more.classList.remove('.more-splash');
            document.body.style.overflow = '';
        });



    let descBtns = document.querySelectorAll('.description-btn');

    for (let i = 0; i < descBtns.length; i++) {
        let descBtn = descBtns[i];

        descBtn.addEventListener('click', function() {
            overlay.style.display = 'block';
            this.classList.add('.more-splash');
            document.body.style.overflow = 'hidden';
        });

        popupClose.addEventListener('click', function() {
            overlay.style.display = 'none';
            descBtn.classList.remove('.more-splash');
            document.body.style.overflow = '';
        });
    };
});


