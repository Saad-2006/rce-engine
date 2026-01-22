# 🚀 Remote Code Execution (RCE) Engine

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D%2016.0.0-brightgreen)
![Status](https://img.shields.io/badge/status-active-success)

> A robust, safe, and bilingual (C++ & Python) remote code execution engine built with Node.js. Designed to handle compilation, execution, and cleanup with system-level precision.
---

## 🚧 Project Status: Loading v1.0...
**Backend Core:**
`[████████████████████] 100% (Complete)`

**Frontend Interface:**
`[░░░░░░░░░░░░░░░░░░░░] 0% (Coming Soon)`

---

## ⚡ Features (The "Tickets")
This engine was built using **First Principles Engineering**, tackling one critical system constraint at a time.

- **✅ File Generation System:** Dynamically creates unique source files based on timestamp identity.
- **✅ The "Traffic Cop" (Timeout Protection):** Kills infinite loops and CPU hogs after 3 seconds using `SIGTERM`.
- **✅ The "Janitor" (Garbage Collection):** Automated cleanup logic that purges `.cpp`, `.py`, and `.out` files immediately after execution (Success or Fail).
- **✅ The "Polyglot" (Multi-Language):** Strategy Pattern implementation to support both **C++** (Compiled) and **Python** (Interpreted) execution flows.
- **✅ Async/Non-Blocking:** Uses `child_process` and `Promises` to keep the Node.js event loop free.
---

## 🛠️ Tech Stack
- **Runtime:** Node.js (Express)
- **Languages Supported:** C++ (`g++`), Python (`python3`)
- **System:** Unix/Linux Child Processes
- **Tools:** Postman / Curl (for testing)
---

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
npm install

```

### 3. Run the Engine

```bash
node server.js
# Server will start on Port 8000

```

---

## 📡 API Usage

### Endpoint: `POST /run`

**Execute C++ Code:**

```bash
curl -X POST http://localhost:8000/run \
-H "Content-Type: application/json" \
-d '{"language":"cpp", "code":"#include <iostream>\nint main() { std::cout << \"Hello from C++\"; return 0; }"}'

```

**Execute Python Code:**

```bash
curl -X POST http://localhost:8000/run \
-H "Content-Type: application/json" \
-d '{"language":"py", "code":"print(\"Hello from Python\")"}'

```

**Test Time Limit (The Poison Pill):**

```bash
curl -X POST http://localhost:8000/run \
-H "Content-Type: application/json" \
-d '{"language":"cpp", "code":"#include <iostream>\nint main() { while(true); return 0; }"}'

```

*Expected Response:* `{"success":false, "error":"Time Limit Exceeded!"}`

---

## 🔮 Roadmap (Next Tickets)

* [x] **Ticket #001:** File Generator
* [x] **Ticket #002:** C++ Execution Logic
* [x] **Ticket #003:** Automated Garbage Collection (The Janitor)
* [x] **Ticket #004:** Security Timeouts (The Traffic Cop)
* [x] **Ticket #005:** Python Support (The Polyglot)
* [ ] **Ticket #006:** Frontend Control Panel (HTML/JS)
* [ ] **Ticket #007:** Docker Containerization (Isolation)
---

### 👨‍💻 Author
Built by **Saad Mehmood Athar** as a Deep Engineering Project.
