//Parse the response and display the qotd on the index page
export class Qotd {
    constructor (resolveValue) {  debugger;
        const response = JSON.parse(resolveValue);
        const results =  response.quote;
        this.quote = results.body;
        this.author= results.author;
    }

    toString() {
        return `${this.quote}<br> - ${this.author}`;
    }
}