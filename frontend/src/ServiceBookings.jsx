
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css'; // Import external styles

const ServiceBookings = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('${process.env.REACT_APP_API_URL}/api/bookings');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/bookings/${id}`);
      setUsers(users.filter(user => user._id !== id));
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  if (loading) {
    return <div className="loading">Loading Users...</div>;
  }

  return (
    <div className="user-list-container">
      <h2>Service booking List</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>phone</th>
            <th>ServiceType</th>
            <th>location</th>
            <th>CreatedAt</th>
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
                <td>{user.ServiceType}</td>
                <td>{user.location}</td>
                <td>{user.createdAt}</td>
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

export default ServiceBookings;

