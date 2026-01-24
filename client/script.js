document.addEventListener('DOMContentLoaded', () => {
    const runBtn = document.getElementById('runBtn');
    const languageSelector = document.getElementById('languageSelector');
    const codeInput = document.getElementById('codeInput');
    const outputBox = document.getElementById('output');

    runBtn.addEventListener('click', async () => {
        const language = languageSelector.value;
        const code = codeInput.value;

        // UI Loading
        runBtn.disabled = true;
        runBtn.innerText = "EXECUTING...";
        outputBox.innerText = "Compiling and running...";
        outputBox.className = ""; // Reset style
        outputBox.style.color = "#d4d4d4";

        try {
            const response = await fetch('/run', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ language, code })
            });

            const data = await response.json();
            console.log("SERVER RESPONSE:", data);

            // HANDLE ANY RESPONSE FORMAT
            if (data.output) {
                // Case 1: Standard Output
                outputBox.innerText = data.output;
                outputBox.classList.add("success");
            } 
            else if (data.success && data.output) {
                // Case 2: Structured Success
                outputBox.innerText = data.output;
                outputBox.classList.add("success");
            }
            else if (data.error) {
                // Case 3: Known Error
                outputBox.innerText = data.error;
                outputBox.classList.add("error");
            }
            else {
                // Case 4: Mystery Response
                outputBox.innerText = JSON.stringify(data, null, 2);
            }

        } catch (err) {
            outputBox.innerText = "Connection Failed! Ensure Server is on Port 5050!";
            outputBox.classList.add("error");
        } finally {
            runBtn.disabled = false;
            runBtn.innerText = "RUN CODE";
        }
    });
});