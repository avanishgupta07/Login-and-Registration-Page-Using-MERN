import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './UserTable.css';  // Import the custom CSS file

function UserTable() {
  const navigate = useNavigate();
  const users = [
    { name: 'Michael Holz', dateCreated: '04/10/2013', role: 'Admin', status: 'Active', img: 'path_to_image_1' },
    { name: 'Paula Wilson', dateCreated: '05/08/2014', role: 'Publisher', status: 'Active', img: 'path_to_image_2' },
    { name: 'Antonio Moreno', dateCreated: '11/05/2015', role: 'Publisher', status: 'Suspended', img: 'path_to_image_3' },
    { name: 'Mary Saveley', dateCreated: '06/09/2016', role: 'Reviewer', status: 'Active', img: 'path_to_image_4' },
    { name: 'Martin Sommer', dateCreated: '12/08/2017', role: 'Moderator', status: 'Inactive', img: 'path_to_image_5' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const getStatusClass = (status) => {
    if (status === 'Active') return 'status-active';
    if (status === 'Suspended') return 'status-suspended';
    if (status === 'Inactive') return 'status-inactive';
  };

  return (
    <div className="user-table-container">
      <h2 className="mb-4">User Table</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Date Created</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <img src={user.img} alt={user.name} className="user-img" />
                <span className="user-name">{user.name}</span>
              </td>
              <td>{user.dateCreated}</td>
              <td>{user.role}</td>
              <td>
                <span className={`status-dot ${getStatusClass(user.status)}`}></span>
                {user.status}
              </td>
              <td>
                <span className="action-icon edit-icon">&#9881;</span>
                <span className="action-icon delete-icon">&#10060;</span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="secondary" onClick={handleLogout}>Logout</Button>
    </div>
  );
}

export default UserTable;
