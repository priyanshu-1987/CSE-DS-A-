function makeTea() {
	console.log("Starting to make tea...");

	setTimeout(() => {
		console.log("1. Water is boiling");

		setTimeout(() => {
			console.log("2. Added tea leaves");

			setTimeout(() => {
				console.log("3. Tea is ready!");
			}, 1000);
		}, 1000);
	}, 1000);
}

makeTea();