import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bglogo from '../assets/contactusbg.jpg';

const ContactUsComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
  
    const formSpreeEndpoint = 'https://formspree.io/f/xbjnovrp'; 
  
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
  
    try {
      const response = await fetch(formSpreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });
  
      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Failed to submit the form. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred while submitting the form.', error);
    } finally {
      setSubmitting(false);
    }
  };
  

  const divStyle = {
    backgroundImage: `url(${bglogo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div style={divStyle} className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl md:text-5xl font-bold px-4 font-protest-revolution text-center">
          Mindfit
        </h2>
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Contact Us</h2>
        {submitted ? (
          <p className="text-green-500 text-center">Thank you for your message! We'll be in touch.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 rounded border border-gray-300"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 rounded border border-gray-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                className="w-full p-3 rounded border border-gray-300"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-yellow-500 rounded text-white font-semibold"
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Send Message'}
            </button>
          </form>
        )}
        <div className="mt-4 text-center">
          <Link to="/" className="text-yellow-500">
            Go back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUsComponent;

// import React, { useState } from 'react';
// import axios from 'axios';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('https://formspree.io/psoham104@gmail.com', formData, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.status === 200) {
//         alert('Message sent successfully!');
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           message: '',
//         });
//       }
//     } catch (error) {
//       console.error('Error sending message:', error);
//       alert('Error sending message. Please try again later.');
//     }
//   };

//   return (
//     <div>
//       <h2>Contact Us</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//         </label>
//         <br />
//         <label>
//           Phone:
//           <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
//         </label>
//         <br />
//         <label>
//           Message:
//           <textarea name="message" value={formData.message} onChange={handleChange} required />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;