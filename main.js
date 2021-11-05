window.onload = function () {

// В поле "Full Name" запретите вводить цифры.
    document.getElementById('full_name').onkeypress = ((event) => {
        var number = parseInt(event.key);
            if (!isNaN(number)) {
                event.preventDefault();
            }
    });
// В поле "Your username" запретите вводить точки и запятые.
    document.getElementById('username').onkeypress = ((event) => {
            if (event.key === '.' || event.key === ',') {
                event.preventDefault();
            } 
    });
// При изменении значения чекбокса выводите в консоль соответствующее предложение: “Согласен” или “Не согласен”.
    var checkbox = document.getElementById('checkbox');
    checkbox.onchange = (() => {
        if (checkbox.checked === true) {
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
    var inputs = document.getElementsByTagName('input');
    var password = document.getElementById('password');
    var repeatPassword = document.getElementById('repeatPassword');
    button.onclick = ((event) => {
        if (inputs[0].value === '') {
            alert('Заполните поле Full Name');
            return;
        }
        if (inputs[1].value === '') {
            alert('Заполните поле Your username');
            return;
        }
        if (inputs[2].value === '') {
            alert('Заполните поле E-mail');
            return;
        }
        if (inputs[3].value === '') {
            alert('Заполните поле Password');
            return;
        }
        if (inputs[4].value === '') {
            alert('Заполните поле Repeat Password');
            return;
        } 
        if (password[0].value !== repeatPassword[0].value) {
            alert('Пароль введен не верно');
            return;
        }
        if (checkbox.checked !== true) {
            alert('Подтвердите соглашение')
            return;
        } 
        alert('Okey');
        return;
    });
       

    
// При нажатии на ссылку "Already have an account?" 
// сделать следующие действия со страницей:
// Текст "Get your free account" заменить на "Log in to the system".
// Блоки с полями "Full Name", "E-mail", "Repeat Password" удалите.
// Блок с чекбоксом также удалите.
// Текст в кнопке замените на "Sign In"
// Ссылку "Already have an account?" также удалите
   
    var link = document.getElementById('form__link');
    var formInputRepeatPassword = document.getElementsByClassName('form__input__wrapper__repeat__password');
    var formInputFullName = document.getElementsByClassName('form__input__wrapper__full_name');
    var formInputMail = document.getElementsByClassName('form__input__wrapper__mail');
    var formInputCheckbox = document.getElementsByClassName('form__input__wrapper__checkbox');
    var title = document.getElementsByClassName('form__title');
    link.onclick = ((event) => {
        formInputRepeatPassword.remove();
        formInputFullName.remove();
        formInputMail.remove();
        formInputCheckbox.remove();
        title.innerText = 'Log in to the system';
        button.innerText = 'Sign In';
        link.remove();
    });
 };