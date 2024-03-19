import React from 'react'
import './MyResume.css';

const MyResume = () => {

    const handleDownload = () => {
        const resumeUrl = 'https://www.dropbox.com/scl/fi/4eh2mvboiao7nhhcoyi0o/modified-deedy-resume-1-2.pdf?rlkey=svfiothszqv1hqka1bqkxkbbr&dl=0';

       const link= document.createElement('a');
       link.href = resumeUrl;
       link.download = 'awsCV.pdf';
       link.click();
    };

  return (
    <button className='download-button' onClick={handleDownload}>My Resume</button>
  )
}

export default MyResume
