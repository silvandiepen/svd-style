var fs = require("fs");

function getSize(file) {
	var stats = fs.statSync(file);
	if (stats.size > 0) {
		throw `Extend file is not empty | filesize: ${stats.size}`;
	}
}

try {
	getSize("test/css/ext.css");
} catch (e) {
	throw new Error(e);
}
