const asciiArtElement = document.getElementById('asciiArt');
const changeButton = document.getElementById('changeButton');

let currentArtIndex = 0;
const asciiArtList = [
    // Add your ASCII art designs here
    'ASCII Art 1',
    'ASCII Art 2',
    'ASCII Art 3',
    'ASCII Art 4',
];

changeButton.addEventListener('click', () => {
    currentArtIndex = (currentArtIndex + 1) % asciiArtList.length;
    asciiArtElement.textContent = asciiArtList[currentArtIndex];
    changeButton.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
