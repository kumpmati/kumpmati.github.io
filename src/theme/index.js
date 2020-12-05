import darkTheme from "./darkTheme";
import lightTheme from "./lightTheme";

export function load(fallback) {
	return localStorage.getItem("theme") || fallback;
}

const refresh = theme => {
	let values = [];
	for (let [key, value] of theme) {
		values.push(`--${key}:${value}`);
	}
	document.documentElement.style.cssText = values.join(";");
};

export function set(name) {
	switch (name) {
		case "dark":
			refresh(darkTheme);
			localStorage.setItem("theme", "dark");
			break;
		case "light":
		default:
			localStorage.setItem("theme", "light");
			refresh(lightTheme);
			break;
	}
}
