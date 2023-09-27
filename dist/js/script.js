const allBtn = document.getElementById('all');
const catsBtn = document.getElementById('cats');
const foodBtn = document.getElementById('food');
const natureBtn = document.getElementById('nature');

function sortAnchors(anchorTopic) {
    let anchors = document.getElementsByClassName('example-image-link');
    for (const link of anchors) {

        switch (anchorTopic) {
            case 'all':
                link.setAttribute('data-lightbox', 'all');
                break;
            case 'other':
                if (link.classList.contains('catlink')) {
                    link.setAttribute('data-lightbox', 'cats');
                } else if (link.classList.contains('foodlink')) {
                    link.setAttribute('data-lightbox', 'food');
                } else if (link.classList.contains('naturelink')) {
                    link.setAttribute('data-lightbox', 'nature');
                }
                break;

            default:
                break;
        }
    }
}

function sortImages(imageTopic) {
    let allImages = document.querySelectorAll("img");

    for (const image of allImages) {
        if (imageTopic == 'all') {
            image.style.display = 'inline-block';
        } else {
            if (image.classList.contains(imageTopic) == true) {
                image.style.display = 'inline-block';

            } else {
                image.style.display = 'none';
            }
        }
     }
}



allBtn.addEventListener('click', () => {
    sortAnchors('all');
    sortImages('all');
});

catsBtn.addEventListener('click', () => {
    sortAnchors('other');
    sortImages('cats');
});

foodBtn.addEventListener('click', () => {
    sortAnchors('other');
    sortImages('food');
});

natureBtn.addEventListener('click', () => {
    sortAnchors('other');
    sortImages('nature');
});


