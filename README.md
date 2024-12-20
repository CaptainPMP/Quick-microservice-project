# API Gateway with Microservices

This project demonstrates an API Gateway setup that proxies requests to multiple microservices. It includes an example where a frontend communicates with the API Gateway, which then forwards requests to individual microservices.

---

## Project Structure

### API Gateway (`server.js`)
- Acts as the central access point for all client requests.
- Forwards requests to the respective microservices using `http-proxy-middleware`.
- Handles CORS to allow cross-origin requests from the frontend.

### Report Service (`reportService.js`)
- A microservice responsible for handling report-related operations.
- Connects to a MongoDB database to store and retrieve reports.

### Frontend
- Makes requests to the API Gateway (not directly to microservices).
- For example, the frontend communicates with the gateway on `http://localhost:5000/api/reports`.

---

## Prerequisites

- **Node.js** installed on your machine.
- **MongoDB** running locally or a MongoDB Atlas cluster.
- **dotenv** for environment variable management.

---

## Getting Started

### 1. Environment Setup

Create a `.env` file in the root directory with the following content:

```env
PORT=5000
USER_SERVICE_URL=http://localhost:5001
REPORT_SERVICE_URL=http://localhost:5002
NOTIFICATION_SERVICE_URL=http://localhost:5003
MONGO_URI=mongodb://localhost:27017/reports
```

- Replace `USER_SERVICE_URL`, `REPORT_SERVICE_URL`, and `NOTIFICATION_SERVICE_URL` with the URLs of the respective services.

### 2. Install Dependencies

Run the following command in the root directory to install dependencies:

```bash
npm install
```

Repeat this for the `Report Service` if it has its own package.json.

---

## Running the Services

### 1. Start the API Gateway

Run the following command in the root directory:

```bash
node server.js
```

This starts the API Gateway on `http://localhost:5000`.

### 2. Start the Report Service

Navigate to the Report Service directory (if separate) and run:

```bash
node reportService.js
```

This starts the Report Service on `http://localhost:5002`.

---

## How It Works

### API Gateway (`server.js`)
- Listens on port `5000`.
- Proxies requests to respective microservices:
  - `/api/users/login` -> User Service
  - `/api/reports` -> Report Service
  - `/api/notifications` -> Notification Service
- CORS is configured to allow requests from the frontend (e.g., `http://localhost:3000`).

#### Key Code Snippet for Proxy:
```javascript
app.use('/api/reports', createProxyMiddleware({
    target: process.env.REPORT_SERVICE_URL,
    changeOrigin: true,
}));
```

### Report Service (`reportService.js`)
- Connects to a MongoDB database for storing reports.
- Handles routes like:
  - `GET /api/reports` - Fetch all reports.
  - `POST /api/reports` - Create a new report.

#### Key Code Snippet for CORS:
```javascript
const corsOptions = {
    origin: 'http://localhost:3000', // Frontend URL
    methods: ['GET', 'POST'],
};
app.use(cors(corsOptions));
```

---

## Testing

### Using Postman or curl

1. **Test API Gateway Proxying**
   - Make a GET request to `http://localhost:5000/api/reports`.
   - Example:
     ```bash
     curl -X GET http://localhost:5000/api/reports
     ```

2. **Test Frontend to Gateway Communication**
   - Ensure the frontend is configured to make API calls to `http://localhost:5000`.
   - Example frontend request:
     ```javascript
     fetch('http://localhost:5000/api/reports')
         .then(response => response.json())
         .then(data => console.log(data));
     ```

3. **Database Connection**
   - Check if the Report Service connects successfully to MongoDB.
   - Logs should display `"Report Service DB Connected"` if successful.

---

## Common Issues

### 1. **CORS Errors**
   - Ensure the API Gateway has CORS enabled for your frontend's origin.
   - Example:
     ```javascript
     app.use(cors({ origin: 'http://localhost:3000' }));
     ```

### 2. **Microservice Not Responding**
   - Verify the microservice (e.g., Report Service) is running and accessible.
   - Test using curl:
     ```bash
     curl -X GET http://localhost:5002/api/reports
     ```

---

## Future Improvements

1. Add authentication middleware to secure routes.
2. Implement health checks for microservices.
3. Use a reverse proxy (e.g., Nginx) for production environments.

---

## License

This project is open-source and available under the MIT License.
