import layout from './layout.js';
const layoutRu = layout.ru
const layoutEn = layout.en

//Создаем кнопки
class CreateKey {
constructor({small, shift, keycode}) {
    this.small = small;
    this.shift = shift;
    this.keycode = keycode;
}

create() {
    const key = document.createElement('li')
    key.classList.add('keyboard__key')

    switch (this.keycode) {
        case 'Space':
            key.classList.add('space')
            key.innerText = this.small
            break
        case 'Backspace':
            key.classList.add('backspace')
            key.innerText = this.small
            break
        case 'Tab':
            key.classList.add('tab')
            key.innerText = this.small
            break
        case 'CapsLock':
                key.classList.add('capslock')
                key.innerText = this.small
                break
            case 'Enter':
            key.classList.add('enter')
            key.innerText = this.small
            break
        case 'ShiftLeft':
            key.classList.add('shift-left')
            key.innerText = this.small
            break
        case 'ShiftRight':
            key.classList.add('shift-right')
            key.innerText = this.small
            break
            default:
                key.classList.add('symbol')
                key.innerText = this.small
    }
    return key
}
}
// Создаем всё приложение
const createAllElements = () => {
    const container = document.createElement('div')
    container.classList.add('container')

    const textarea = document.createElement('textarea')
   textarea.classList.add('field')

   const text = document.createElement('div')
   text.classList.add('text')
   text.innerHTML = 
   `<p>Клавиатура создана в операционной системе Windows</p>
   <p>Сочетание клавиш</p>`
   container.append(text)
   container.append(textarea)
   container.append(createKeyboard(layoutEn))

   document.body.append(container)
}

createAllElements()

//Создаем клавиатуру на английской раскладке
function createKeyboard(lang) {
    const keyboard = document.createElement('div')
    keyboard.classList.add('keyboard')

    lang.forEach((rows) => {
        const row = document.createElement('ul')
        row.classList.add('row')

        rows.forEach((key) => {
            const keyboardKey = new CreateKey(key)
            row.append(keyboardKey.create())
        })
        keyboard.append(row)
    })
    return keyboard
}