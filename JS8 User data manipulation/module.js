// Develop page with stored state that can “restore” user name and predefined theme (dark or light) after browser was closed
// Apply this module to existing app (from previous task or any)

export function connectModule() {
    const h2 = document.createElement('h2');
    document.body.prepend(h2);

    const textLabel = document.createElement('span');
    textLabel.textContent = 'Enter your name: ';
    h2.append(textLabel);

    const textInput = document.createElement('input');
    textInput.setAttribute('type', 'text');
    textLabel.append(textInput);

    textInput.addEventListener('change', setName);

    function setName() {
        localStorage.setItem('user', `${textInput.value}`);
    }

    getName();

    function getName() {
        if (localStorage.getItem('user') === null) {
            textLabel.style.color = 'red';
        } else {
            textLabel.textContent = localStorage.getItem('user');
        }
    }

    let curColor = localStorage.getItem('color');
    document.body.style.backgroundColor = curColor;

    const colorLabel = document.createElement('span');
    colorLabel.textContent = 'Change the theme: ';
    document.body.append(colorLabel);

    const colorInput = document.createElement('input');
    colorInput.setAttribute('type', 'color');
    document.body.append(colorInput);

    colorInput.addEventListener('input', changeBgColor);

    function changeBgColor() {
        document.body.style.backgroundColor = `${colorInput.value}`;
        localStorage.setItem('color', `${colorInput.value}`);
    };

}
