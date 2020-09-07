let required = (propertyType) => {
  return v => v && v.length > 0 || `You must input a ${propertyType}`
}

let minLength = (propertyType, minLength) => {
  return v => v && v.length >= minLength || `${propertyType} must be at least ${minLength}`
}

let maxLength = (propertyType, maxLength) => {
  return v => v && v.length <= maxLength || `${propertyType} must be less than ${maxLength}`
}

let emailFormat = () => {
  let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return v => v && regex.test(v) || "Must be valid email address"
}
export default {
  required,
  maxLength,
  minLength,
  emailFormat
}