//Parse the response and display the qotd on the index page
function parseQotdResponse(resolveValue) {
    debugger;
    const response = JSON.parse(resolveValue);
    const results =  response.quote;
    const quote = results.body;
    const author= results.author;
    const qotd = `${quote} -- ${author}`;
    outputQotd(qotd);
}


