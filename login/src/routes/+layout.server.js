// import { isLoggedIn } from '../store/store';

export const load = ({ locals }) => {
	return {
		isLoggedIn: locals.isLoggedIn
	};
};
