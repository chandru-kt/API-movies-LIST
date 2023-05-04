import React, { useState } from 'react';
import TicketBookingForm from './TicketBookingForm';
import './ShowSummary.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const ShowSummary = ({ show, onBookClick }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [bookingDetails, setBookingDetails] = useState({});
    const [showBookingForm, setShowBookingForm] = useState(false);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (typeof onBookClick === 'function') {
        const booking = {
          name,
          email,
          show: show.name,
          summary: show.summary,
          image: show.image.medium
        };
        onBookClick(booking);
      }
    };
  
    return (
        <div className="bg-dark py-5">
        <div className="container show-summary">
          <h1 className="display-4 text-white">{show.name}</h1>
          {show.image && <img src={show.image.medium} alt={show.name} className="img-fluid" />}
          <h2 className="mt-4 text-white">SUMMARY</h2>
          <p className="lead text-white">{show.summary}</p>
          {showBookingForm ? (
            <TicketBookingForm show={show} bookingDetails={bookingDetails} />
          ) : (
            <button className="btn btn-primary mt-4" onClick={() => setShowBookingForm(true)}>Book Tickets</button>
          )}
        </div>
      </div>
      

      
    );
  };
  
  export default ShowSummary;
  