 //Form processing messages
//  const emailSubmitMessage = "<br>" + "<h5>Your message has been sent from" + email + ".</h5>" + "<br>";
 // const scheduleSubmitMessage = "<br>" + "<h5>Your consultation request has been submitted. Confirmation will be sent to" + email + ".</h5>" + "<br>";

function handleSubmitCall(event) {
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
