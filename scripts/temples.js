const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('#primary-navigation');

menuButton.addEventListener('click', function() {
    navigation.classList.toggle('open');

    if (navigation.classList.contains('open')) {
        menuButton.textContent = 'X';
    } else {
        menuButton.textContent = '☰';
    }
});

const currentYear = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified');

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;
