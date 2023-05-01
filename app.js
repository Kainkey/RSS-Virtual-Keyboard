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
let isCapsLockEnabled = false;
let isShiftEnabled = false;
let isAltEnabled = false;
let isWinEnabled = false;


keyboardLayout.forEach(row => {
  const rowElement = document.createElement('div');
  rowElement.classList.add('keyboard-row');

  row.forEach(key => {
    const keyElement = document.createElement('div');
    keyElement.classList.add('keyboard-key');
    keyElement.textContent = key;

    // Добавляем обработчик события клика на кнопку клавиатуры
    keyElement.addEventListener('click', () => {
      let keyText = key;

      // Если Caps Lock включен, переводим текст кнопки в верхний регистр
      if (isCapsLockEnabled) {
        keyText = keyText.toUpperCase();
      }

      // Если Shift включен, переводим текст кнопки в верхний регистр
      if (isShiftEnabled) {
        keyText = keyText.toUpperCase();
      }

     // Добавляем символ в текстовое поле
  if (key === 'Tab') {
    textFieldElement.focus();
    const cursorPosition = textFieldElement.selectionStart;
    const textBeforeCursor = textFieldElement.value.slice(0, cursorPosition);
    const textAfterCursor = textFieldElement.value.slice(cursorPosition);
    textFieldElement.value = textBeforeCursor + '\t' + textAfterCursor;
    textFieldElement.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
  } else {
    textFieldElement.value += keyText;
  }
});

    rowElement.appendChild(keyElement);
  });

  keyboardElement.appendChild(rowElement);
});

// Создаем текстовое поле
const textFieldElement = document.createElement('textarea');
textFieldElement.classList.add('text-field');

textFieldElement.addEventListener('keydown', event => {
  if (event.target === textFieldElement) {
    event.preventDefault();
  }
});

textFieldElement.addEventListener('blur', () => {
  textFieldElement.removeEventListener('keydown');
});

document.body.appendChild(textFieldElement);

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
      key.classList.add('active');
      // Включаем Caps Lock при нажатии на клавишу CapsLock
      if (event.key === 'CapsLock') {
        isCapsLockEnabled = !isCapsLockEnabled;
        key.classList.toggle('active', isCapsLockEnabled);
      }

      // Включаем Shift при нажатии на клавишу Shift
      if (event.key === 'Shift') {
        isShiftEnabled = true;
        key.classList.add('active');
      }

      // Удаляем последний символ при нажатии на клавишу Backspace
      if (event.key === 'Backspace') {
        textFieldElement.value = textFieldElement.value.slice(0, -1);
      }

      // Добавляем пробел при нажатии на клавишу Space
      if (event.key === ' ') {
        textFieldElement.value += ' ';
      }

      // Включаем Caps Lock при нажатии на клавишу CapsLock
      if (event.key === 'CapsLock') {
        isCapsLockEnabled = !isCapsLockEnabled;
        key.classList.toggle('active', isCapsLockEnabled);
      }

      // Включаем Shift при нажатии на клавишу Shift
      if (event.key === 'Shift') {
        isShiftEnabled = true;
        key.classList.add('active');
      }

      // Включаем Ctrl при нажатии на клавишу Ctrl
      if (event.key === 'Control') {
        key.classList.add('active');
      }

      // Включаем Alt при нажатии на клавишу Alt
      if (event.key === 'Alt') {
        key.classList.add('active');
      }

      // Включаем Win при нажатии на клавишу Meta (Win/Command)
      if (event.key === 'Meta') {
        key.classList.add('active');
      }

      // Вводим символ в текстовое поле
      if (event.key.length === 1) {
        let keyText = event.key;

        // Если Caps Lock включен, переводим текст кнопки в верхний регистр
        if (isCapsLockEnabled) {
          keyText = keyText.toUpperCase();
        }

        // Если Shift включен, переводим текст кнопки в верхний регистр
        if (isShiftEnabled) {
          keyText = keyText.toUpperCase();
        }

        // Включаем Alt при нажатии на клавишу Alt
        if (event.key === 'Alt') {
          isAltEnabled = true;
          key.classList.add('active');
        }

        // Включаем Win при нажатии на клавишу Meta (Win/Command)
        if (event.key === 'Meta') {
          isWinEnabled = true;
          key.classList.add('active');
        }

        // Обновляем стиль для кнопки Alt, если она включена
        if (isAltEnabled && key.textContent === 'Alt') {
          key.classList.add('active');
        }

        // Обновляем стиль для кнопки Win, если она включена
        if (isWinEnabled && key.textContent === 'Win') {
          key.classList.add('active');
        }

        textFieldElement.value += keyText;
      }
    }
  });
});

document.addEventListener('keyup', (event) => {
  // Проходим по элементам клавиатуры
  const keys = keyboardElement.querySelectorAll('.keyboard-key');
  keys.forEach(key => {
    // Сравниваем текст кнопки с отпущенной клавишей на клавиатуре
    if (key.textContent.toLowerCase() === event.key.toLowerCase()) {
      key.classList.remove('active');
      // Выключаем Shift при отпускании клавиши Shift
      if (event.key === 'Shift') {
        isShiftEnabled = false;
        key.classList.remove('active');
      }

      // Отмечаем нажатие на кнопки Win и Alt
      if (event.key === 'Alt') {
        const altKeys = document.querySelectorAll('.alt-key');
        altKeys.forEach(key => {
          key.classList.add('active');
        });
      }
      if (event.key === 'Meta') {
        const winKeys = document.querySelectorAll('.win-key');
        winKeys.forEach(key => {
          key.classList.add('active');
        });
      }

      // Выключаем Ctrl при отпускании клавиши Ctrl
      if (event.key === 'Control') {
        key.classList.remove('active');
      }

      // Отключаем Alt при отпускании клавиши Alt
      if (event.key === 'Alt') {
        const altKeys = document.querySelectorAll('.alt-key');
        altKeys.forEach(key => {
          key.classList.remove('active');
        });
      }

      // Отключаем Win при отпускании клавиши Meta (Win/Command)
      if (event.key === 'Meta') {
        const winKeys = document.querySelectorAll('.win-key');
        winKeys.forEach(key => {
          key.classList.remove('active');
        });
      }

      // Выключаем Caps Lock при отпускании клавиши Caps Lock
      if (event.key === 'CapsLock') {
        isCapsLockEnabled = !isCapsLockEnabled;
        key.classList.toggle('active', isCapsLockEnabled);
      }
    }
  });
});


// Добавляем обработчик события input на текстовое поле
textFieldElement.addEventListener('input', () => {
  const text = textFieldElement.value;
  const lastChar = text.charAt(text.length - 1);

  // Если введен символ, который является буквой или цифрой, то выключаем Caps Lock
  if ((lastChar >= 'a' && lastChar <= 'z') || (lastChar >= 'A' && lastChar <= 'Z') || (lastChar >= '0' && lastChar <= '9')) {
    isCapsLockEnabled = false;
    const capsLockKey = document.querySelector('.capslock-key');
    capsLockKey.classList.remove('active');
  }
});



// Добавляем фокус на текстовое поле
textFieldElement.focus();








