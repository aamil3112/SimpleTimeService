# SimpleTimeService Infrastructure

This directory contains Terraform configuration to deploy the SimpleTimeService to AWS.

## Architecture

The infrastructure includes:

- VPC with 2 public and 2 private subnets
- ECS Fargate cluster
- Application Load Balancer
- ECS service running the SimpleTimeService container
- Security groups and IAM roles

## Prerequisites

- [Terraform](https://www.terraform.io/downloads.html) (v1.0.0 or newer)
- AWS CLI configured with appropriate credentials
- Docker image for SimpleTimeService

## AWS Authentication

Before deploying the infrastructure, you need to authenticate to AWS:

1. Install the AWS CLI: https://aws.amazon.com/cli/
2. Configure your AWS credentials:
   ```
   aws configure
   ```
3. Enter your AWS Access Key ID, Secret Access Key, default region, and output format when prompted.

## Deployment

1. Initialize Terraform:
   ```
   terraform init
   ```

2. Review the planned changes:
   ```
   terraform plan
   ```

3. Apply the changes to create the infrastructure:
   ```
   terraform apply
   ```

4. When prompted, type `yes` to confirm the changes.

## Configuration

You can customize the deployment by modifying the `terraform.tfvars` file or by passing variables to the `terraform apply` command:

```
terraform apply -var="project_name=my-service" -var="environment=prod"
```

## Cleaning Up

To destroy all resources created by Terraform:

```
terraform destroy
```

When prompted, type `yes` to confirm the destruction of resources.

## Outputs

After successful deployment, Terraform will output:

- ALB DNS name
- ECS cluster name
- ECS service name
- VPC ID
- Private subnet IDs
- Public subnet IDs
- Application URL

## Security Notes

- The ECS tasks run in private subnets
- The ALB is in public subnets
- Security groups restrict traffic appropriately
- No sensitive information is stored in the code or configuration 