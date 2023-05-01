// Создаем массив для символов клавиатуры
const keyboardLayout = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'],
    ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl']
];

// Создаем элемент клавиатуры
const keyboardElement = document.createElement('div');
keyboardElement.classList.add('keyboard');

// Создаем элементы кнопок и добавляем их в клавиатуру
keyboardLayout.forEach(row => {
    const rowElement = document.createElement('div');
    rowElement.classList.add('keyboard-row');

    row.forEach(key => {
        const keyElement = document.createElement('div');
        keyElement.classList.add('keyboard-key');
        keyElement.textContent = key;

        // Добавляем обработчик события клика на кнопку клавиатуры
        keyElement.addEventListener('click', () => {
            // Добавляем символ в текстовое поле
            textFieldElement.value += key;
        });

        rowElement.appendChild(keyElement);
    });

    keyboardElement.appendChild(rowElement);
});

// Создаем текстовое поле
const textFieldElement = document.createElement('textarea');
textFieldElement.classList.add('text-field');

// Добавляем клавиатуру и текстовое поле на страницу
document.body.appendChild(textFieldElement);
document.body.appendChild(keyboardElement);

// Выбираем все специальные клавиши и применяем стили
const specialKeys = document.querySelectorAll('.keyboard-key:not(:empty)');
specialKeys.forEach(key => {
  const keyText = key.textContent.toLowerCase();
  const specialChars = ['tab', 'capslock', 'enter', 'shift', 'backspace', 'delete', 'space', 'ctrl', 'alt', 'win'];
  if (specialChars.includes(keyText)) {
    key.classList.add(keyText + '-key');
  }
});

// Добавляем обработчик событий keydown и keyup на элемент document
document.addEventListener('keydown', (event) => {
  // Проходим по элементам клавиатуры
  const keys = keyboardElement.querySelectorAll('.keyboard-key');
  keys.forEach(key => {
    // Сравниваем текст кнопки с нажатой клавишей на клавиатуре
    if (key.textContent.toLowerCase() === event.key.toLowerCase()) {
      // Добавляем класс для подсветки
      key.classList.add('active');
    }
  });
});

document.addEventListener('keyup', (event) => {
  // Проходим по элементам клавиатуры
  const keys = keyboardElement.querySelectorAll('.keyboard-key');
  keys.forEach(key => {
    // Сравниваем текст кнопки с отпущенной клавишей на клавиатуре
    if (key.textContent.toLowerCase() === event.key.toLowerCase()) {
      // Удаляем класс для подсветки
      key.classList.remove('active');
    }
  });
});






