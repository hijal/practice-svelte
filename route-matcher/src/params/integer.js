export const match = (value) => {
	if (/^\d+$/.test(value)) {
		return true;
	}
	return false;
};
