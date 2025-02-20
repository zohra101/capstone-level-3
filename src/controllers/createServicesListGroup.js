//hard-coded per Rolazar because the item chaining and the class imports are not working well in React
import React from "react";


export function CreateServicesListGroup() {
	const services = [
		[
			"Content Development",
			"Information Design",
			"Editing and Proofreading",
			"Technical Marketing",
			"Technical Writing",
			"User Interface (UI) and User Experience (UX) Design",
		],
		[
			"Developing content for websites, intranets, and knowledge bases, ensuring that information is accurate, accessible, and user-friendly.",
			"Reviewing technical documents for clarity, consistency, grammar, and accuracy, ensuring they meet organizational standards and guidelines.",
			"Structuring and organizing information to make it easy to understand and navigate, often involving the use of charts, diagrams, mock-ups, screenshots, wire frames and other visual aids.",
			"Producing technical marketing materials such as case studies, technical brochures, and product specifications that help explain the benefits and features of technical products to potential customers.",
			"Creating user manuals, installation guides, help files, white papers, and other documentation that explains how to use products or services.",
			"Working with design and development teams to create interfaces that are intuitive and easy to use, and conducting usability testing to improve user experiences.",
		],
	];

	const servicesListGroup = new ListGroup();
	let index = services[0].length;

	for (index = 0; index < services[0].length; index++) {
		const serviceName = services[0][index];
		const serviceDescription = services[1][index];
		const listGroupItem = new ListGroupItem(
			`${serviceName}: ${serviceDescription}`
		);
		servicesListGroup.addItem(listGroupItem);
	}

	// output(createServicesListGroup, "createServicesistGroupTag");

	output("createServicesistGroupTag");

};

	//createServicesListGroup();