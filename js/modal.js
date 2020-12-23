const overlayModal = document.querySelector('.overlay-modal');

const openContactModal = () => {
    const openModalBtn = document.querySelectorAll('.contact-modal-btn');
    const contactModal = document.querySelector('.contact-modal');

    //open modal
    openModalBtn.forEach(openModalBtn => {
        openModalBtn.addEventListener('click', () => {
            contactModal.classList.add('active');
            overlayModal.classList.add('active');
        });
    });
    
    overlayModal.addEventListener('click', () => {
        contactModal.classList.remove('active');
        overlayModal.classList.remove('active');
    });
}
openContactModal(); 


// management page modal
const openTeamModal = () => {
    const openTeamModalBtn = document.querySelectorAll('.team-modal-btn');
    const teamModal = document.querySelector('#team-modal');
    const closeTeamModalBtn = document.querySelector('.close-modal-btn');

    //display modal
    openTeamModalBtn.forEach(openTeamModalBtn => {
        openTeamModalBtn.addEventListener('click', () => {
            teamModal.classList.add('active');
            overlayModal.classList.add('active');
        });
    });

    overlayModal.addEventListener('click', () => {
        teamModal.classList.remove('active');
        overlayModal.classList.remove('active');
    });

    closeTeamModalBtn.addEventListener('click', () => {
        teamModal.classList.remove('active');
        overlayModal.classList.remove('active');
    });
};

openTeamModal();