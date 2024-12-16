 //Form processing messages
//  const emailSubmitMessage = "<br>" + "<h5>Your message has been sent from" + email + ".</h5>" + "<br>";
 // const scheduleSubmitMessage = "<br>" + "<h5>Your consultation request has been submitted. Confirmation will be sent to" + email + ".</h5>" + "<br>";

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
