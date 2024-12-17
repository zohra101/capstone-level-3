//Parse the response and display the qotd on the index page
export function parseQotdResponse(resolveValue) {
    debugger;
    const response = JSON.parse(resolveValue);
    const results =  response.quote;
    const quote = results.body;
    const author= results.author;

    return `${quote}<br> - ${author}`;
    }
