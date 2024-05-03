const btn = document.getElementById('load-btn');
const result = document.getElementById('result');

// XMLHttpRequest - объект, с помощью которого можно работать с аснхронными запросами
// Перед отправкой на сервер, этот объект нужно подготовить
// Для этого вызывается метод open(), с двумя аргументами: метод протокола HTTP и путь к файлу на сервере, который нужно загрузить
// Теперь запрос можно отправить с помощью метода send()
btn.addEventListener('click', () => {
    const xhr = new XMLHttpRequest;
    xhr.open('GET', 'content.txt');
    xhr.send();

    xhr.addEventListener('load', () => {
        if (xhr.status === 404) {
            console.log('Something went wrong');
        } else {
            console.log(xhr.responseText);
        }
    })
})