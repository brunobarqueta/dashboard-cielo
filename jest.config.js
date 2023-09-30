export default {
	type: "module",
	testEnvironment: "node",
	extensionsToTreatAsEsm: [".js", ".mjs"],
	transform: {
		"^.+\\.m?js$": "babel-jest",
	},
	moduleNameMapper: {
		"\\.(css|less|scss|sass)$": "identity-obj-proxy",
	},
};
