import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import './ShowSummary.css';
const TicketBookingForm = ({ show }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const bookingDetails = {
      showName: show.name,
      userName: name,
      userEmail: email,
    }

    localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));

    console.log(`Booking ticket for ${show.name} with name ${name} and email ${email}`);
  };

  return (
    <div className="booking-details">
  <h3 className="display-4 text-white">Book Ticket for {show.name}</h3>
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="name" className='text-light'>Name:</label>
      <input type="text" className="form-control" id="name" value={name} onChange={(event) => setName(event.target.value)} />
    </div>
    <div className="form-group">
      <label htmlFor="email" className='text-light'>Email:</label>
      <input type="email" className="form-control" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
    </div>
    <button type="submit" className="btn btn-primary">Book Ticket</button>
  </form>
</div>
  );
};

export default TicketBookingForm;
