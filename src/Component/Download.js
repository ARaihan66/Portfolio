import React from "react";

const Download = () => {

    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Abu Raihan.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }
    return (
        <>
            <center>
                <button onClick={onButtonClick} className="btn btn-info btn-outline-light">
                    Download Resume
                </button>
            </center>
        </>
    );
};

export default Download;