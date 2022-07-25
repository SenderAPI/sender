export default ({ to, from, next }) => {
  // Your custom if statement
  if (true) {
    next("/login")
    return false
  }
  next()
}