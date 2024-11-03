document.getElementById("myForm").addEventListener("submit", async function (e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        
        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbwkr9qcH2R-I3IcQA4UiqUC-MW25fHAppx7owq8cPIkYMvzFT7xwWjUH_1A0G8zeit_ww/exec", {  // Replace with your web app URL
                method: "POST",
                body: formData
            });
            
            const result = await response.json();
            alert(result.result);
        } catch (error) {
            alert("Error submitting form");
        }
    });

