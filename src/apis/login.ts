import paxios from "./paxios";

export default function login(pw: string, name: string) {
	return new Promise((resolve) => {
		paxios
			.post("/login", { username: name, password: pw })
			.then((v) => {
				resolve(v);
				console.log(v.data);
				console.log("로그인 됐따");
			})
			.catch((err) => {
				console.log(pw, name);
				console.log("Error", err);
			});
	});
}
