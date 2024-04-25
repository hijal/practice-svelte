export const match = (value: string) => {
	if (/^\d+$/.test(value)) {
		return true;
	}
	return false;
};
