document.addEventListener('DOMContentLoaded', () => {
    const articlesData = [
        { title: 'Заголовок статьи 1', content: 'Содержание статьи 1' },
        { title: 'Заголовок статьи 2', content: 'Содержание статьи 2' }
    ];

    const articlesContainer = document.getElementById('articles');
    const addArticleButton = document.getElementById('addArticle');

    // Загрузка данных из локального хранилища
    const savedArticles = JSON.parse(localStorage.getItem('articles')) || articlesData;

    // Функция для отображения статей
    function displayArticles(articles) {
        articlesContainer.innerHTML = '';
        articles.forEach((article, index) => {
            const articleDiv = document.createElement('div');
            articleDiv.classList.add('article', 'card', 'mb-3');
            articleDiv.innerHTML = `
                <div class="card-body">
                    <h2 class="card-title">${article.title}</h2>
                    <p class="card-text">${article.content}</p>
                    <button class="btn btn-danger delete-btn" data-index="${index}">Удалить</button>
                    <button class="btn btn-warning edit-btn" data-index="${index}">Редактировать</button>
                </div>
            `;
            articlesContainer.appendChild(articleDiv);
        });
    }

    // Отображение начальных статей
    displayArticles(savedArticles);

    // Добавление новой статьи
    addArticleButton.addEventListener('click', () => {
        const newArticle = { title: 'Новая статья', content: 'Введите содержание статьи...' };
        savedArticles.push(newArticle);
        localStorage.setItem('articles', JSON.stringify(savedArticles));
        displayArticles(savedArticles);
    });

    // Удаление статьи
    articlesContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const index = event.target.getAttribute('data-index');
            savedArticles.splice(index, 1);
            localStorage.setItem('articles', JSON.stringify(savedArticles));
            displayArticles(savedArticles);
        }
    });

    // Редактирование статьи
    articlesContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('edit-btn')) {
            const index = event.target.getAttribute('data-index');
            const newTitle = prompt('Введите новый заголовок:', savedArticles[index].title);
            const newContent = prompt('Введите новый текст:', savedArticles[index].content);
            if (newTitle && newContent) {
                savedArticles[index].title = newTitle;
                savedArticles[index].content = newContent;
                localStorage.setItem('articles', JSON.stringify(savedArticles));
                displayArticles(savedArticles);
            }
        }
    });
});