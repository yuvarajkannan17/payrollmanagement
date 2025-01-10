// import React, { useState } from 'react';
// import '../styles/Login.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ email, password });
//   };

//   return (
//     <div className="login-container">
//       <h4>Login to Your Account</h4>
//       <form className="login-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             placeholder='Enter Email'
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             placeholder='Enter Password'
//           />
//         </div>
//         <button type="submit" className="submit-btn">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
