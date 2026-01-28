```markdown
# 🚀 Remote Code Execution (RCE) Engine

> A robust, safe, and bilingual (C++ & Python) remote code execution engine built with Node.js. Now featuring a professional Cyberpunk-themed frontend, persistent database storage, and a "Time Machine" history system.

---

## 🚧 Project Status: Version 2.2 (The Stateful Edition)
**Backend Core:** `[████████████████████] 100% (Stable)`
**Frontend UI:** `[████████████████████] 100% (History Tab Added)`
**Cloud Deployment:** `[████████████████████] 100% (Live on Railway)`
**Persistence:** `[████████████████████] 100% (PostgreSQL Integrated)`

---

## ⚡ Features (The "Tickets")
This engine was built using **First Principles Engineering**, tackling one critical system constraint at a time.

- **✅ File Generation System:** Dynamically creates unique source files based on timestamp identity.
- **✅ The "Traffic Cop" (Timeout Protection):** Kills infinite loops and CPU hogs after 5 seconds using `SIGTERM`.
- **✅ The "Janitor" (Garbage Collection):** Automated cleanup logic that purges `.cpp`, `.py`, and `.out` files immediately after execution.
- **✅ The "Polyglot" (Multi-Language):** Strategy Pattern implementation to support both **C++** (Compiled) and **Python** (Interpreted).
- **✅ The "Fortress" (Docker):** Full containerization that bundles Node.js, GCC, and Python 3 into a portable Linux environment.
- **✅ The "Librarian" (Database):** Integration with **PostgreSQL** to permanently store every code execution and output log.
- **✅ The "Time Machine" (History UI):** A Cyberpunk-style slide-out panel that lets users restore and rerun past code snippets instantly.

---

## 🛠️ Tech Stack
- **Frontend:** HTML5, CSS3 (Cyberpunk Theme), Vanilla JavaScript
- **Backend:** Node.js (Express)
- **Database:** PostgreSQL (v13+), `pg` driver
- **Compilers:** GCC (`g++`), Python 3 (`python3`)
- **Infrastructure:** Docker, Docker Compose, Railway (Cloud)

---

## 📂 Project Structure
```text
/RCE-Engine
│── Dockerfile         (Container Recipe)
│── docker-compose.yml (Orchestration for App + DB)
│── server.js          (Main Backend Entry & API)
│── db.js              (PostgreSQL Connection Pool)
│── /api
│   └── compiler.js    (Compilation & Execution Logic)
│── /client
│   ├── index.html     (Frontend UI)
│   ├── main.js        (Frontend Logic & History System)
│   └── style.css      (Cyberpunk Design)
└── /temp              (Auto-generated execution artifacts)

```

---

## 🚀 Getting Started

### Option A: Running with Docker Compose (Recommended)

This method spins up both the **Node.js App** and the **PostgreSQL Database** in a private network automatically.

1. **Start the Orchestra**
```bash
docker-compose up --build

```


2. **Access the App**
Visit `http://localhost:5050` in your browser.
*Note: The database will automatically initialize on port 5432.*

---

### Option B: Running Locally (Manual)

Use this if you have Node.js and a local Postgres instance installed.

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


3. **Database Config**
Create a `.env` file or set environment variables (`DB_HOST`, `DB_USER`, `DB_PASS`, `DB_NAME`, `DB_PORT`).
4. **Run the Server**
```bash
node server.js

```



---

## 📡 API Usage

**Execute Code:**
`POST /run`

```json
{
  "language": "cpp",
  "code": "#include <iostream>\nint main() { std::cout << \"Hello DB\"; }"
}

```

**View History:**
`GET /history`
*Returns the last 10 executions stored in the PostgreSQL database.*

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
* [x] **Ticket #009:** PostgreSQL Database Integration (The Librarian)
* [x] **Ticket #010:** Frontend History & Restoration UI (The Time Machine)

---

## ⚠️ Security Note

While Docker adds a layer of isolation, this engine executes arbitrary code. **For production deployment**, ensure you set memory limits (`--memory=512m`) and CPU quotas in your Docker run command to prevent resource exhaustion attacks.

---

### 👨‍💻 Author

Built by **Saad Mehmood Athar** as a Deep Engineering Project.

```

```
