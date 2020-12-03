import darkTheme from "./darkTheme";
import lightTheme from "./lightTheme";

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
      break;
    case "light":
    default:
      refresh(lightTheme);
      break;
  }
}
