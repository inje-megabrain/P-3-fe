import paxios from "./paxios";

export default function login() {
	return new Promise((resolve) => {
		paxios
			.post("/login", { password: "123123", username: "nrdd" })
			.then((v) => {
				resolve(v.data);
				console.log(v.data);
			})
			.catch((err) => {
				console.log("Error", err);
			});
	});
}
