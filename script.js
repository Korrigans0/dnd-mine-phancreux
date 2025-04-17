// Initialisation de la carte interactive
document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map-container').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
});

// Fonction pour lancer un dé
function rollDice() {
    const sides = document.getElementById('dice-sides').value;
    if (!sides || sides < 1) {
        document.getElementById('dice-result').textContent = 'Veuillez entrer un nombre valide de faces.';
        return;
    }
    const result = Math.floor(Math.random() * sides) + 1;
    document.getElementById('dice-result').textContent = `Résultat : ${result}`;
}

// Fonction pour ajouter un personnage
function addCharacter() {
    const characterList = document.getElementById('character-list');
    const characterName = prompt('Entrez le nom du personnage :');
    if (characterName) {
        const newCharacter = document.createElement('p');
        newCharacter.textContent = characterName;
        characterList.appendChild(newCharacter);
    }
}