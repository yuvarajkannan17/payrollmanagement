import * as yup from 'yup'
const loginSchema=yup.object().shape({
email:yup.string().email("Enter Valid Email Address").required("Email is required"),
password:yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,"Password must be 8+ characters with uppercase, lowercase, a number, and a special character.").required("Password is required")

})

export default loginSchema;