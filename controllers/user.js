const userRouter = require('express').Router();
const fetch = require('node-fetch');
const base = 'https://dokken-api.wbagora.com';
require('dotenv').config();

headers = {
	'x-hydra-access-token': process.env.ACCESS_TOKEN,
	'x-hydra-api-key': process.env.API_KEY,
	'x-hydra-client-id': process.env.CLIENT_ID,
	'x-hydra-user-agent': process.env.USER_AGENT,
};

userRouter.get(`/:username`, async (req, res) => {
	const data = await fetch(
		base +
			`/profiles/search_queries/get-by-username/run?username=${req.params.username}&limit=25`,
		{
			headers,
		}
	);
	user = await data.json();
	info = user.results[0].result;
	res.json(info);
});

module.exports = userRouter;
