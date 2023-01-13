import paxios from "./paxios";

export default function signup(nick: string, name: string, pw: string) {
	return new Promise((resolve) => {
		paxios
			.post("/signup", {
				nickname: nick,
				password: pw,
				username: name,
			})
			.then((v) => {
				resolve(v.data);
				console.log(v.data);
				console.log("Success", nick, name, pw);
			})
			.catch((err) => {
				console.log(nick, name, pw);
				console.log("Error", err);
			});
	});
}
