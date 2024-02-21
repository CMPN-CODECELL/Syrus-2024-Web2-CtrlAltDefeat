

// import React, { useState, useEffect } from 'react';
// import { db, app } from '../firebase-config';

// const ThoughtJournal = ({ userId }) => {
//   const [journals, setThoughts] = useState([]);
//   const [newThought, setNewThought] = useState({
//     title: '',
//     content: '',
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const thoughtsCollection = await db
//           .collection('journals')
//           .where('userId', '==', userId)
//           .orderBy('timestamp', 'desc')
//           .get();

//         const thoughtsData = thoughtsCollection.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));

//         setThoughts(thoughtsData);
//       } catch (error) {
//         console.error('Error fetching thoughts:', error);
//       }
//     };

//     fetchData();
//   }, [userId]);

//   const addThought = async () => {
//     try {
//       await db.collection('journals').add({
//         title: newThought.title,
//         content: newThought.content,
//         timestamp: app.firestore.FieldValue.serverTimestamp(),
//         userId: userId,
//       });
//       console.log('Thought added successfully');
//       setNewThought({
//         title: '',
//         content: '',
//       });
//     } catch (error) {
//       console.error('Error adding thought:', error);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto mt-8 p-4">
//       <h2 className="text-3xl font-semibold mb-4">Your Thought Journal</h2>
//       <ul className="space-y-4">
//         {journals.map((thought) => (
//           <li key={thought.id} className="border p-4 rounded shadow-md">
//             <h3 className="text-xl font-semibold mb-2">{thought.title}</h3>
//             <p className="text-gray-700">{thought.content}</p>
//             <p className="text-gray-500 mt-2">{thought.timestamp.toDate().toString()}</p>
//           </li>
//         ))}
//       </ul>
//       <div className="mt-6">
//         <form onSubmit={addThought} className="w-full p-4 flex flex-col">
//           <div className="mb-4">
//             <label htmlFor="title" className="text-lg font-semibold text-gray-800 block mb-2">
//               Title
//             </label>
//             <input
//               type="text"
//               id="title"
//               className="w-full p-4 border rounded"
//               value={newThought.title}
//               onChange={(e) => setNewThought({ ...newThought, title: e.target.value })}
//               placeholder="Enter your thought title..."
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="content" className="text-lg font-semibold text-gray-800 block mb-2">
//               Content
//             </label>
//             <textarea
//               id="content"
//               className="w-full p-4 border rounded"
//               value={newThought.content}
//               onChange={(e) => setNewThought({ ...newThought, content: e.target.value })}
//               placeholder="Write your thought..."
//             />
//           </div>
//           <button
//             type="submit"
//             className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 focus:outline-none"
//           >
//             Add Thought
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ThoughtJournal;

import React, { useState, useEffect } from 'react';
import { db, app } from '../firebase-config';

const ThoughtJournal = ({ userId }) => {
  const [journals, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState({
    title: '',
    content: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      console.log('Fetching thoughts for user:', userId);

      try {
        const thoughtsCollection = await db
          .collection('journals')
          .where('userId', '==', userId)
          .orderBy('timestamp', 'desc')
          .get();

        const thoughtsData = thoughtsCollection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setThoughts(thoughtsData);
      } catch (error) {
        console.error('Error fetching thoughts:', error);
      }
    };

    fetchData();
  }, [userId]);

  const addThought = async (e) => {
    e.preventDefault();

    console.log('Before adding thought:', newThought);

    try {
      await db.collection('journals').add({
        title: newThought.title,
        content: newThought.content,
        timestamp: app.firestore.FieldValue.serverTimestamp(),
        userId: userId,
      });

      console.log('Thought added successfully');
      setNewThought({
        title: '',
        content: '',
      });
    } catch (error) {
      console.error('Error adding thought:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4">
      <h2 className="text-3xl font-semibold mb-4">Your Thought Journal</h2>
      <ul className="space-y-4">
        {journals.map((thought) => (
          <li key={thought.id} className="border p-4 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-2">{thought.title}</h3>
            <p className="text-gray-700">{thought.content}</p>
            <p className="text-gray-500 mt-2">{thought.timestamp.toDate().toString()}</p>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <form onSubmit={addThought} className="w-full p-4 flex flex-col">
          <div className="mb-4">
            <label htmlFor="title" className="text-lg font-semibold text-gray-800 block mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full p-4 border rounded"
              value={newThought.title}
              onChange={(e) => setNewThought({ ...newThought, title: e.target.value })}
              placeholder="Enter your thought title..."
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="text-lg font-semibold text-gray-800 block mb-2">
              Content
            </label>
            <textarea
              id="content"
              className="w-full p-4 border rounded"
              value={newThought.content}
              onChange={(e) => setNewThought({ ...newThought, content: e.target.value })}
              placeholder="Write your thought..."
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 focus:outline-none"
          >
            Add Thought
          </button>
        </form>
      </div>
    </div>
  );
};

export default ThoughtJournal;
