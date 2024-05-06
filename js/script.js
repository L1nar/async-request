const btn = document.getElementById('load-btn');
const result = document.getElementById('result');

// XMLHttpRequest - объект, с помощью которого можно работать с аснхронными запросами
// Перед отправкой на сервер, этот объект нужно подготовить
// Для этого вызывается метод open(), с двумя аргументами: метод протокола HTTP и путь к файлу на сервере, который нужно загрузить
// Теперь запрос можно отправить с помощью метода send()
btn.addEventListener('click', () => {
    const xhr = new XMLHttpRequest;
    xhr.open('GET', 'friends.json');
    xhr.send();

    xhr.addEventListener('load', () => {
        if (xhr.status >= 400) {
            console.log('Something went wrong');
            result.textContent = 'Something went wrong';
        } else {    
            const friends = JSON.parse(xhr.responseText);
            console.log(friends);
            friends.forEach((friend) => {
                result.innerHTML += friend.name;
                result.innerHTML += friend.lastname;
            })
        }
    })
})