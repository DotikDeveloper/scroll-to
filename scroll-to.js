//------------------------scroll-----------------------//

function scrollTo(selector) {

    const anchors = document.querySelectorAll(selector);
    for (const anchor of anchors) {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();

            const blockID = anchor.getAttribute('href');

            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

}

export default scrollTo;