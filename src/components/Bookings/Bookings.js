import React, {useState, useEffect, useContext} from 'react';
import { UserContext } from './../../App';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);


    const[loggedInUser, setLoggedInUser] = useContext((UserContext))
    
    useEffect(() =>{
        fetch("http://localhost:5000/Bookings?email=" + loggedInUser.email, {
            method: "GET",
            headers: {"Content-Type": "application/json",
            authorization: `Bearer ${sessionStorage.getItem("token")}`}
        })
        .then(response => response.json())
        .then(data => 
            setBookings(data))
    },[])
    
    return (
        <div>
          <h3>You have {bookings.length} bookings</h3>

        { 
        
                bookings.map(book => <li>  {book.name}  </li>)

        }


        </div>
    );
};

export default Bookings;