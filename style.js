const menuButton = document.getElementById('Company');
const collections = document.getElementById('collections');
const ourMission = document.getElementById('Menu');
const events = document.getElementById('events');
const contact = document.getElementById('contact');

menuButton.addEventListener('click', () => {
    collections.classList.toggle('hidden');
    ourMission.classList.toggle('hidden');
    events.classList.toggle('hidden');
    contact.classList.toggle('hidden');
});