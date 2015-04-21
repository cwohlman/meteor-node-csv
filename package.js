Package.describe({
	summary: "node-csv npm packaged for meteor.",
	version: "0.4.1_1",
	git: "https://github.com/cwohlman/meteor-node-csv.git",
	name: "cwohlman:node-csv-npm"
});

Package.on_use(function (api) {
	if (api.versionsFrom) {
		api.versionsFrom("METEOR@1.0");
	}

	api.addFiles(["lib/node-csv.js"], "server");

	if (typeof api.export !== "undefined") {
		api.export("CSV", "server");
	}
});

Npm.depends({"csv":"0.4.1"});
