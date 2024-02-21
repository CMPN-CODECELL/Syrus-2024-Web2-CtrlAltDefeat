// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { auth } from '../firebase-config';
// import { useNavigate } from 'react-router-dom';
// import bglogo from '../assets/loginpagebg.png';
// import { collection, addDoc } from 'firebase/firestore';
// import { db } from '../firebase-config';

// const SignupComponent = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const history = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await auth.createUserWithEmailAndPassword(email, password);

//       const user = userCredential.user;
//       await addDoc(collection(db, 'users'), {
//         email: user.email,
//         uid: user.uid,
//       });
  
//       history.push('/dashboard');
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const divStyle = {
//     backgroundImage: `url(${bglogo})`, 
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//   };

//   return (
//     <div style={divStyle} className="min-h-screen flex items-center justify-left">
//       <div className="bg-white p-8 rounded shadow-md w-96 ml-48">
//         {/* <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
//           Mindfit: Campus Connect - Sign Up
//         </h2> */}
//         <h2 className="text-2xl md:text-5xl font-bold px-4 font-protest-revolution text-center">Mindfit</h2>

//         <form>
//           <div className="mb-4">
//             <label htmlFor="email" className="text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="w-full p-2 border-b-2 border-gray-400 focus:outline-none focus:border-yellow-500"
//               placeholder="Enter your email"
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="w-full p-2 border-b-2 border-gray-400 focus:outline-none focus:border-yellow-500"
//               placeholder="Enter your password"
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           {error && <p className="text-red-500 text-center">{error}</p>}
//           <button
//             type="button"
//             className="w-full bg-yellow-400 text-white p-2 rounded-md"
//             onClick={handleSignup}
//           >
//             Sign Up
//           </button>
//         </form>
//         <div className="mt-4 text-center">
//           <p className="text-gray-600">
//             Already have an account?{' '}
//             <Link to="/login" className="text-yellow-500">
//               Login here
//             </Link>
//           </p>
//         </div>
//         <Link to="/">
//         <button
//             type="button"
//             className="w-full bg-orange-400 text-white p-2 mt-4 rounded-md"
//           >
//             Home
//         </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default SignupComponent;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { auth, db } from '../firebase-config';
// import { useNavigate } from 'react-router-dom';
// import bglogo from '../assets/loginpagebg.png';
// import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

// const SignupComponent = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const history = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const userExistsQuery = query(collection(db, 'users'), where('email', '==', email));
//       const userExistsSnapshot = await getDocs(userExistsQuery);

//       if (userExistsSnapshot.size > 0) {
//         setError('User with this email already exists. Please log in.');
//         setLoading(false);
//         return;
//       }

//       const userCredential = await auth.createUserWithEmailAndPassword(email, password);
//       const user = userCredential.user;

//       await addDoc(collection(db, 'users'), {
//         email: user.email,
//         uid: user.uid,
//       });

//       history('/dashboard');
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const divStyle = {
//     backgroundImage: `url(${bglogo})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//   };

//   return (
//     <div style={divStyle} className="min-h-screen flex items-center justify-left">
//       <div className="bg-white p-8 rounded shadow-md w-96 ml-48">
//         <h2 className="text-2xl md:text-5xl font-bold px-4 font-protest-revolution text-center">Mindfit</h2>

//         <form>
//           <div className="mb-4">
//             <label htmlFor="email" className="text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="w-full p-2 border-b-2 border-gray-400 focus:outline-none focus:border-yellow-500"
//               placeholder="Enter your email"
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="w-full p-2 border-b-2 border-gray-400 focus:outline-none focus:border-yellow-500"
//               placeholder="Enter your password"
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           {error && <p className="text-red-500 text-center">{error}</p>}
//           <button
//             type="button"
//             className="w-full bg-yellow-400 text-white p-2 rounded-md"
//             onClick={handleSignup}
//             disabled={loading}
//           >
//             {loading ? 'Signing Up...' : 'Sign Up'}
//           </button>
//         </form>
//         <div className="mt-4 text-center">
//           <p className="text-gray-600">
//             Already have an account?{' '}
//             <Link to="/login" className="text-yellow-500">
//               Login here
//             </Link>
//           </p>
//         </div>
//         <Link to="/">
//           <button
//             type="button"
//             className="w-full bg-orange-400 text-white p-2 mt-4 rounded-md"
//           >
//             Home
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default SignupComponent;

// SignupComponent.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import bglogo from '../assets/loginpagebg.png';

const SignupComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userExistsQuery = await db.collection('users').where('email', '==', email).get();

      if (!userExistsQuery.empty) {
        setError('User with this email already exists. Please log in.');
        setLoading(false);
        return;
      }

      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      await db.collection('users').add({
        email: user.email,
        uid: user.uid,
      });

      history('/dashboard');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const divStyle = {
    backgroundImage: `url(${bglogo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div style={divStyle} className="min-h-screen flex items-center justify-start bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-96 ml-48">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Mindfit</h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border-b-2 border-gray-400 focus:outline-none focus:border-yellow-500"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border-b-2 border-gray-400 focus:outline-none focus:border-yellow-500"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <button
            type="button"
            className="w-full bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 focus:outline-none"
            onClick={handleSignup}
            disabled={loading}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
        <div className="mt-4 text-center text-gray-600">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="text-yellow-500">
              Login here
            </Link>
          </p>
        </div>
        <div className="mt-4">
          <Link to="/">
            <button
              type="button"
              className="w-full bg-orange-400 text-white p-2 rounded-md hover:bg-orange-500 focus:outline-none"
            >
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;

