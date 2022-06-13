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

    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save name';
    textLabel.append(saveBtn);

    const h1 = document.createElement('h1');
    document.body.append(h1);
    getName();

    textInput.addEventListener('change', setName);

    function setName() {
        localStorage.setItem('user', `${textInput.value}`);
    }

    saveBtn.addEventListener('click', getName);

    function getName() {
        if (localStorage.getItem('user') == null) {
            textLabel.style.color = 'red';
        } else {
            let curUser = localStorage.getItem('user');
            h1.textContent = `Hello, ` + `${curUser}!`;
        }
    }

    const changeBtn = document.createElement('button');
    changeBtn.textContent = 'Change theme';
    textLabel.append(changeBtn);

    // Use previous setting
    let curTheme = () => {
        return localStorage.getItem('theme');
    }

    if (curTheme()) {
        toggleClass();
    }

    function toggleClass() {
        document.body.classList.toggle('dark-theme');
    }

    // Choosing a theme
    changeBtn.addEventListener('click', switchTheme);

    function switchTheme() {
        if (curTheme()) {
            localStorage.removeItem('theme');
        } else {
            localStorage.setItem('theme', 'dark');
        }

        toggleClass();
    }
}
