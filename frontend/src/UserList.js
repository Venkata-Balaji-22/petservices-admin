// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';


// // const UserList = () => {
// //  const [users, setUsers] = useState([]); 
// //  const [loading, setLoading] = useState(true); 
// //  useEffect(() => {
// //   const fetchUsers = async () => {
// //    try {
// //     const response = await axios.get('api/users'); 
// //     setUsers(response.data); 
// //    } catch (error) {
// //     console.error('Error fetching users:', error);
// //    } finally {
// //     setLoading(false); 
// //    }
// //  };

// //   fetchUsers(); 
// //  }, []);

// //  if (loading) {
// //   return <div>Loading Users...</div>; 
// //  }

// // const handleDelete = async (id) => {
// //   try {
// //     // Send a DELETE request to your backend endpoint
// //     await axios.delete(`api/users/${id}`);
// //     // Update the state to remove the deleted user from the list
// //     setUsers(users.filter(user => user._id !== id));
// //   } catch (error) {
// //     console.error('Error deleting user:', error);
// //   }
// // };
// //  return (
  
// //   <div style={{ padding: "20px" }}>
// //    <h2>User List</h2>
// //         <taable
// //         style={{
// //            width: "auto",
// //            borderCollapse: "collapse",
// //           border: "1px solid #ddd",

// //         }}
// //              >
// //         <thead style={{border:'2px solid black', display:'flex'}}>
// //          <tr style={{ padding:'5px',background: "#f4f4f4" , height:'50px', }}>
// //          <th >ID</th>
// //          <th >Username</th>
// //          <th >Email</th>
// //          <th>password</th>
// //          <th>Delete</th>
// //          </tr>
// //         </thead>
// //         <tbody style={{border:'2px solid black', display:'flex', flexDirection:'column'}}>
// //          {users.length > 0 ? (
// //            // Map over the users array to generate table rows
// //            users.map((user) => (
// //             <tr key={user._id} >
// //                <td style={{padding:'10px', border:'2px solid black'}}>{user._id}</td>
// //                <td style={{padding:'10px', border:'2px solid black'}}>{user.username}</td>
// //                <td style={{padding:'10px', border:'2px solid black'}}>{user.email}</td>
// //                <td style={{padding:'10px', border:'2px solid black'}}>{user.password}</td>
// //                 <td style={{padding:'10px', border:'2px solid black'}}><button onClick={() => handleDelete(user._id)}>Delete</button></td>
// //             </tr>
// //              ))
// //           ) : (
// //           <tr>
// //             <td colSpan="4">No users found</td>
// //            </tr>
// //           )}
// //         </tbody>
// //        </taable>
// //      </div>
// //    );
// // };

// // export default UserList;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// // A UserList component that displays users in a responsive table and provides CRUD actions.
// const UserList = () => {
//  // State to hold the list of users, loading status, and the user being edited.
//  const [users, setUsers] = useState([]);
//  const [loading, setLoading] = useState(true);

//  // Fetches users from the backend when the component mounts.
//  useEffect(() => {
//   const fetchUsers = async () => {
//    try {
//     const response = await axios.get('api/users');
//     setUsers(response.data);
//    } catch (error) {
//     console.error('Error fetching users:', error);
//    } finally {
//     setLoading(false);
//    }
//  };

//   fetchUsers();
//  }, []);

//  // Handles the deletion of a user.
//  const handleDelete = async (id) => {
//   try {
//    await axios.delete(`api/users/${id}`);
//    // Updates the state by removing the deleted user from the list.
//    setUsers(users.filter(user => user._id !== id));
//   } catch (error) {
//    console.error('Error deleting user:', error);
//   }
//  };

//  // Displays a loading message while data is being fetched.
//  if (loading) {
//   return <div style={{ padding: '20px', textAlign: 'center' }}>Loading Users...</div>;
//  }

//  return (
//   <div style={{ padding: '20px', maxWidth: '100%', overflowX: 'auto' }}>
//    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>User List</h2>
//     <table
//      style={{
//       width: '100%',
//       borderCollapse: 'collapse',
//       border: '1px solid #ddd',
//       borderRadius: '8px',
//       overflow: 'hidden'
//      }}
//     >
//       <thead style={{ backgroundColor: '#f4f4f4' ,padding:"10px",}}>
//        <tr style={{ backgroundColor: '#f4f4f4' ,padding:"10px",}}>
//         <th>ID</th>
//         <th>Username</th>
//         <th>Email</th>
//         <th>Password</th>
//         <th>Actions</th>
//        </tr>
//       </thead>
//       <tbody style={{backgroundColor:'powderblue'}}>
//        {users.length > 0 ? (
//          users.map((user) => (
//           <tr key={user._id}>
//            <td style={{ padding: '10px'}}>{user._id}</td>
//            <td style={{ padding: '10px'}}>{user.username}</td>
//            <td style={{ padding: '10px'}}>{user.email}</td>
//            <td style={{ padding: '10px'}}>{user.password}</td>
//            <td style={{ padding: '10px'}}>
//             <button onClick={() => handleDelete(user._id)} style={{ padding: '5px 10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//              Delete
//             </button>
//            </td>
//           </tr>
//          ))
//        ) : (
//         <tr>
//           <td colSpan="5" style={{ textAlign: 'center', padding: '20px' }}>
//            No users found
//           </td>
//        </tr>
//        )}
//       </tbody>
//    </table>
//  </div>
//  );
// };

// export default UserList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css'; // Import external styles

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://petservices-admin-backend.onrender.com/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://petservices-admin-backend.onrender.com/api/users/${id}`);
      setUsers(users.filter(user => user._id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  if (loading) {
    return <div className="loading">Loading Users...</div>;
  }

  return (
    <div className="user-list-container">
      <h2>User List</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="no-users">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;

