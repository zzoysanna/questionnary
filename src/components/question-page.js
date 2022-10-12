import { StatusBar } from "./status-bar";
import { Question } from "./question";
import { Result } from "./result";

import { questionsList } from '../questions-list';
import * as dom from '../helpers/dom-helper';

export class QuestionPage {
    constructor(element){
        this.currentIndex = 0;
        this.rootElement = element;
        this.questionsList = questionsList;
        this.nextQuestionDelay = 500;
        this.positiveAnswersCounter = 0;

        this.statusBar = new StatusBar(this.questionsList.length);
        this.question = new Question((args) => this.onAnswer(args));
        this.result = new Result();
        this.contentRef;

        this.render();
    }

    render() {
        const pageEl = document.createElement('section');
        
        const navEl = document.createElement('nav');
        this.statusBar.render(navEl);

        this.contentRef = dom.createTextElement('div', null, ['question']);
        this.question.render(this.questionsList[this.currentIndex], this.contentRef);

        pageEl.appendChild(navEl);
        pageEl.appendChild(this.contentRef);

        dom.replaceElementContent(this.rootElement, pageEl);
    }

    onAnswer(value) {
        this.statusBar.updateStatus(this.currentIndex, value);
        this.positiveAnswersCounter += Number(value);
        setTimeout(() => {
            this.currentIndex === this.questionsList.length - 1 ? this.showResults() : this.nextQuestion();
        }, this.nextQuestionDelay)
    }

    nextQuestion() {
        this.currentIndex += 1;
        this.question.render(this.questionsList[this.currentIndex], this.contentRef);
    }

    showResults() {
        const resultEl = dom.createTextElement('section');
        this.result.render(resultEl, this.positiveAnswersCounter, this.questionsList.length);
        dom.replaceElementContent(this.contentRef, resultEl)
    }
}