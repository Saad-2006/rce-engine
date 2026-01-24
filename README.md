# 🚀 Remote Code Execution (RCE) Engine

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D%2016.0.0-brightgreen)
![Status](https://img.shields.io/badge/status-stable-success)

> A robust, safe, and bilingual (C++ & Python) remote code execution engine built with Node.js. Now featuring a professional Cyberpunk-themed frontend interface.

---

## 🚧 Project Status: Version 1.0 (MVP Complete)
**Backend Core:**
`[████████████████████] 100% (Stable)`

**Frontend Interface:**
`[████████████████████] 100% (Polished)`

---

## ⚡ Features (The "Tickets")
This engine was built using **First Principles Engineering**, tackling one critical system constraint at a time.

- **✅ File Generation System:** Dynamically creates unique source files based on timestamp identity.
- **✅ The "Traffic Cop" (Timeout Protection):** Kills infinite loops and CPU hogs after 5 seconds using `SIGTERM`.
- **✅ The "Janitor" (Garbage Collection):** Automated cleanup logic that purges `.cpp`, `.py`, and `.out` files immediately after execution.
- **✅ The "Polyglot" (Multi-Language):** Strategy Pattern implementation to support both **C++** (Compiled) and **Python** (Interpreted).
- **✅ Real-Time UI:** A specialized, VS Code-inspired frontend for writing and running code directly in the browser.
- **✅ Async/Non-Blocking:** Uses `child_process` and `Promises` to keep the Node.js event loop free.
---

## 🛠️ Tech Stack
- **Frontend:** HTML5, CSS3 (Cyberpunk Theme), Vanilla JavaScript
- **Backend:** Node.js (Express)
- **Compilers:** GCC (`g++`), Python 3 (`python3`)
- **Architecture:** REST API with CORS & Child Processes
---

## 📂 Project Structure
```text
/RCE-Engine
│── server.js          (Main Backend Entry)
│── /api
│   └── compiler.js    (Compilation & Execution Logic)
│── /client
│   ├── index.html     (Frontend UI)
│   ├── script.js      (Frontend Logic)
│   └── style.css      (Cyberpunk Design)
└── /temp              (Auto-generated execution artifacts)
---
```
## 🚀 Getting Started

### 1. Prerequisites

Ensure you have the compilers installed on your machine:

```bash
# Check C++
g++ --version

# Check Python
python3 --version

```

### 2. Installation

```bash
# Clone the repo
git clone [https://github.com/your-username/rce-engine.git](https://github.com/your-username/rce-engine.git)

# Navigate to directory
cd rce-engine

# Install dependencies
npm install express cors body-parser

```

### 3. Run the Engine

Start the backend server. It executes code on your local machine.

```bash
node server.js
# 🚀 Server will start on Port 5050

```

### 4. Launch the Frontend

Simply open `client/index.html` in your web browser to start coding.

---

## 📡 API Usage (Headless Mode)

If you prefer using `curl` or Postman instead of the UI:

### Endpoint: `POST http://localhost:5050/run`

**Execute C++ Code:**

```bash
curl -X POST http://localhost:5050/run \
-H "Content-Type: application/json" \
-d '{"language":"cpp", "code":"#include <iostream>\nint main() { std::cout << \"Hello from C++\"; return 0; }"}'

```

**Execute Python Code:**

```bash
curl -X POST http://localhost:5050/run \
-H "Content-Type: application/json" \
-d '{"language":"py", "code":"print(\"Hello from Python\")"}'

```
---
## 🔮 Roadmap (Completed Tickets)
```
* [x] **Ticket #001:** File Generator
* [x] **Ticket #002:** C++ Execution Logic
* [x] **Ticket #003:** Automated Garbage Collection (The Janitor)
* [x] **Ticket #004:** Security Timeouts (The Traffic Cop)
* [x] **Ticket #005:** Python Support (The Polyglot)
* [x] **Ticket #006:** Frontend Control Panel (HTML/JS)
* [ ] **Ticket #007:** Docker Containerization (Isolation)
```
---

## ⚠️ Security Note

This project executes code directly on the host machine (`child_process`). It is designed for **Portfolio & Educational purposes**.
**DO NOT** deploy this to a public server without adding a sandboxing layer (like Docker or Firejail) to prevent malicious system access (e.g., `rm -rf /`).
---

### 👨‍💻 Author
Built by **Saad Mehmood Athar** as a Deep Engineering Project.
