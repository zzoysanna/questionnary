import { QuestionPage } from './components/question-page';
import * as dom from './helpers/dom-helper';

(() => {
    const rootElement = document.getElementById('root');
    const btn = dom.createTextElement('button', 'Start quiz!', ['start']);
    btn.addEventListener('click', () => new QuestionPage(rootElement));
    rootElement.appendChild(btn);
})()