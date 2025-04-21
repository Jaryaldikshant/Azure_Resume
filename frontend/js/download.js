function downloadResume() {
    // Create a link element
    const link = document.createElement('a');
    
    // Set the path to your resume PDF
    link.href = 'resume/Resume.pdf';
    
    // Set the download attribute with the desired filename
    link.download = 'Dikshant_Resume.pdf';
    
    // Append the link to the body
    document.body.appendChild(link);
    
    // Trigger the click event
    link.click();
    
    // Remove the link from the body
    document.body.removeChild(link);
} 