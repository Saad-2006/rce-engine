document.addEventListener('DOMContentLoaded', () => {
    const runBtn = document.getElementById('runBtn');
    const languageSelector = document.getElementById('languageSelector');
    const codeInput = document.getElementById('codeInput');
    const outputBox = document.getElementById('output');

    runBtn.addEventListener('click', async () => {
        const language = languageSelector.value;
        const code = codeInput.value;

        // UI Loading State
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

            // Handle Response Logic
            if (data.output) {
                // Standard Output
                outputBox.innerText = data.output;
                outputBox.classList.add("success");
            } 
            else if (data.success && data.output) {
                // Structured Success
                outputBox.innerText = data.output;
                outputBox.classList.add("success");
            }
            else if (data.error) {
                // Known Error
                outputBox.innerText = data.error;
                outputBox.classList.add("error");
            }
            else {
                // Fallback
                outputBox.innerText = JSON.stringify(data, null, 2);
            }

        } catch (err) {
            outputBox.innerText = "Connection Failed! Ensure Server is running.";
            outputBox.classList.add("error");
        } finally {
            runBtn.disabled = false;
            runBtn.innerText = "RUN CODE";
        }
    });
});

function toggleHistory() {
    const sidebar = document.getElementById('history-sidebar');
    sidebar.classList.toggle('active');

    // Only fetch if we are opening it
    if (sidebar.classList.contains('active')) {
        fetchHistory();
    }
}

async function fetchHistory() {
    const list = document.getElementById('history-list');
    list.innerHTML = '<div style="color:#888; text-align:center; padding-top: 20px;">Accessing Archives...</div>';

    try {
        const res = await fetch('/history');
        const data = await res.json();

        list.innerHTML = ''; // Clear loading text

        if (data.length === 0) {
            list.innerHTML = '<div style="color:#888; text-align:center; padding-top: 20px;">No Records Found.</div>';
            return;
        }

        data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'history-card';
            
            const time = new Date(item.created_at).toLocaleTimeString();
            const date = new Date(item.created_at).toLocaleDateString();
            
            // Clean up code snippet for preview
            const cleanCode = item.code ? item.code.replace(/</g, "&lt;") : "";
            const snippet = cleanCode.substring(0, 40) + '...';

            card.innerHTML = `
                <div class="history-meta">
                    <span class="history-lang">${item.language}</span>
                    <span>${date} ${time}</span>
                </div>
                <div class="history-snippet">${snippet}</div>
            `;

            // Restore Code on Click
            card.onclick = () => loadCode(item.language, item.code);
            
            list.appendChild(card);
        });

    } catch (err) {
        list.innerHTML = '<div style="color:red; text-align:center; padding-top: 20px;">Connection Failed</div>';
    }
}

function loadCode(language, code) {
    const langSelect = document.getElementById('languageSelector');
    const codeArea = document.getElementById('codeInput');

    if (langSelect && codeArea) {
        langSelect.value = language;
        codeArea.value = code;
        toggleHistory(); // Close the sidebar automatically;
    }
}