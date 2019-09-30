const form = document.querySelector('#simple-form');
const formElements = form.elements;
const formId = 'simple-form';
const submitBtn = document.querySelector('#submit-btn');
const messageBox = document.querySelector('#message-box');
const loadBtn = document.querySelector('#load-btn');
const clearBtn = document.querySelector('#clear-btn');
const refreshBtn = document.querySelector('#refresh-btn');

saveFormData = () => {
    let data = {[formId]: {}};
    Array.from(formElements).forEach(element => {
        if (element.name.length) {
            data[formId][element.name] = element.value;
        }
    });

    return data;
};

submitBtn.onclick = (event) => {
    event.preventDefault();
    const data = saveFormData();
    localStorage.setItem(formId, JSON.stringify(data[formId]));
    const message = 'Your form has been saved';
    displayMessage(message);
};

loadBtn.onclick = (event) => {
    event.preventDefault();
    loadForm();
};

clearBtn.onclick = (event) => {
    event.preventDefault();
    Array.from(formElements).forEach(element => {
        if (element.name.length) {
            element.value = '';
        }
    })
};

refreshBtn.onclick = (event) => {
    event.preventDefault();
    location.reload();
};

displayMessage = (message) => {
    messageBox.innerText = message;
    messageBox.classList.toggle('fade');
    setTimeout( () => {
        messageBox.classList.toggle('fade');
    }, 2000)
};

loadForm = () => {
    if (localStorage.key(formId)) {
        const savedData = JSON.parse(localStorage.getItem(formId));
        Array.from(formElements).forEach(element => {
            if (element.name in savedData) {
                element.value = savedData[element.name];
            }
        });
        const message = 'Your saved form has been retrieved...';
        displayMessage(message);
    } else {
        const message = 'No form data saved, retrieving defaults'
        displayMessage(message);
    }
};

clearLocalStorage = () => {
    const message = 'LocalStorage has been cleared';
    localStorage.clear();
    if (!localStorage.length) displayMessage(message);
};

document.onload = loadForm();
