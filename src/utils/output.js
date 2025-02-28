<<<<<<< HEAD
export function output(   
    message = "",
    outputTag = "outputTag",
    shouldAppend = true
    ) { debugger;
        if (shouldAppend) window[outputTag].innerHTML += message;
        else window[outputTag].innerHTML = message;
}

=======
// export function output(
//     message = "",
//     outputTag = "outputTag",
//     shouldAppend = true
//     ) {
//         if (shouldAppend) window[outputTag].innerHTML += message;
//         else window[outputTag].innerHTML = message;
// }

export function output(
	message = "",
	outputTag = "outputTag",
	shouldAppend = true
) {
	const outputElement = document.getElementById(outputTag);
	if (shouldAppend) outputElement.innerHTML += message;
	else outputElement.innerHTML + message;
	console.log(`Output was generated for ${outputTag}.`);
}
>>>>>>> main
