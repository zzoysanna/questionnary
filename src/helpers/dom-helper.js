export const replaceElementContent = (el, newEl) => {
    el.innerHTML = '';
    el.appendChild(newEl);
}

export const createTextElement = (tag, text, classes) => {
    const el = document.createElement(tag);
    if (text) {
        el.textContent = text;
    }
    if (classes?.length) {
        el.classList.add(classes.join(','))
    }
    return el;
}