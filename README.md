# FiveM API Wrapper

A lightweight Node.js + Express API wrapper written in TypeScript that normalizes FiveM server data into a stable, predictable API contract for external consumers such as Discord bots, admin tools, and monitoring services.

This project acts as a clean integration layer between FiveM game servers and third-party applications.

---

## 🚧 Project Status

**Status: Finished (MVP Complete)**

This project has reached its intended scope as a backend learning project.  
All core functionality is implemented and working as designed.

---

## 🎯 Project Goals

- Normalize inconsistent FiveM server data into a stable API contract
- Provide safe upstream fetching with timeout handling
- Support partial upstream failures without crashing the API
- Maintain a clean, layered Express architecture
- Practice real-world backend fundamentals using TypeScript

---

## ✨ Features

- Fetches live FiveM data from:
  - `dynamic.json`
  - `players.json`
- Stable, typed API responses
- Separate endpoints for server info, players, and aggregated status
- Partial failure handling with degraded responses
- Timeout-protected upstream requests
- API uptime tracking
- Upstream diagnostics via health endpoints

---

## 🧠 Architecture

The project follows a clean separation of concerns:

```
Routes
  ↓
Controllers
  ↓
Services
  ↓
Adapters
  ↓
safeFetch (upstream HTTP)
  ↓
parseFiveM (normalization)
  ↓
Types (stable API contract)
```

### Responsibilities

- **Controllers** – HTTP request/response handling
- **Services** – orchestration and business logic
- **Adapters** – FiveM endpoint integration
- **Utils** – fetch safety, parsing, helpers
- **Types** – stable output contracts

---

## 🚀 Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment

Copy `env.example` to `.env` and update values:

```env
PORT=3000
FIVEM_BASE_URL=http://127.0.0.1:30120
FIVEM_TIMEOUT=5000
```

### 3) Run the API

```bash
npm run dev
```

---

## 🌐 API Endpoints

### Health

**GET /health**  
Alias: `GET /health/status`

Returns API uptime and upstream reachability.

```json
{
  "ok": true,
  "data": {
    "upStream": {
      "dynamic": {
        "ok": true,
        "status": 200,
        "latency": 42
      },
      "players": {
        "ok": true,
        "status": 200,
        "latency": 55
      },
      "degraded": false
    },
    "uptime": "3 minutes",
    "lastRestart": "2026-02-09T06:12:00.000Z"
  },
  "timestamp": "2026-02-09T06:15:00.000Z"
}
```

### Server

**GET /server/status**

Returns aggregated normalized server information and players.

```json
{
  "ok": true,
  "data": {
    "serverInfo": {
      "name": "Example Server",
      "map": "Los Santos",
      "currentPlayers": 12,
      "maxPlayers": 64
    },
    "playerInfo": [
      {
        "name": "Player1",
        "id": "1",
        "ping": 40
      }
    ]
  },
  "degraded": false
}
```

**GET /server/info**

Returns normalized server information only.

```json
{
  "ok": true,
  "data": {
    "name": "Example Server",
    "map": "Los Santos",
    "currentPlayers": 12,
    "maxPlayers": 64
  }
}
```

**GET /server/players**

Returns normalized player list only.

```json
{
  "ok": true,
  "data": [
    {
      "name": "Player1",
      "id": "1",
      "ping": 40
    }
  ]
}
```

---

## 🧪 Error Handling

- Upstream timeouts are handled safely
- Partial upstream failures return degraded responses
- API responses follow a consistent structure:

```json
{
  "ok": false,
  "error": {
    "message": "Upstream request failed"
  }
}
```

---

## 📝 Notes

- Raw FiveM response formats are never exposed directly
- The API contract is intentionally stable for external consumers
- Designed as an integration layer rather than a full backend platform

---

## 🔮 Optional Future Enhancements

- Handle non-JSON upstream responses safely
- Add short-term snapshot caching
- Unit tests for parsing and normalization
- Rate limiting
- Dockerized deployment

---

## 👤 Author

Built as a backend learning project focused on real-world API design, reliability, and clean architecture.
