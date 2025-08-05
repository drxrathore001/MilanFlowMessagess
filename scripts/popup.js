document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popupImg');
    const popupTitle = document.getElementById('popupTitle');
    const popupDesc = document.getElementById('popupDesc');
    const closePopup = document.getElementById('closePopup');

    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            // Use data attributes from product card
            popupImg.src = card.dataset.img || card.querySelector('img').src;
            popupTitle.textContent = card.dataset.title || card.querySelector('h3').textContent;
            popupDesc.textContent = card.dataset.desc || "Detailed product information coming soon...";
            popup.style.display = 'flex';
        });
    });

    // Close popup on button click
    if (closePopup) {
        closePopup.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    }

    // Close popup when clicking outside the popup content
    if (popup) {
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.style.display = 'none';
            }
        });
    }
});
