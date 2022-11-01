//- Add to html page table with header and some rows
//- Add to header event listener to implement sorting functionality across the table data(alphabetical)
//- Add to cells user interaction feature(click and edit text)
//- Table in whole should be created with JS and appended to the document body on DOMContentLoaded event*

const root = document.getElementById('root');

const data = [
    { name: 'John', surname: 'Doe', email: 'john.doe@mail.com' },
    { name: 'Marie', surname: 'Smith', email: 'marie.smith@mail.com' },
    { name: 'Hans', surname: 'Andersen', email: 'hans.andersen@mail.com' },
    { name: 'Alex', surname: 'Johnson', email: 'alex.johnson@mail.com' },
    { name: 'Vin', surname: 'Diesel', email: 'vin.diesel@mail.com' },
    { name: 'Generic', surname: 'User', email: 'genericuser@mail.com' },
    { name: 'Alexander', surname: 'Macedonian', email: 'alex.mac@mail.com' }
];

const sort = (tbody, index, sortDirection) => {
    Array.prototype.slice.call(tbody.children).sort(
        (r1, r2) => r1.children[index].textContent
            .localeCompare(r2.children[index].textContent) * (sortDirection ? 1 : -1)
    ).forEach(tr => tbody.append(tr));
};

function render() {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    table.append(thead);
    table.append(tbody);

    //RENDER HEADER
    const headerRow = document.createElement('tr');

    const headers = ['Name', 'Surname', 'Email'];
    headers.forEach(inputText => {
        const headerCell = document.createElement('th');
        const textNode = document.createTextNode(inputText);
        headerCell.append(textNode);
        headerRow.append(headerCell);
    });

    thead.append(headerRow);

    //RENDER BODY
    data.forEach(person => {
        const tableRow = document.createElement('tr');

        Object.values(person).forEach(inputText => {
            const tableCell = document.createElement('td');
            const textNode = document.createTextNode(inputText);
            tableCell.append(textNode);
            tableRow.append(tableCell);
        });

        tbody.append(tableRow);
    });

    root.append(table);

    //SORTING
    Array.prototype.forEach.call(headerRow.children, (thead, index) => {
        let sortDirection = false;
        thead.addEventListener('click', () => sort(tbody, index, sortDirection = !sortDirection));
    });

    //EDITING
    var editTB;

    table.onclick = function (event) {
        let target = event.target.closest('.cancel, .ok, td');

        if (!table.contains(target)) return;

        if (target.className == 'cancel') {
            editdone(editTB.elem, false);
        } else if (target.className == 'ok') {
            editdone(editTB.elem, true);
        } else if (target.nodeName == 'TD') {
            if (editTB) return;

            editmode(target);
        }
    };

    function editmode(td) {
        editTB = {
            elem: td,
            data: td.innerHTML
        };

        td.classList.add('edit-td');

        let input = document.createElement('input');
        input.style.width = td.clientWidth + 'px';
        input.style.height = td.clientHeight + 'px';
        input.value = td.innerHTML;
        td.innerHTML = '';

        td.appendChild(input);
        input.focus();

        td.insertAdjacentHTML('beforeend','<button class="ok">Ok</button><button class="cancel">Cancel</button>');
    }

    function editdone(td, isOk) {
        if (isOk) {
            td.innerHTML = td.firstChild.value;
        } else {
            td.innerHTML = editTB.data;
        }
        
        td.classList.remove('edit-td');
        editTB = null;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    render();
});
