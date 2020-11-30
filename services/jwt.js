const jwt = require("jsonwebtoken");

const  JWT_SECRET  = require("./../Keys/jwt/auth.config");
const secret=JWT_SECRET.secret;

//  
const algorithm = "RS256";

module.exports = class JWT {
	static signin(payload, expiresIn) {
		return new Promise((resolve, reject) => {
			jwt.sign(
				payload,
				secret,
				{ expiresIn: expiresIn, algorithm: algorithm },
				(err, token) => {
					if (err) {
						console.log(err)
						reject(err);
					} else {
						resolve(token);
					}
				}
			);
		});
	}

	static verify(token) {
		return new Promise((resolve, reject) => {
			jwt.verify(token,secret, { algorithm: [algorithm] }, (err, decoded) => {
				if (err) {
					reject(err);
				} else {
					resolve(decoded);
				}
			});
		});
	}

	static decode(token) {
		return jwt.decode(token, { complete: true });
	}
};

//  () => {
//     return new JWT();
// }