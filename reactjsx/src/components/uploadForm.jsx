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
            
            <button type='submit'>Upload karo ✈️</button>

        </form>
        <p>{message}</p>
    </div>
    </>
  )
};

export default uploadForm
