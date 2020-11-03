import { getSession } from "next-auth/client";
import { NextApiRequest, NextApiResponse } from "next";
import GitApi from "../../lib/GitApi";

//Says Hi to Roy, or the logged in user.
export default async (req: NextApiRequest, res: NextApiResponse) => {
	const session = await getSession({ req });

	let repo;
	let branch;
	let filePath;
	let content;
	let git = GitApi(repo, branch);
	if ("GET" === req.method) {
		try {
			let r = await git.getFile(filePath);
			res.json({ r });
			res.setHeader("Content-Type", "application/json");
			res.setHeader("Cache-Control", "s-maxage=17");
			return res;
		} catch (error) {
			return res.status(500).json({ error });
		}
	} else if (["PUT", "POST"].includes(req.method)) {
		try {
			let r = await git.saveFile(filePath, content, `Save ${filePath}`);
			res.json({ r });

			return res;
		} catch (error) {
			return res.status(201).json({ error });
		}
	} else if ("DELETE" === req.method) {
	} else {
		throw new Error();
	}
	res.status(200).json({ hi: session ? session.user.name : "Roy" });
};
