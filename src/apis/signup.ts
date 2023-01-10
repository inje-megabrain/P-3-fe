import paxios from "./paxios";

export default function signup(nick: string, name: string, pw: string) {
	return new Promise((resolve) => {
		paxios
			.post("/signup", {
				nickname: nick,
				username: name,
				password: pw,
			})
			.then((v) => {
				resolve(v.data);
				console.log(v.data);
			})
			.catch((err) => {
				console.log("Error", err);
			});
	});
}
