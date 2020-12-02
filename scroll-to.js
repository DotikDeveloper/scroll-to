//------------------------scroll-----------------------//

function scrollTo(scroll-to) {

    const anchors = document.querySelectorAll(scroll-to);
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