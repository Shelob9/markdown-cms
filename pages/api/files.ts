import { getSession } from "next-auth/client";
import { NextApiRequest, NextApiResponse } from "next";
import GitApi from "../../lib/GitApi";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const session = await getSession({ req });
	let git = GitApi({ owner: "shelob9", repo: "meadow-foam" }, "master");
	try {
		let files = await git.getFiles(undefined, "md");
		res.status(202).json({ files });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error });
	}
};
