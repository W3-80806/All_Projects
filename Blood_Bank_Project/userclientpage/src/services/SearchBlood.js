import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';


function SearchBlood() {
    
    const [formData, setFormData] = useState({
        Hospital_Name: '',
        Blood_Type: ''

    });

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
        console.log(formData.Blood_Type);
        console.log(formData.Hospital_Name);
        const queryString = new URLSearchParams(formData).toString();
        const nextPageUrl = `/donerlist?${queryString}`;
        window.location.href = nextPageUrl;
        //history.push('/donerlist', {Hospital_Name:`${formData.Hospital_Name}`, Blood_Type: `${formData.Blood_Type}` });
    };

    const handleCancel = () => {
        // Logic to handle cancellation, if needed
        console.log('Registration cancelled');
    };

    
    return (
        
            <div className="container d-flex justify-content-center align-items-center vh-100" >
        
            <div className="card p-4" style={{ maxWidth: '450px' }}>

            <h1 className="text-center mb-4"><strong>Search Blood</strong></h1> 

                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                        <label htmlFor="Hospital_Reciept" className="form-label">Hospital Receipt</label>
                        <input type="text" className="form-control" id="Hospital_Name" name="Hospital_Name" value={formData.Hospital_Name} onChange={handleChange} placeholder="Enter hospital receipt" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Blood_Type" className="form-label">Blood Type</label>
                        <input type="text" className="form-control" id="Blood_Type" name="Blood_Type" value={formData.Blood_Type} onChange={handleChange} placeholder="Enter blood type" />
                    </div>        
                   
                    <div className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Search</button>
                        <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SearchBlood;
