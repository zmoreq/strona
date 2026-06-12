document.addEventListener('DOMContentLoaded', () => {
    // 1. Wstrzyknięcie stylów CSS do nagłówka strony
    const style = document.createElement('style');
    style.innerHTML = `
        .floating-coffee { position: fixed; bottom: 25px; right: 25px; z-index: 1000; display: flex; flex-direction: column; align-items: flex-end; font-family: 'Segoe UI', Tahoma, sans-serif; }
        .coffee-popup { background-color: #1e1e1e; border: 1px solid #333; border-radius: 12px; padding: 20px; width: 280px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.8); margin-bottom: 15px; position: relative; opacity: 0; transform: translateY(20px) scale(0.95); pointer-events: none; transition: opacity 0.3s ease, transform 0.3s ease; }
        .coffee-popup.show { opacity: 1; transform: translateY(0) scale(1); pointer-events: auto; }
        .close-popup { position: absolute; top: 10px; right: 15px; background: none; border: none; color: #888; font-size: 20px; cursor: pointer; padding: 0; line-height: 1; }
        .close-popup:hover { color: #f48fb1; }
        .coffee-popup p { color: #e0e0e0; font-size: 0.95em; line-height: 1.5; margin-top: 5px; margin-bottom: 15px; }
        .coffee-popup img { width: 100%; height: auto; border-radius: 8px; transition: transform 0.2s ease; }
        .coffee-popup img:hover { transform: scale(1.03); }
        .coffee-toggle-btn { background-color: #f48fb1; color: #121212; border: none; border-radius: 30px; padding: 12px 24px; font-size: 1.1em; font-weight: bold; cursor: pointer; box-shadow: 0 4px 15px rgba(244, 143, 177, 0.4); transition: transform 0.2s, background-color 0.2s; display: flex; align-items: center; gap: 8px; font-family: inherit;}
        .coffee-toggle-btn:hover { transform: scale(1.05); background-color: #f06292; }
    `;
    document.head.appendChild(style);

    // 2. Wstrzyknięcie okienka HTML na dół strony
    const widgetContainer = document.createElement('div');
    widgetContainer.className = 'floating-coffee';
    widgetContainer.innerHTML = `
        <div id="coffee-popup" class="coffee-popup">
            <button id="close-coffee" class="close-popup">&times;</button>
            <p>Hej! Jeśli podoba Ci się treść, z której korzystasz i chcesz w ramach podziękowania postawić mi symboliczną kawę, zapraszam pod przycisk niżej. Będzie mi bardzo miło! Życzę owocnej nauki! ☕</p>
            <a href="https://buycoffee.to/zmoreq" target="_blank"><img src="https://buycoffee.to/static/img/share/share-button-dark.png" style="width: 195px; height: 51px" alt="Postaw kawę dla zmoreq na buycoffee.to"></a>
        </div>
        <button id="coffee-toggle" class="coffee-toggle-btn">
            ☕ Postaw Kawę
        </button>
    `;
    document.body.appendChild(widgetContainer);

    // 3. Logika klikania
    const coffeeToggle = document.getElementById('coffee-toggle');
    const coffeePopup = document.getElementById('coffee-popup');
    const closeCoffee = document.getElementById('close-coffee');

    coffeeToggle.addEventListener('click', () => {
        coffeePopup.classList.toggle('show');
    });

    closeCoffee.addEventListener('click', () => {
        coffeePopup.classList.remove('show');
    });
});