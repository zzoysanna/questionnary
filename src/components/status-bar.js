import * as dom from '../helpers/dom-helper';

export class StatusBar{
    constructor(length){
        this.length = length;
        this.statusBarRef;
    }

    updateStatus(index, status) {
        const items = this.statusBarRef.children;
        items[index].classList.add(status ? 'ok' : 'fail');
    }

    render(element) {
        this.statusBarRef = dom.createTextElement('ul', null, ['status']);
        for(let i = 0; i < this.length; i++) {
            const statusItem = dom.createTextElement('li');
            this.statusBarRef.appendChild(statusItem);
        }
        element.appendChild(this.statusBarRef);
    }
}