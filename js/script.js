const btn = document.getElementById('load-btn');
const result = document.getElementById('result');

// XMLHttpRequest - объект, с помощью которого можно работать с аснхронными запросами
// Перед отправкой на сервер, этот объект нужно подготовить
// Для этого вызывается метод open(), с двумя аргументами: метод протокола HTTP и путь к файлу на сервере, который нужно загрузить
// Теперь запрос можно отправить с помощью метода send()
// xhr.responseType = 'json'; - указываем объекту xhr, что ответ от сервера ожидается в json формате
// Указать тип необходимо до отправки запроса методом send();
// В свойстве response содержатся данные указанного типа
btn.addEventListener('click', () => {
    const xhr = new XMLHttpRequest;
    xhr.open('GET', 'friends.json');
    xhr.responseType = 'json'; // получить данные в формате json
    xhr.send();

    xhr.addEventListener('load', () => {
        if (xhr.status >= 400) {
            console.log('Something went wrong');
            result.textContent = 'Something went wrong';
        } else {    
            result.innerHTML = '';
            const friends = xhr.response; // мы указали тип получаемых данных в формате json, поэтому JSON.parse() не нужен
            console.log(friends);
            friends.forEach((friend) => {
                result.innerHTML += friend.name;
                result.innerHTML += friend.lastname;
            })
        }   
    })
})