 //Form processing messages
//  const emailSubmitMessage = "<br>" + "<h5>Your message has been sent from" + email + ".</h5>" + "<br>";
 // const scheduleSubmitMessage = "<br>" + "<h5>Your consultation request has been submitted. Confirmation will be sent to" + email + ".</h5>" + "<br>";


 //OVERIDES BROWSER DEFAULT BEHAVIOR OF RESETTING THE FORM
//  function processForm(event) { 
//     const form = event.target;
//     const input = form[0];
//     const value = input.value;
//     output(displayMessage);
//  }

//Submit handler
function emailHandleSubmit(event) {
    debugger;
    event.preventDefault();
    const inputs = event.target;
    const emailInput = inputs[3];
    const email = emailInput.value;
    window.spinner.innerHTML = "<div class='spinner-border text-primary'></div>";
    output1("<br>" + "<h5>Submitting for " + email + "...</h5><br>");
    const promise = new Promise(emailServerResponse);
    promise.then(emailParseResponse).then(function hideSpinner(resolveValue) {
        window.spinner.innerHTML="";
        return resolveValue;
    })
}

function emailParseResponse(resolveValue) {
    const response = JSON.parse(resolveValue);
    const message = response.message;
    output1(message);
}

function emailServerResponse(resolve) {
    setTimeout(activateResolve, 2000);
    function activateResolve() {
        const response={
            message:"<h5>Your message was sent successfully.</h5>"
        }
        const finalResponse = JSON.stringify(response);
        resolve(finalResponse);
    }
} 

function callHandleSubmit(event) {
    debugger;
    event.preventDefault();
    const inputs = event.target;
    const emailInput = inputs[3];
    const email = emailInput.value;
    window.spinner.innerHTML = "<div class='spinner-border text-primary'></div>";
    output2("<br>" + "<h5>Submitting scheduling request for " + email + "...</h5><br>");
    const promise = new Promise(callServerResponse);
    promise.then(callParseResponse).then(function hideSpinner(resolveValue2) {
        window.spinner.innerHTML="";
        return resolveValue2;
    })
} 

function callParseResponse(resolveValue2) {
    const response = JSON.parse(resolveValue2);
    const message = response.message;
    output2(message);
}

function callServerResponse(resolve) {
    setTimeout(activateResolve, 2000);
    function activateResolve() {
        const response={
            message:"<h5>Your consultation scheduling request was sent successfully.</h5>"
        }
        const finalResponse = JSON.stringify(response);
        resolve(finalResponse);
    }
}   


