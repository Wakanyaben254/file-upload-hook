import React, { useState } from 'react';
import './my-pdf-uploader.css';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    // Update the state with the selected file
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Perform the upload logic here
    if (selectedFile) {
      // You can use this information to send the file to a server or process it further
      console.log('Selected File:', selectedFile);
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept=".pdf" />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
