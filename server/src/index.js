import 'babel-polyfill'; // eslint-disable-line import/no-extraneous-dependencies

import app from './app';
import clientApp from './clientApp';

const CLIENT_PORT = 3000;
const SERVER_PORT = 5000;

(async () => {
	await app.listen(SERVER_PORT);
	console.log(`GraphQL-Pokemon started on http://localhost:${SERVER_PORT}/`);

	await clientApp.listen(CLIENT_PORT);
	console.log(`GraphQL-Pokemon started on http://localhost:${CLIENT_PORT}/`);
})();
