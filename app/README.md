# SimpleTimeService Application

A simple microservice that returns the current timestamp and the visitor's IP address.

## Response Format

```json
{
  "timestamp": "<current date and time>",
  "ip": "<the IP address of the visitor>"
}
```

## Local Development

1. Install dependencies:
   ```
   npm install
   ```

2. Start the service:
   ```
   npm start
   ```

3. The service will be available at http://localhost:3000

## Environment Variables

- `PORT`: Optional. Specify a custom port (default: 3000)

## Docker

### Building the Docker Image

```
docker build -t simple-time-service:latest .
```

### Running the Docker Container

```
docker run -p 3000:3000 simple-time-service:latest
```

### Publishing to Docker Hub

1. Log in to Docker Hub:
   ```
   docker login
   ```

2. Tag the image with your Docker Hub username:
   ```
   docker tag simple-time-service:latest yourusername/simple-time-service:latest
   ```

3. Push the image to Docker Hub:
   ```
   docker push yourusername/simple-time-service:latest
   ```

## Security

- The application runs as a non-root user inside the container
- No sensitive information is stored in the code or configuration 