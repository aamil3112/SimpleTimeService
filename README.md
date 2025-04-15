# SimpleTimeService

A simple microservice that returns the current timestamp and the visitor's IP address.

## Project Structure

```
.
├── app/           # Application code and Dockerfile
└── terraform/     # Infrastructure as Code (Terraform)
```

## Application

### Response Format

```json
{
  "timestamp": "<current date and time>",
  "ip": "<the IP address of the visitor>"
}
```

### Local Development

1. Navigate to the app directory:
   ```
   cd app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the service:
   ```
   npm start
   ```

4. The service will be available at http://localhost:3000

### Docker

#### Building the Docker Image

1. Navigate to the app directory:
   ```
   cd app
   ```

2. Build the Docker image:
   ```
   docker build -t simple-time-service:latest .
   ```

#### Running the Docker Container

```
docker run -p 3000:3000 simple-time-service:latest
```

The service will be available at http://localhost:3000

## Infrastructure (Terraform)

### Prerequisites

- [Terraform](https://www.terraform.io/downloads.html) (v1.0.0 or newer)
- AWS CLI configured with appropriate credentials
- Docker (for building and testing the container)

### AWS Authentication

Before deploying the infrastructure, you need to authenticate to AWS:

1. Install the AWS CLI: https://aws.amazon.com/cli/
2. Configure your AWS credentials:
   ```
   aws configure
   ```
3. Enter your AWS Access Key ID, Secret Access Key, default region, and output format when prompted.

### Deploying the Infrastructure

1. Navigate to the terraform directory:
   ```
   cd terraform
   ```

2. Initialize Terraform:
   ```
   terraform init
   ```

3. Review the planned changes:
   ```
   terraform plan
   ```

4. Apply the changes to create the infrastructure:
   ```
   terraform apply
   ```

5. When prompted, type `yes` to confirm the changes.

### Cleaning Up

To destroy all resources created by Terraform:

```
terraform destroy
```

When prompted, type `yes` to confirm the destruction of resources.

## Security Notes

- The application runs as a non-root user inside the container
- No sensitive information is stored in the code or configuration
- AWS credentials should never be committed to the repository

## License

MIT 