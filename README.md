```markdown
# 🚀 Remote Code Execution (RCE) Engine

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D%2018.0.0-brightgreen)
![Docker](https://img.shields.io/badge/docker-ready-blue)
![Status](https://img.shields.io/badge/status-cloud--live-success)

> A robust, safe, and bilingual (C++ & Python) remote code execution engine built with Node.js. Now featuring a professional Cyberpunk-themed frontend, Docker containerization, and live cloud deployment.

---

## 🚧 Project Status: Version 2.0 (Live Production)
**Backend Core:** `[████████████████████] 100% (Stable)`
**Frontend UI:** `[████████████████████] 100% (Polished)`
**Cloud Deployment:** `[████████████████████] 100% (Live on Railway)`

---

## ⚡ Features (The "Tickets")
This engine was built using **First Principles Engineering**, tackling one critical system constraint at a time.

- **✅ File Generation System:** Dynamically creates unique source files based on timestamp identity.
- **✅ The "Traffic Cop" (Timeout Protection):** Kills infinite loops and CPU hogs after 5 seconds using `SIGTERM`.
- **✅ The "Janitor" (Garbage Collection):** Automated cleanup logic that purges `.cpp`, `.py`, and `.out` files immediately after execution.
- **✅ The "Polyglot" (Multi-Language):** Strategy Pattern implementation to support both **C++** (Compiled) and **Python** (Interpreted).
- **✅ The "Fortress" (Docker):** Full containerization that bundles Node.js, GCC, and Python 3 into a portable Linux environment.
- **✅ Real-Time UI:** A specialized, VS Code-inspired frontend for writing and running code directly in the browser.

---

## 🛠️ Tech Stack
- **Frontend:** HTML5, CSS3 (Cyberpunk Theme), Vanilla JavaScript
- **Backend:** Node.js (Express)
- **Compilers:** GCC (`g++`), Python 3 (`python3`)
- **Infrastructure:** Docker (Debian Slim), REST API, Railway (Cloud)

---

## 📂 Project Structure
```text
/RCE-Engine
│── Dockerfile         (Container Recipe)
│── .dockerignore      (Build Optimization)
│── server.js          (Main Backend Entry & Static File Server)
│── /api
│   └── compiler.js    (Compilation & Execution Logic)
│── /client
│   ├── index.html     (Frontend UI)
│   ├── script.js      (Frontend Logic)
│   └── style.css      (Cyberpunk Design)
└── /temp              (Auto-generated execution artifacts)

```

---

## 🚀 Getting Started

### Option A: Running with Docker (Recommended)

This method guarantees the environment matches production (Cloud) exactly.

1. **Build the Image**
```bash
docker build -t rce-engine .

```


2. **Run the Container**
```bash
docker run -p 5050:5050 rce-engine

```


3. **Open the App**
Visit `http://localhost:5050` in your browser.

---

### Option B: Running Locally (Development)

Use this if you don't have Docker installed.

1. **Prerequisites**
Ensure you have compilers installed:
```bash
g++ --version
python3 --version

```


2. **Installation**
```bash
git clone [https://github.com/your-username/rce-engine.git](https://github.com/your-username/rce-engine.git)
cd rce-engine
npm install

```


3. **Run the Server**
```bash
node server.js

```


4. **Launch**
Visit `http://localhost:5050` in your browser.

---

## 📡 API Usage (Headless Mode)

**Endpoint:** `POST /run`

**Execute C++ Code:**

```bash
curl -X POST http://localhost:5050/run \
-H "Content-Type: application/json" \
-d '{"language":"cpp", "code":"#include <iostream>\nint main() { std::cout << \"Hello from Docker\"; return 0; }"}'

```

---

## 🔮 Roadmap (Completed Tickets)

* [x] **Ticket #001:** File Generator
* [x] **Ticket #002:** C++ Execution Logic
* [x] **Ticket #003:** Automated Garbage Collection (The Janitor)
* [x] **Ticket #004:** Security Timeouts (The Traffic Cop)
* [x] **Ticket #005:** Python Support (The Polyglot)
* [x] **Ticket #006:** Frontend Control Panel (HTML/JS)
* [x] **Ticket #007:** Docker Containerization (Isolation)
* [x] **Ticket #008:** Cloud Deployment (Railway)
* [ ] **Ticket #009:** PostgreSQL Database Integration

---

## ⚠️ Security Note:

While Docker adds a layer of isolation, this engine executes arbitrary code. **For production deployment**, ensure you set memory limits (`--memory=512m`) and CPU quotas in your Docker run command to prevent resource exhaustion attacks.

---

### 👨‍💻 Author
Built by **Saad Mehmood Athar** as a Deep Engineering Project.

```

```
