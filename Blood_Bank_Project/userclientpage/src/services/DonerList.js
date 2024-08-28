import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Table from "react-bootstrap/Table";

function DonerList() {
    const [receivedData, setReceivedData] = useState(null);
    const [Hospital_Name, setHospitalName] = useState('');
    const [Blood_Type, setBloodType] = useState('');
    const [doners,setdoners]=useState([]);
    const [doner,setdoner]=useState({Hospital_name:"",Hospital_Address:"",Hospital_Number:"",Blood_type:"",Hospital_Reciept:"",Age:"",Gender:""})
    useEffect(() => {
      // Extract data from URL parameters
      const urlParams = new URLSearchParams(window.location.search);
      const receivedData = {};
      for (const [key, value] of urlParams.entries()) {
        receivedData[key] = value;
      }
      setReceivedData(receivedData);

     //console.log(receivedData.Hospital_Name);
      // setHospitalName(receivedData.Hospital_Name);
      // console.log("Hospital_Name:",Hospital_Name);

      // setHospitalName(receivedData.Hospital_Name);
      // console.log("Hospital_Name:",Hospital_Name);

      setHospitalName(receivedData.Hospital_Name);
      console.log("Hospital_Name:",Hospital_Name);

      //console.log(receivedData.Blood_Type);
      setBloodType(receivedData.Blood_Type);
      console.log("Blood_Type:",Blood_Type);

      getAll();
    }, []);

    const getAll = () => {
        const updatedProfile = {
            Hospital_Name,
            Blood_Type
            // Add more fields as needed
          };
        axios.get('http://127.0.0.1:9898/bloodbank',updatedProfile)
            .then(response => {
                // Handle successful registration
                console.log('Registration successful:', response.data);
                setdoners(response.data);
            })
            .catch(error => {
                // Handle registration error
                console.error('Registration failed:', error);
            });
    };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: "linear-gradient(rgba(255, 0, 0, 0.6), rgba(255, 255, 255, 0.9))",
    },
    card: {
      width: "1000px",
      maxWidth: "1200px",
    },
    heading: {
      textAlign: "center",
      marginBottom: "20px",
    },
  };

  return (
    <div style={styles.container}>
      <div className="card p-4" style={styles.card}>
        <h1 className="mb-4" style={{ fontWeight: "bold", textAlign: "center" }}>
        Doner List
        </h1>

        <Table striped bordered hover>
          <thead>
            <tr>
                <th style={{textAlign: "center"}}>Blood Type</th>
                <th style={{textAlign: "center"}}>Hospital Reciept</th>
                <th style={{textAlign: "center"}}>Age</th>
                <th style={{textAlign: "center"}}>Gender</th>
                <th style={{textAlign: "center"}}>Hospital Name</th>
                <th style={{textAlign: "center"}}>Hospital Number</th>
                <th style={{textAlign: "center"}}>Hospital Address</th>

            </tr>
          </thead>
          <tbody>
            {doners.map((doner) => (
             <tr>
             <td>{doner.Blood_type}</td> 
             <td>{doner.Hospital_Reciept}</td> 
             <td>{doner.Age}</td> 
             <td>{doner.Gender}</td> 
             <td>{doner.Hospital_name}</td> 
             <td>{doner.Hospital_Number}</td> 
             <td>{doner.Hospital_Address}</td>
         </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default DonerList;
