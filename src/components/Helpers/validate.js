export function isEmailValid(val) {
  return new RegExp(
    "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
  ).test(val);
}

export function isEmpty(val) {
  return val.trim().length === 0;
}

export function isPhoneNumber(val) {
  let phoneno = /^\d{10}$/;
  return (val.test(phoneno));
}
