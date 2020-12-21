import themeA from "./themeA";
import themeB from "./themeB";

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
    case "a":
      refresh(themeA);
      localStorage.setItem("theme", "a");
      break;
    case "b":
    default:
      localStorage.setItem("theme", "b");
      refresh(themeB);
      break;
  }
}
