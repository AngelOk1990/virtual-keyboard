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
    key.dataset.keycode = this.keycode

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
   <p></p>`
   container.append(text)
   container.append(textarea)
   const keyboard = (createKeyboard(layoutEn, textarea))
   container.append(keyboard)

   document.body.append(container)
}

createAllElements()

//Создаем клавиатуру на английской раскладке
function createKeyboard(lang, textarea) {
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
    keyboard.addEventListener('mousedown', (e) => {
        
            e.target.classList.add('active')
            eventsHandlerOnKeyboard(e, textarea)
        
    })
    keyboard.addEventListener('mouseup', (e) => {
            e.target.classList.remove('active')
    })
    keyboard.addEventListener('keydown', (e) => {
        e.preventDefault()
            e.target.classList.add('active')
            eventsHandlerOnKeyboard(e, textarea)
        
    })
    keyboard.addEventListener('keyup', (e) => {
            e.target.classList.remove('active')
    
    })

    return keyboard
}

//Создаем обработчик событий

function eventsHandlerOnKeyboard(event, textarea) {
    switch (event.target.dataset.keycode) {
        case 'Space':
            textarea.value += ' '
            break
        case 'Backspace':
            textarea.value = textarea.value.substring(0, textarea.value.length-1)
            break
        case 'Tab':
            
            break
        case 'CapsLock':
            textarea.value += textarea.value.toUpperCase()
                break
            case 'Enter':
            
            break
        case 'ShiftLeft':
            
            break
        case 'ShiftRight':
            
            break
            default:
                textarea.value += event.target.innerHTML
               
    }
}