import React from 'react';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    // You can add state or functions here for button clicks, etc.
     const navigate = useNavigate();
    const handleButtonClick = (buttonName) => {
        // console.log(`${buttonName} button clicked!`);
        // Add your routing or state change logic here
                navigate(buttonName);

    };

    const navbarStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#333',
        color: '#fff'
    };

    const logoStyle = {
        fontSize: '24px',
        fontWeight: 'bold'
    };

    const navButtonsStyle = {
        display: 'flex',
        gap: '10px'
    };

    const buttonStyle = {
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        backgroundColor: '#555',
        color: '#fff',
        transition: 'background-color 0.3s ease'
    };

    return (
        <nav style={navbarStyle}>
            <div style={logoStyle}>DOGGO</div>
            <div style={navButtonsStyle}>
                <button 
                    style={buttonStyle} 
                     onClick={() => handleButtonClick('Home')}
                >
                    Home
                </button>
                <button 
                    style={buttonStyle} 
                    onClick={() => handleButtonClick('UserList')}
                >
                    UsersList
                </button>
                <button 
                    style={buttonStyle} 
                    onClick={() => handleButtonClick('PetBookings')}
                >
                    AdaptionForms
                </button>
                <button 
                    style={buttonStyle} 
                    onClick={() => handleButtonClick('ServiceBookings')}
                >
                    Service Bookings
                </button>
                 <button 
                    style={buttonStyle} 
                     onClick={() => handleButtonClick('Feedbacks')}
                >
                    Feedbacks
                </button>
                {/*
                <button 
                    style={buttonStyle} 
                    // onClick={() => handleButtonClick('')}
                >
                    Contact
                </button> */}
            </div>
        </nav>
    );
};

export default Navbar;