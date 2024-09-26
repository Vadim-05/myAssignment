    const menuToggle = document.querySelector('.header_menu-toggle'); // Для відкриття меню
    const mobileMenu = document.querySelector('.header_mobile-menu'); // Меню
    let menuOpen = false; // Перевірка стану меню

    const toggleMenu = (event) => {
        event.stopPropagation(); // Зупиняємо подальшу обробку події
        menuOpen = !menuOpen; // Зміна стану меню

        // Відкриття або закриття меню
        mobileMenu.classList.toggle('active', menuOpen); 
    };

    // Слухач події для відкриття/закриття меню
    menuToggle.addEventListener('click', toggleMenu);

    // Слухач події для закриття меню при натисканні на закриття
    mobileMenu.querySelector('.header_menu-toggle').addEventListener('click', (event) => {
        event.stopPropagation(); // Зупиняємо подальшу обробку події
        toggleMenu(event); // Викликаємо функцію для закриття меню
    });

    // Слухач події для закриття меню при натисканні за межами меню
    document.addEventListener('click', (event) => {
        if (menuOpen && !mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            toggleMenu(event); // Закрити меню
        }
    });

    // Додаємо активний клас до подій
    const eventItems = document.querySelectorAll('.event-item');

    const setActiveEvent = (event) => {
        // Видаляємо клас active з усіх елементів
        eventItems.forEach(item => item.classList.remove('active'));
        
        // Додаємо клас active до натиснутого елемента
        event.currentTarget.classList.add('active');
        
        // Закриваємо меню після вибору
        if (menuOpen) {
            toggleMenu(event); // Закрити меню, якщо воно відкрите
        }
    };

    // Додаємо слухача подій для кожного елемента
    eventItems.forEach(item => {
        item.addEventListener('click', setActiveEvent);
    });

    // Додамо функціональність для кнопок у секції casino-options
    const casinoButtons = document.querySelectorAll('.casino-options__button');

    casinoButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Видаляємо клас active з усіх кнопок
            casinoButtons.forEach(btn => btn.classList.remove('active'));
            
            // Додаємо клас active до натиснутої кнопки
            event.currentTarget.classList.add('active');
        });
    });

    // FAQ акордеон
document.querySelectorAll('.faq__accordion').forEach(accordion => {
    const header = accordion.querySelector('.faq__accordion-header');
    const content = accordion.querySelector('.faq__accordion-content');
    const icon = accordion.querySelector('.faq__accordion-icon');

    header.addEventListener('click', () => {
        content.classList.toggle('faq__accordion-content--active');
        icon.src = content.classList.contains('faq__accordion-content--active') 
            ? './img/Collapse.png'
            : './img/Expand.png';
    });
});

    // Кастомний селект
    const customSelect = document.getElementById('customSelect');
    const optionsContainer = document.getElementById('options');
    const selectedText = document.getElementById('selectedText');
    const selectedIcon = document.getElementById('selectedIcon');

    // Відкриваємо/закриваємо опції
    customSelect.addEventListener('click', () => {
        optionsContainer.style.display = optionsContainer.style.display === 'block' ? 'none' : 'block';
    });

    // Обираємо опцію
    optionsContainer.addEventListener('click', (event) => {
        const target = event.target.closest('.option');
        if (target) {
            const value = target.getAttribute('data-value');
            const iconUrl = target.getAttribute('data-icon');
            
            // Оновлюємо вибраний текст і зображення
            selectedText.textContent = target.textContent.trim();
            selectedIcon.src = iconUrl;

            // Закриваємо опції
            optionsContainer.style.display = 'none';
        }
    });

    // Закриваємо опції при натисканні поза селектом
    document.addEventListener('click', (event) => {
        if (!customSelect.contains(event.target)) {
            optionsContainer.style.display = 'none';
        }
    });