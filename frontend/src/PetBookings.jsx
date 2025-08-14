
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css'; // Import external styles

const PetBookings = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('${process.env.REACT_APP_API_URL}/api/adoptionforms');
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
      await axios.delete(`/api/adoptionforms/${id}`);
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
            <th>phone</th>
            <th>petName</th>
            <th>address</th>
            <th>reason</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.petName}</td>
                <td>{user.address}</td>
                <td>{user.reason}</td>
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

export default PetBookings;

