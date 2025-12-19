import { Subject } from '@/types/study-material';

export const computeServicesContent: Subject = {
  id: 'aws-subject-3',
  slug: 'compute-services',
  title: 'Compute Services',
  description: 'Run applications',
  order: 3,
  chapters: [
    {
      id: 'aws-chapter-3-1',
      slug: 'ec2-deep-dive',
      title: 'EC2 (Deep)',
      description: 'Elastic Compute Cloud fundamentals',
      order: 1,
      topics: [
        {
          id: 'aws-topic-3-1-1',
          slug: 'ec2-overview',
          title: 'EC2 Overview',
          description: 'Understanding EC2 instances and features',
          content: `# Amazon EC2 Overview

## What is Amazon EC2?

Amazon Elastic Compute Cloud (EC2) is a web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers.

## Key Features

### Scalability
- Scale up or down within minutes
- Auto Scaling based on demand
- Elastic Load Balancing for distribution

### Flexibility
- Multiple instance types optimized for different use cases
- Choice of operating systems
- Custom configurations

### Cost-Effective
- Pay only for what you use
- Reserved instances for cost savings
- Spot instances for significant discounts

### Security
- Virtual private cloud (VPC) for network isolation
- Security groups for instance-level security
- IAM integration for access control

## EC2 Instance Types

### General Purpose
- **T3/T4g**: Balanced compute, memory, networking
- **M6g/M5**: Mainstream applications

### Compute Optimized
- **C6g/C5**: High-performance processors
- Ideal for compute-intensive applications

### Memory Optimized
- **R6g/R5**: Large memory capacity
- Suitable for memory-intensive workloads

### Storage Optimized
- **I3i/I3**: High-speed, local storage
- **D3/D2**: Dense storage

### Accelerated Computing
- **P4/P3**: GPU instances
- **Inf1**: Machine learning inference

## Instance Lifecycle

### Launching an Instance
1. Choose AMI (Amazon Machine Image)
2. Select instance type
3. Configure network and security
4. Add storage
5. Launch and connect

### Instance States
- **Pending**: Instance is being launched
- **Running**: Instance is operational
- **Stopping**: Instance is shutting down
- **Stopped**: Instance is shut down
- **Terminated**: Instance is deleted

## Key Components

### Amazon Machine Image (AMI)
Template for your virtual server containing:
- Operating system
- Application server
- Applications
- Configuration

### Instance Types
Different combinations of CPU, memory, storage, and networking capacity.

### Key Pairs
Secure login information for your instances (SSH keys).

### Security Groups
Virtual firewall that controls inbound and outbound traffic.

### Elastic Block Store (EBS)
Persistent block storage volumes for EC2 instances.

## Pricing Models

### On-Demand
- Pay by the second
- No long-term commitment
- Highest cost per hour

### Reserved Instances
- 1-year or 3-year terms
- Significant discounts (up to 72%)
- Upfront, partial, or no upfront payment

### Spot Instances
- Up to 90% discount
- Can be interrupted with 2-minute notice
- Ideal for fault-tolerant workloads

### Dedicated Hosts
- Physical EC2 server dedicated for your use
- Bring your own licenses
- Full control over instance placement

## Best Practices

### Security
- Use IAM roles instead of access keys
- Enable detailed monitoring
- Use security groups effectively
- Regularly patch and update

### Performance
- Choose appropriate instance types
- Use EBS-optimized instances
- Monitor with CloudWatch
- Use placement groups for low latency

### Cost Optimization
- Use Reserved Instances for steady workloads
- Use Spot Instances for flexible workloads
- Right-size instances regularly
- Use instance scheduling

## Use Cases

### Web Applications
- Scalable web servers
- Application servers
- Load balanced environments

### Development and Testing
- Development environments
- Testing environments
- Staging servers

### Data Processing
- Batch processing
- Big data processing
- Scientific computing

### Gaming
- Game servers
- Multiplayer backends
- Real-time applications

EC2 provides the foundation for most AWS deployments and is essential for understanding cloud computing on AWS.`,
          type: 'document',
          order: 1,
          tags: ['ec2', 'compute', 'instances'],
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
