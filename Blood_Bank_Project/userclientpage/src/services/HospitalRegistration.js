import React, { useState, useEffect } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';


function HospitalRegistration() {
    
    const [formData, setFormData] = useState({
        Blood_Type: '',
        Hospital_Reciept: '',
        Age: '',
        Gender: '',
    
       
    });

    const [hospitalId, setHospitalId] = useState('');

    useEffect(() => {
      // Parse the query parameters from the URL
      const queryParams = new URLSearchParams(window.location.search);
      const id = queryParams.get('hospitalId');
  
      // Set the hospital ID state
      setHospitalId(id);
    }, []);
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        axios.post('http://127.0.0.1:9898/doners', formData)
            .then(response => {
                // Handle successful registration
                console.log('Registration successful:', response.data);
                history.push('/registration-confirmation');
            })
            .catch(error => {
                // Handle registration error
                console.error('Registration failed:', error);
            });
    };

    const handleCancel = () => {
        // Logic to handle cancellation, if needed
        console.log('Registration cancelled');
    };

    
    return (
        
            <div className="container d-flex justify-content-center align-items-center vh-100" >
        
            <div className="card p-4" style={{ maxWidth: '450px' }}>

            <h1 className="text-center mb-4"><strong>Hospital Registration Form</strong></h1> 

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="Blood_Type" className="form-label">Blood Type</label>
                        <input type="text" className="form-control" id="Blood_Type" name="Blood_Type" value={formData.Blood_Type} onChange={handleChange} placeholder="Enter blood type" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Hospital_Reciept" className="form-label">Hospital Receipt</label>
                        <input type="text" className="form-control" id="Hospital_Reciept" name="Hospital_Reciept" value={formData.Hospital_Reciept} onChange={handleChange} placeholder="Enter hospital receipt" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Age" className="form-label">Age</label>
                        <input type="number" className="form-control" id="Age" name="Age" value={formData.Age} onChange={handleChange} placeholder="Enter age" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Gender" className="form-label">Gender</label>
                        <input type="text" className="form-control" id="Gender" name="Gender" value={formData.Gender} onChange={handleChange} placeholder="Enter gender" />
                    </div>
                    
                   
                    <div className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Register</button>
                        <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default HospitalRegistration;
