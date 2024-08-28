const mysql = require("mysql2");


const conn = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"manager",
    database:"userimgupload"
});



conn.connect((error)=>{
    if(error) throw error;
    console.log("connected !")
})


module.exports=conn


// data.length > 0 ? data.map((e1, i) => {
//     return
//     (
//       <>
//         <Card style={{ width: '22rem', height: '18rem' }} className='mb-3'>
//           <Card.Img variant="top" src={`/upload/${e1.userimg}`} style={{ width: '100px', textAlign: 'center', margin: 'auto' }} className='mt-2' />
//           <Card.Body className='text-center'>
//             <Card.Title>UserName:{e1.username}</Card.Title>
//             <Card.Text>
//               Date Added: {moment(e1.date).format("DD-MM-YYYY")}
//             </Card.Text>
//             <Button variant="danger" className='text-center'>Delete</Button>
//           </Card.Body>
//         </Card>
//       </>
//     )
//   }) : " "