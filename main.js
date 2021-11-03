// 1. Найдите кнопку "Sign Up". Замените ей фон на прозрачный. Сделайте рамку в 1 пиксель и текст цветом #DD3142.
// var buttonElement = document.getElementsByClassName('form__button');
// console.log(buttonElement);
var stylesButton = getComputedStyle(document.getElementsByClassName('form__button')[0]);
console.log(stylesButton);

var buttonElement = document.getElementsByClassName('form__button');
console.log(buttonElement);

buttonElement[0].style.color = '#DD3142';
buttonElement[0].style.background = 'transparent';
buttonElement[0].style.border = '1px solid #DD3142';


// 2. Найдите первый элемент input и удалите у него значение (Antony Swarowski)

var inputFullName = document.querySelectorAll('input')[0];
console.log(inputFullName.value);

inputFullName.value = '';

// 3. Найдите второй элемент input и добавьте ему значение - example

var inputUserName = document.querySelectorAll('input')[1];
inputUserName.value = 'example'


// 4. Найдите третий элемент i;nput и задайте ему плейсхолдер email@mail.com

var inputEmail = document.querySelectorAll('input')[2];
inputEmail.placeholder = 'email@mail.com';



// 6. Сделайте чекбокс выбранным

var checkbox = document.getElementById('checkbox');
console.log('checkbox');
checkbox.checked = true;

// 7. Найдите все элементы по тегу input, и в цикле измените для каждого цвет нижней рамки на черный

var elementsInput = document.getElementsByClassName('form__input');

for (let i = 0; i < elementsInput.length; i++) {
    elementsInput[i].style.borderBottom = '1px solid black';
}

// 5. Найдите блок с полем Repeat Password и удалите его целиком
var inputRepeatPassword = document.getElementsByClassName('form__input__wrapper__repeat_password');
console.log(inputRepeatPassword);
var form = document.getElementsByClassName('form')[0];
document.form.removeChild(inputRepeatPassword);