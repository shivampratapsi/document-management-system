// // src/components/UploadForm.jsx
// import { useState } from 'react';
// import axios from 'axios';

// const UploadForm = () => {
//   const [file, setFile] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!file) return alert("File select karo pehle!");

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('access', 'private');      // default values
//     formData.append('tags', 'demo,test');
//     formData.append('userId', 'your_user_id'); // Replace with actual user ID

//     try {
//       const res = await axios.post('http://localhost:5000/api/files/upload', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       alert("✅ File uploaded successfully!");
//       console.log(res.data);
//     } catch (err) {
//       console.error(err);
//       alert("❌ Upload failed!");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Upload File</h2>
//       <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//       <button type="submit">Upload</button>
//     </form>
//   );
// };

// export default UploadForm;




// import { useState } from 'react';
// import axios from 'axios';

// const FileUpload = () => {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]); // 👈 file store kar liya
//   };

//   const handleUpload = async (e) => {
//     e.preventDefault();
//     if (!file) {
//       alert("Please select a file first.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file); // 👈 field name "file" — matches multer

//     // Add sample values for now
//     formData.append('access', 'private');
//     formData.append('tags', 'test,upload');
//     formData.append('userId', '665afce9a2b12c4ed0f6c2a7'); // 👈 use valid ObjectId

//     try {
//       const response = await axios.post('http://localhost:5000/api/files/upload', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });

//       console.log('Upload success:', response.data);
//       alert('✅ File uploaded successfully!');
//     } catch (err) {
//       console.error('Upload failed:', err);
//       alert('❌ Upload failed.');
//     }
//   };

//   return (
//     <div>
//       <h2>Simple File Upload</h2>
//       <form onSubmit={handleUpload}>
//         <input type="file" onChange={handleFileChange} />
//         <button type="submit">Upload</button>
//       </form>
//     </div>
//   );
// };

// export default FileUpload;


// import React from 'react'
import { useState} from "react";
import axios from 'axios';
import './UploadForm.css'; 

const uploadForm = () => {

const [message,setMessage]=useState(null);//taaki jab if(!file) karen to error na aaye
const [file,setFile] =useState('');//abhi koi file select nahi ki hai

const handleUpload=async(e)=>{
e.preventDefault();//ye form submit hone se(reload hone se) bachaayega taaki baaki ka logic poora ho sake formupload ka jo bhi kaam karana hai 

if(!file){
    setMessage('Please upload karo na !');
    return;
}

//ab jo file upload hogi uska type, format, data -key- value pair me rakhega 
const formData=new FormData();//ye built-in object hai js me
formData.append('file',file);

// form ko upload karenge 
try {
    const res=await axios.post('http://localhost:5000/api/files/upload',formData);
    setMessage('Upload ho gaya 💯' + res.data.message);

    }
 catch (error) {
    console.error(err);
    setMessage('Nahi ho paaya 🥲')
    }
};



  return (
    <>  
    <div className='upload-container'>
        <h2>Upload Document</h2>
        <form  onSubmit={handleUpload}>
            <input type="file" onChange={(e)=>setFile(e.target.files[0])} />
            {/* {file && <p>Selected file: {file.name}</p>}g cd */}
            <button type='submit'>Upload karo ✈️</button>

        </form>
        <p>{message}</p>
    </div>
    </>
  )
};

export default uploadForm
