export function checkUserPass (username, password) {
  let userReg = /^\w{4,10}$/g
  let passReg = /^\w{6,20}$/g
  if (!username.match(userReg) || !password.match(passReg)) {
    return false
  } else {
    return true
  }
}
