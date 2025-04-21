function downloadResume() {
    const button = document.querySelector('.download .button');
    const originalText = button.innerHTML;
    
    try {
        // Show loading state
        button.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Downloading...';
        button.disabled = true;
        
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
        
        // Reset button state after a short delay
        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
        }, 1000);
        
    } catch (error) {
        console.error('Error downloading resume:', error);
        button.innerHTML = '<i class="fa fa-exclamation-circle"></i> Error Downloading';
        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
        }, 2000);
    }
} 