import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Bookings from '../Bookings/Bookings';
import { UserContext } from './../../App';
 
 

 

 
 
  
const Book = () => {
    
    const {bedType} = useParams();
     const[loggedInUser, setLoggedInUser] = useContext((UserContext))
        const handleBooking = () =>{

            const newBooking  = {...loggedInUser}
            fetch("http://localhost:5000/addBooking", {
                method:"POST",
                headers:{"Content-Type" : "application/json"},
                body: JSON.stringify(newBooking)

            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        }
      
    return (
        <div style={{textAlign: 'center'}}>
            <h1> Hello, {loggedInUser.name}!  Let's book a {bedType} Room.</h1>
            <p>Want a <Link to="/home">different room?</Link> </p>
            {/* <CustomDateRangePickerDay/> */}
          <button onClick={handleBooking} variant="contained" color="btn primary">Book Now  </button> 
          <Bookings/>
        </div>
    );
};

export default Book;
 