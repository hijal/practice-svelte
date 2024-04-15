export const handle = async ({ event, resolve }) => {
	// console.log(window);
	// const { cookies } = event;
	// const sessionId = cookies.get('session');

	// if (sessionId) {
	// 	await attachUserToRequestEvent(sessionId, event);
	// }

	// if (!event.locals.user) cookies.delete('session', { path: '/' });

	const { locals } = event;

	console.log(locals);

	const response = await resolve(event);

	return response;
};

// async function attachUserToRequestEvent(sessionId, event) {
// 	const sql = `SELECT * FROM get_session($1);`
// 	const { rows } = await query(sql, [sessionId])
// 	if (rows?.length > 0) {
// 		event.locals.user = rows[0].get_session
// 	}
// }
