export function convertMillisToDate(millis) {
	var date = new Date(millis);
	var formatted = date.format("dd.mm.yyyy hh:MM:ss");
	return formatted;
};