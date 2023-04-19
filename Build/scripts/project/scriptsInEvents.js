


const scriptsInEvents = {

	async Eventdataapi_Event1_Act6(runtime, localVars)
	{
		console.log(`Game source: ${runtime.globalVars.gameSource_Global}`);
	},

	async Eventdataapi_Event13_Act2(runtime, localVars)
	{
		// Get the input values from the objects
		const day = parseInt(runtime.objects.dayDateInput.getFirstInstance().text);
		const month = parseInt(runtime.globalVars.currentMonthNumber) - 1;
		const year = parseInt(runtime.objects.yearDateInput.getFirstInstance().text);
		
		console.log(day);
		console.log (month);
		console.log(year);
		
		// Create the input date object
		const inputDate = new Date(year, month, day);
		
		// Check if the input date is valid
		if (isNaN(inputDate.getTime())) {
		  console.error("Invalid date value. Please enter a valid date.");
		  runtime.globalVars.isValidDate = 0; // Set to 0 (false) if the date format is invalid
		  return;
		}else {
		  runtime.globalVars.isValidDate = 1; // Set to 1 (true) if the date format is valid
		}
	},

	async Eventdataapi_Event15_Act3(runtime, localVars)
	{
		// Get the input values from the objects
		const day = parseInt(runtime.objects.dayDateInput.getFirstInstance().text);
		const month = parseInt(runtime.globalVars.currentMonthNumber) - 1;
		const year = parseInt(runtime.objects.yearDateInput.getFirstInstance().text);
		
		// Create the input date object
		const inputDate = new Date(year, month, day);
		
		// Check if the input date is valid
		if (isNaN(inputDate.getTime())) {
		  console.error("Invalid date value. Please enter a valid date.");
		  return;
		}
		
		// Set the output date components to the desired values
		const outputYear = inputDate.getFullYear();
		const outputMonth = inputDate.getMonth() + 1;
		const outputDay = inputDate.getDate();
		const outputHour = 0;
		const outputMinute = 0;
		const outputSecond = 0;
		
		// Create a new date object with the output components
		const outputDate = new Date(outputYear, outputMonth - 1, outputDay, outputHour, outputMinute, outputSecond);
		
		// Helper function to pad single digit numbers with a leading zero
		function padZero(number) {
		  return number < 10 ? "0" + number : number;
		}
		
		// Format the output date
		const formattedDate = `${outputYear}-${padZero(outputMonth)}-${padZero(outputDay)} ${padZero(outputHour)}:${padZero(outputMinute)}:${padZero(outputSecond)}`;
		
		// Set the global variable to the formatted date string
		runtime.globalVars.formattedDate = formattedDate;
		
		// Log the formatted date to the console
		console.log(formattedDate);
	},

	async Eventdataapi_Event17_Act2(runtime, localVars)
	{
		console.log("Register api completed");
	},

	async Eventdataapi_Event28_Act1(runtime, localVars)
	{
		console.log("Automation Complete")
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

