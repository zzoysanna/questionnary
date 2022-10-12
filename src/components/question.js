import * as dom from '../helpers/dom-helper';

export class Question {
    constructor(callback) {
        this.onAnswer = callback;
        this.answersRef;
    }

    render(question, element) {
        const questionWrapper = dom.createTextElement('article');
        const title = dom.createTextElement('p', question.body, ['title']);
        
        let image;
        if(question.image){
            image = document.createElement('img');
            image.src = question.image;
        }

        this.answersRef = dom.createTextElement('div', null, ['answers']);
        question.answers.forEach((text, i) => {
            const answer = dom.createTextElement('div', text);
            answer.addEventListener('click', () => {
                const isCorrect = i === question.correct;
                this.showItemsStatus(i, isCorrect);
                this.onAnswer(isCorrect);
            })
            this.answersRef.appendChild(answer)
        });

        if(image){
            questionWrapper.appendChild(image);
        }
        questionWrapper.appendChild(title);
        questionWrapper.appendChild(this.answersRef);

        dom.replaceElementContent(element, questionWrapper);
    }

    showItemsStatus(index, status) {
        const answers = this.answersRef.children;
        for(let i = 0; i < answers.length; i ++) {
            if(i === index) {
                answers[i].classList.add(status ? 'ok' : 'fail');
            } else {
                answers[i].classList.add('inactive');
            }
        }
    }
}