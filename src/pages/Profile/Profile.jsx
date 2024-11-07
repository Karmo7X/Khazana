import React from 'react';
const Profile = () => {
  return (
    <div className="container my-5">
      <h1 className="text-muted fs-3">Account Settings</h1>
      
      <div className="card border-0 mt-3 mx-auto p-4 shadow profile-card">
        
        
        <h2 className="text-center mb-4">My Account</h2>
        
        <div className="d-flex justify-content-center mb-3">
          <img
            src="https://via.placeholder.com/150" // Replace with actual profile image URL
            alt="Profile"
            className="rounded-circle profile-image"
          />
        </div>
        
        <h3 className="text-center">Ahmed Mohamed</h3>
        
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" value="Ahmed Mohamed" readOnly />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <div className="input-group">
            <span className="input-group-text">
              <img
                src="https://via.placeholder.com/24" // Replace with country flag icon URL
                alt="Country Flag"
                className="flag-icon"
              />
            </span>
            <input type="text" className="form-control" value="05022336544" readOnly />
          </div>
        </div>
        
        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input type="text" className="form-control" value="01/09/1992" readOnly />
        </div>
        
        <div className="mb-3">
          <label className="form-label">City</label>
          <input type="text" className="form-control" value="Jeddah" readOnly />
        </div>
        
        <button className="btn theme-btn rounded-0 w-100 mt-4">Edit Profile</button>
      </div>
    </div>
  );
};



export default Profile;
