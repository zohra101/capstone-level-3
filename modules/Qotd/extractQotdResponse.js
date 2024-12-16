//Extract the response and parse it
function extractResponse(resolveValue) {
    debugger;
    const promise = resolveValue.text();
    promise.then(parseQotdResponse);
}




