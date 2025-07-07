const downloadbtn= ({ fileId }) => {
  const handleDownload = () => {
    
    window.open(`http://localhost:5000/api/files/download/${fileId}`, '_blank');
  };

  return (
    <button onClick={handleDownload} className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
      Download
    </button>
  );
};

export default downloadbtn;
