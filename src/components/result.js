import * as dom from '../helpers/dom-helper';

export class Result {
    constructor(){
    }

    render(element, positive, total) {
        const result = dom.createTextElement('div', null, ['result']);
        const title = dom.createTextElement('h3', `${positive}/${total}`);
        const text = dom.createTextElement('p', this.getResultText(positive, total));
        result.appendChild(title);
        result.appendChild(text);
        element.appendChild(result);
    }

    getResultText(positive, total) {
        if(positive === total) {
            return 'Excellent!';
        } else if(positive > total / 2) {
            return 'You are good :)';
        }
        return 'There is something to learn for you';
    }
}