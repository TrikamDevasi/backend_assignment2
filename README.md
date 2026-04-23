# Notes Management REST API — Assignment 02

A production-ready **Notes Management REST API** built with **Node.js**, **Express**, and **MongoDB (Mongoose)**. Implements full CRUD, route parameters, query parameters, pagination, and sorting.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (via Mongoose)
- **Environment:** dotenv

## Project Structure

```
notes-app/
├── src/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── models/
│   │   └── note.model.js      # Mongoose schema & model
│   ├── controllers/
│   │   └── note.controller.js # All 19 endpoint handlers
│   ├── routes/
│   │   └── note.routes.js     # Express router
│   ├── middlewares/           # (reserved for future middleware)
│   ├── app.js                 # Express app setup
│   └── index.js               # Server entry point
├── .env                       # Environment variables (gitignored)
├── .env.example               # Environment template
└── package.json
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/TrikamDevasi/backend_assignment2.git
cd backend_assignment2/notes-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment

```bash
cp .env.example .env
# Edit .env with your MongoDB URI
```

### 4. Run the server

```bash
npm run dev   # development (nodemon)
npm start     # production
```

Server starts on `http://localhost:5000`

### Postman Documentation

- **Published API Docs:** [Postman Documentation](https://documenter.getpostman.com/view/50840761/2sBXwpMWHo)
- **Collection JSON File:** [postman_collection.json](./postman_collection.json)

---

## API Endpoints

### CRUD

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/notes` | Create a single note |
| `POST` | `/api/notes/bulk` | Create multiple notes |
| `GET` | `/api/notes` | Get all notes |
| `GET` | `/api/notes/:id` | Get note by ID |
| `PUT` | `/api/notes/:id` | Full replace |
| `PATCH` | `/api/notes/:id` | Partial update |
| `DELETE` | `/api/notes/:id` | Delete single note |
| `DELETE` | `/api/notes/bulk` | Delete multiple notes |

### Route Parameters

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/notes/category/:category` | Get notes by category |
| `GET` | `/api/notes/status/:isPinned` | Get notes by pin status |
| `GET` | `/api/notes/:id/summary` | Get note summary (selected fields) |

### Query Parameters

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/notes/filter` | Filter by category and/or isPinned |
| `GET` | `/api/notes/filter/pinned` | Get pinned notes (optional ?category=) |
| `GET` | `/api/notes/filter/category` | Filter by category (?name=) |
| `GET` | `/api/notes/filter/date-range` | Filter by date (?from=&to=) |

### Pagination

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/notes/paginate` | Paginate all notes (?page=&limit=) |
| `GET` | `/api/notes/paginate/category/:category` | Paginate by category |

### Sorting

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/notes/sort` | Sort notes (?sortBy=&order=) |
| `GET` | `/api/notes/sort/pinned` | Sort pinned notes only |

---

## Note Schema

```js
{
  title:    String  (required),
  content:  String  (required),
  category: String  (enum: "work" | "personal" | "study", default: "personal"),
  isPinned: Boolean (default: false),
  createdAt: Date   (auto),
  updatedAt: Date   (auto)
}
```

## Response Format

All endpoints follow this consistent format:

```json
{
  "success": true | false,
  "message": "...",
  "data": {} | [] | null
}
```

List endpoints include `count`. Paginated endpoints include a `pagination` object.

## HTTP Status Codes

| Code | When |
|------|------|
| `200` | Successful GET, PUT, PATCH, DELETE |
| `201` | Successful POST |
| `400` | Missing required field, invalid param, invalid ObjectId |
| `404` | Note not found |
| `500` | Server or database error |
