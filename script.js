const toggle = document.querySelector('.filter-toggle');
const dropdown = document.querySelector('.filter-dropdown');
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

toggle.addEventListener('click', () => {
    dropdown.classList.toggle('hidden');
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        cards.forEach(card => {
            if (filter === 'all' || card.classList.contains(filter)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
        dropdown.classList.add('hidden');
    });
});
const searchInput = document.querySelector('.searchInput');
const searchButton = document.querySelector('.searchButton');

function searchCards() {
    const query = searchInput.value.toLowerCase();
    cards.forEach(card => {
        const name = card.querySelector('.card-name').textContent.toLowerCase();
        if (name.includes(query)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

searchButton.addEventListener('click', searchCards);
searchInput.addEventListener('input', searchCards);