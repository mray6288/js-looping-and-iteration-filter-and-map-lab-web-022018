function driversWithRevenueOver(drivers, revenue){
	return drivers.filter(function (driver) {return driver.revenue > revenue})
}

function driverNamesWithRevenueOver(drivers, revenue){
	return driversWithRevenueOver(drivers, revenue).map(function (driver) {return driver.name})
}

function exactMatch(drivers, attribute) {
	return drivers.filter(function (driver) {return driver[Object.keys(attribute)[0]] === Object.values(attribute)[0]})
}

function exactMatchToList(drivers, attribute) {
	return exactMatch(drivers, attribute).map(function (driver) {return driver.name})
}