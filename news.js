// Funktion zum Laden der JSON-Daten
async function loadNews() {
  try {
    const response = await fetch('news.json'); // JSON-Datei laden
    const news = await response.json(); // JSON-Daten parsen

    const container = document.getElementById('news-container');
    container.innerHTML = ''; // Container leeren

    // Nachrichten dynamisch hinzufügen
    news.forEach(item => {
      const newsItem = document.createElement('div');
      newsItem.classList.add('news-item');

      newsItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p class="date">${item.date}</p>
        <p>${item.text}</p>
      `;

      container.appendChild(newsItem);
    });
  } catch (error) {
    console.error('Fehler beim Laden der Nachrichten:', error);
  }
}

// Nachrichten laden, wenn die Seite geladen wird
document.addEventListener('DOMContentLoaded', loadNews);