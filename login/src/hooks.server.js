export const handle = async ({ event, resolve }) => {
	const { locals } = event;

	if (locals.isLoggedIn) {
		event.locals.isLoggedIn = true;
	} else {
		event.locals.isLoggedIn = false;
	}

	const response = await resolve(event);

	return response;
};
