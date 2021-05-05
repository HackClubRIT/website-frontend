export function isEmailValid(val) {
  return typeof val === "string"? val.includes("@") && val.includes(".") : "";
}
