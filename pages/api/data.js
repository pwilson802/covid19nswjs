import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();
const { staticData } = serverRuntimeConfig;

function handler(req, res) {
    res.status(200).json(staticData)
//   res.json(staticData);
};

export default handler;