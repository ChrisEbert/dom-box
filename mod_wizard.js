const wizard = mod => {
	return (...args) => {
		return {
			mod,
			args
		};
	};
};

export default wizard;
