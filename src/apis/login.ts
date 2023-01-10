import paxios from "./paxios";

export default function login(pw: string, name: string) {
	return new Promise((resolve) => {
		paxios
			.post("/login", { password: pw, username: name })
			.then((v) => {
				resolve(v.data);
				console.log(v.data);
				console.log("로그인 됐따");
			})
			.catch((err) => {
				console.log("Error", err);
			});
	});
}
