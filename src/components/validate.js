export function isEmailValid(val) {
  return typeof val === "string" ? val.includes("@") && val.includes(".") : "";
}

export function isEmpty(val) {
  return typeof val === "string" ? val.trim().length === 0 : "";
}

export function isNumber(val) {
  let phoneno = /^\d{10}$/;
  return typeof val === "string" ? (val.match(phoneno) ? true : false) : "";
}
