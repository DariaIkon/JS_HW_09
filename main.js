window.onload = function () {

// В поле "Full Name" запретите вводить цифры.
    var inputFullName = document.getElementById('full_name');
    inputFullName.keypress = (() => {
        var number = parseInt(event.key);
    if (!isNaN(number)) {
        event.preventDefault();
    } else {
        console.log();
    }
    });
// В поле "Your username" запретите вводить точки и запятые.
    var inputUserName = document.getElementById('username');
    inputUserName.keypress = (() => {
    if (event.key === '.' || ',') {
        inputFullName.preventDefault();
    } else {
        console.log(inputUserName.keypress);
    }
    });
// При изменении значения чекбокса выводите в консоль соответствующее предложение: “Согласен” или “Не согласен”.
    var checkbox = document.getElementById('checkbox');
    checkbox.onchange = (() => {
        if (checkbox.checked = true) {
            console.log('Согласен');
        } else {
            console.log('Не согласен');
        }
    });
    

// При нажатии на кнопку “Sign Up”:
// Проверьте на существование значения в каждом текстовом поле. 
// Если какое - то поле не заполнено, выведите об этом ошибку,
//  используя alert.Ошибка должна быть следующего вида "Заполните 
// поле E - mail".
// Проверьте совпадают ли пароли из двух текстовых полей. Если пароли 
// не совпадают, выведите об этом ошибку, используя alert.
// Проверьте выбран ли чекбокс. Если чекбокс не выбран, выведите об этом 
// ошибку, используя alert.
// Если код по всем проверкам успешно - вывести “OKAY”, используя alert.

    var button = document.getElementsByTagName('button');
    button.onclick = (() => {
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
    if (inputs.value[i] === undefined) {
        alert('Заполните поле + inputs[i].id')
        return;
    }
}
        var password = document.getElementById('password');
        var repeatPassword = document.getElementById('repeatPassword');
        if (password !== repeatPassword) {
            alert('Пароль введен не верно');
        }

    });

    
// При нажатии на ссылку "Already have an account?" сделать следующие действия со страницей:
// Текст "Get your free account" заменить на "Log in to the system".
// Блоки с полями "Full Name", "E-mail", "Repeat Password" удалите.
// Блок с чекбоксом также удалите.
// Текст в кнопке замените на "Sign In"
// Ссылку "Already have an account?" также удалите
   
    var link = document.getElementsByClassName('form__link');
    link.onclick = (() => {
        var inputs = document.getElementsByTagName('input');
        for (var i = 0; i < inputs.length; i++) {
            if (inputs.value[i] !== undefined) {
                inputs[i].remove();
                return;
            }
        }
        link.innerText = 'Log in to the system';
        button.innerText = 'Sign In';
        link.remove();
    });


   

 };