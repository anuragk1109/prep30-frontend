import { Subject } from '@/types/study-material';

export const containersContent: Subject = {
  id: 'aws-subject-7',
  slug: 'containers-orchestration',
  title: 'Containers & Orchestration',
  description: 'Modern backend deployment',
  order: 7,
  chapters: [
    {
      id: 'aws-chapter-7-1',
      slug: 'docker-basics',
      title: 'Docker Basics',
      description: 'Container fundamentals',
      order: 1,
      topics: [
        {
          id: 'aws-topic-7-1-1',
          slug: 'docker-intro',
          title: 'Docker Introduction',
          description: 'Understanding containers',
          content: `# Docker and Container Fundamentals

## What are Containers?

Containers are lightweight, standalone, executable packages that include everything needed to run a piece of software, including the code, runtime, system tools, system libraries, and settings.

## Container Benefits

### Portability
- Run anywhere
- Consistent environments
- No dependency issues
- Platform independent

### Efficiency
- Lightweight
- Fast startup
- Resource efficient
- High density

### Isolation
- Process isolation
- Resource limits
- Security boundaries
- Independent lifecycles

### Scalability
- Easy to scale
- Microservices architecture
- Load balancing
- Auto-scaling

## Docker Architecture

### Docker Engine
- Runtime environment
- Daemon process
- REST API
- CLI interface

### Images
- Read-only templates
- Layered filesystem
- Build instructions
- Version control

### Containers
- Running instances
- Writable layer
- Network stack
- Process isolation

### Registries
- Image storage
- Version management
- Distribution
- Access control

## Key Docker Commands

### Image Management
\`\`\`bash
# Build image
docker build -t app:latest .

# Pull image
docker pull ubuntu:20.04

# List images
docker images

# Remove image
docker rmi app:latest
\`\`\`

### Container Management
\`\`\`bash
# Run container
docker run -d -p 80:80 --name web nginx

# List containers
docker ps

# Stop container
docker stop web

# Remove container
docker rm web
\`\`\`

### Dockerfile
\`\`\`dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

## AWS Container Services

### Amazon ECR (Elastic Container Registry)
- Fully managed container registry
- Stores Docker images
- Integrates with IAM
- Secure and scalable

### Amazon ECS (Elastic Container Service)
- Container orchestration
- Task definitions
- Service discovery
- Auto scaling

### AWS Fargate
- Serverless containers
- No server management
- Pay per use
- Integrated with ECS/EKS

### Amazon EKS (Elastic Kubernetes Service)
- Managed Kubernetes
- Standard Kubernetes API
- Control plane management
- Cluster operations

## Container Orchestration

### What is Orchestration?
- Managing container lifecycles
- Service discovery
- Load balancing
- Health monitoring

### Kubernetes Concepts
- Pods
- Services
- Deployments
- Namespaces

### ECS Concepts
- Task Definitions
- Services
- Clusters
- Container Instances

## Best Practices

### Image Optimization
- Use minimal base images
- Multi-stage builds
- Layer caching
- Security scanning

### Security
- Use non-root users
- Scan for vulnerabilities
- Limit container capabilities
- Network segmentation

### Performance
- Resource limits
- Health checks
- Graceful shutdown
- Monitoring

### Operations
- Immutable infrastructure
- Automated deployments
- Rollback strategies
- Logging and monitoring

## Use Cases

### Microservices
- Service decomposition
- Independent scaling
- Technology diversity
- Team autonomy

### CI/CD
- Build pipelines
- Test environments
- Deployment automation
- Rollback capabilities

### Data Processing
- Batch jobs
- Stream processing
- ETL pipelines
- Machine learning

### Web Applications
- Frontend applications
- Backend services
- APIs
- Static content

Containers have revolutionized application deployment by providing consistency, portability, and efficiency. AWS provides comprehensive 
comprehensive.
container servicesilla
 services that integrate seamlessly with the broader AWS ecosystem.`,
          type: 'document',
          order: 1,
          tags: ['docker', 'containers', 'packaging'],
          createdAt: '2024-01-01',
          updatedAt: '2024-01-01'
        }
      ],
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01'
    }
  ],
  createdAt: '2024-01-01',
  updatedAt: '2024-01-01'
};
