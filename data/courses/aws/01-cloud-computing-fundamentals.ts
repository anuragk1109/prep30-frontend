import { Subject } from '@/types/study-material';

export const cloudComputingContent: Subject = {
  id: 'aws-subject-1',
  slug: 'cloud-computing-aws-fundamentals',
  title: 'Cloud Computing & AWS Fundamentals',
  description: 'Understand what AWS is and why it exists',
  order: 1,
  chapters: [
    {
      id: 'aws-chapter-1-1',
      slug: 'what-is-cloud-computing',
      title: 'What is Cloud Computing',
      description: 'Introduction to cloud computing concepts',
      order: 1,
      topics: [
        {
          id: 'aws-topic-1-1-1',
          slug: 'cloud-computing-basics',
          title: 'Cloud Computing Basics',
          description: 'Understanding the fundamentals of cloud computing',
          content: `# Cloud Computing Basics

## What is Cloud Computing?

Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing. Instead of buying, owning, and maintaining your own data centers and servers, you can access technology services, such as computing power, storage, and databases, on an as-needed basis from a cloud provider like Amazon Web Services.

## Key Characteristics

### On-Demand Self-Service
- Users can provision computing resources as needed without requiring human interaction from the service provider
- Available through web interfaces, mobile apps, or APIs

### Broad Network Access
- Services are available over the network and accessed through standard mechanisms
- Can be used by various clients including thin clients, thick clients, mobile phones, and tablets

### Resource Pooling
- Provider's computing resources are pooled to serve multiple customers
- Multi-tenant model with physical and virtual resources assigned and reassigned dynamically

### Rapid Elasticity
- Capabilities can be elastically provisioned and released
- To consumers, the capabilities often appear unlimited and can be appropriated in any quantity at any time

### Measured Service
- Cloud systems automatically control and optimize resource use
- Resource usage can be monitored, controlled, and reported, providing transparency for both the provider and consumer

## Benefits of Cloud Computing

### Cost Savings
- No upfront hardware costs
- Pay only for what you use
- Reduced operational costs

### Scalability and Flexibility
- Scale up or down as needed
- Global reach in minutes
- Adapt to changing business needs

### Performance and Speed
- Access to enterprise-grade hardware
- Global infrastructure
- Faster innovation

### Security and Compliance
- Built-in security features
- Compliance certifications
- Data protection

## Cloud Service Models

### IaaS (Infrastructure as a Service)
- Virtual machines, storage, networks
- Operating systems
- Full control over infrastructure

### PaaS (Platform as a Service)
- Development and deployment platforms
- Database management systems
- Middleware

### SaaS (Software as a Service)
- Complete applications
- Web-based email
- CRM systems

Cloud computing has revolutionized how businesses operate by providing flexible, scalable, and cost-effective solutions for their IT needs.`,
          type: 'document',
          order: 1,
          tags: ['cloud', 'basics', 'introduction'],
          createdAt: '2024-01-01',
          updatedAt: '2024-01-01'
        }
      ],
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01'
    },
    {
      id: 'aws-chapter-1-2',
      slug: 'on-premise-vs-cloud',
      title: 'On-premise vs Cloud',
      description: 'Compare traditional infrastructure with cloud solutions',
      order: 2,
      topics: [
        {
          id: 'aws-topic-1-2-1',
          slug: 'infrastructure-comparison',
          title: 'Infrastructure Comparison',
          description: 'Detailed comparison between on-premise and cloud infrastructure',
          content: `# On-premise vs Cloud Infrastructure

## On-premise Infrastructure

### Definition
On-premise infrastructure refers to computing resources that are physically located within an organization's own data center or facility.

### Characteristics
- **Ownership**: Company owns and maintains all hardware
- **Control**: Complete control over infrastructure and data
- **Maintenance**: In-house IT team responsible for maintenance
- **Scalability**: Limited by physical space and hardware capacity
- **Cost**: High upfront capital expenditure (CapEx)

### Advantages
- Full control over security and compliance
- No dependency on internet connectivity
- Customizable to specific needs
- Data remains on-premise

### Disadvantages
- High initial investment
- Ongoing maintenance costs
- Limited scalability
- Requires skilled IT staff

## Cloud Infrastructure

### Definition
Cloud infrastructure refers to computing resources that are hosted and managed by a third-party cloud service provider and accessed over the internet.

### Characteristics
- **Ownership**: Provider owns and maintains hardware
- **Control**: Control over resources, but infrastructure managed by provider
- **Maintenance**: Provider handles maintenance and updates
- **Scalability**: Virtually unlimited scalability
- **Cost**: Pay-as-you-go operational expenditure (OpEx)

### Advantages
- Low upfront costs
- Rapid scalability
- Global reach
- Managed services
- Built-in security and compliance

### Disadvantages
- Dependency on internet connectivity
- Less control over infrastructure
- Potential vendor lock-in
- Ongoing subscription costs

## Comparison Table

| Aspect | On-premise | Cloud |
|--------|------------|-------|
| **Cost Model** | Capital Expenditure (CapEx) | Operational Expenditure (OpEx) |
| **Scalability** | Limited by physical hardware | Virtually unlimited |
| **Maintenance** | In-house team responsibility | Provider responsibility |
| **Control** | Full control | Shared control |
| **Deployment Speed** | Weeks to months | Minutes to hours |
| **Compliance** | Full control over data location | Provider certifications |
| **Disaster Recovery** | Complex and expensive | Built-in features |

## When to Choose On-premise

- Strict regulatory requirements for data location
- Legacy applications that cannot be migrated
- Very specific hardware requirements
- Long-term stable workload
- Full control over security is critical

## When to Choose Cloud

- Variable workloads requiring scalability
- Rapid development and deployment needs
- Limited IT staff or expertise
- Global distribution requirements
- Cost optimization is priority
- Need for managed services

## Hybrid Approach

Many organizations adopt a hybrid approach, combining both on-premise and cloud infrastructure to leverage the benefits of both models.

### Use Cases for Hybrid
- Keep sensitive data on-premise while using cloud for development
- Burst to cloud during peak demand periods
- Gradual migration from on-premise to cloud
- Disaster recovery and backup solutions

The choice between on-premise and cloud depends on your specific business requirements, regulatory constraints, budget, and technical capabilities.`,
          type: 'document',
          order: 1,
          tags: ['infrastructure', 'comparison', 'on-premise'],
          createdAt: '2024-01-01',
          updatedAt: '2024-01-01'
        }
      ],
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01'
    },
    {
      id: 'aws-chapter-1-3',
      slug: 'iaas-paas-saas',
      title: 'IaaS, PaaS, SaaS',
      description: 'Understanding cloud service models',
      order: 3,
      topics: [
        {
          id: 'aws-topic-1-3-1',
          slug: 'cloud-service-models',
          title: 'Cloud Service Models',
          description: 'Detailed explanation of IaaS, PaaS, and SaaS',
          content: `# Cloud Service Models: IaaS, PaaS, SaaS

## Overview

Cloud computing offers three main service models, each providing different levels of abstraction and management. Understanding these models helps you choose the right approach for your needs.

## IaaS (Infrastructure as a Service)

### Definition
Infrastructure as a Service provides fundamental computing resources such as virtual machines, storage, and networking. You rent IT infrastructure from a cloud provider and pay for what you use.

### What You Manage
- Operating systems
- Applications and data
- Runtime
- Middleware
- Virtualization

### What Provider Manages
- Servers
- Storage
- Networking
- Data center facilities

### AWS IaaS Examples
- **Amazon EC2**: Virtual servers
- **Amazon S3**: Object storage
- **Amazon VPC**: Virtual private cloud
- **Amazon RDS**: Managed databases (can be IaaS or PaaS)

### Use Cases
- Website hosting
- Data backup and recovery
- High-performance computing
- Disaster recovery

### Advantages
- Maximum flexibility and control
- Pay-as-you-go pricing
- No hardware maintenance
- Scalable infrastructure

### Disadvantages
- Requires technical expertise
- You're responsible for security and maintenance
- Complex to manage at scale

## PaaS (Platform as a Service)

### Definition
Platform as a Service provides a platform allowing customers to develop, run, and manage applications without the complexity of building and maintaining the infrastructure.

### What You Manage
- Applications and data
- Configuration

### What Provider Manages
- Runtime
- Middleware
- Operating systems
- Virtualization
- Servers
- Storage
- Networking

### AWS PaaS Examples
- **AWS Elastic Beanstalk**: Application deployment
- **AWS Lambda**: Serverless computing
- **Amazon RDS**: Managed databases
- **Amazon DynamoDB**: NoSQL database

### Use Cases
- Application development and deployment
- API development
- Business analytics
- Internet of Things (IoT)

### Advantages
- Faster development
- No infrastructure management
- Built-in scalability
- Reduced development complexity

### Disadvantages
- Less control over infrastructure
- Potential vendor lock-in
- Limited customization options

## SaaS (Software as a Service)

### Definition
Software as a Service provides ready-to-use software applications over the internet on a subscription basis.

### What You Manage
- User accounts and permissions
- Data and configurations

### What Provider Manages
- Everything else (applications, runtime, middleware, OS, virtualization, servers, storage, networking)

### AWS SaaS Examples
- **Amazon WorkMail**: Email and calendaring
- **Amazon Chime**: Online meetings
- **AWS Connect**: Contact center service

### Use Cases
- Email and collaboration tools
- Customer relationship management (CRM)
- Human resources management
- Financial software

### Advantages
- No installation or maintenance
- Accessible from anywhere
- Regular updates and patches
- Predictable subscription costs

### Disadvantages
- Limited customization
- Data security concerns
- Internet dependency
- Vendor lock-in

## Comparison Table

| Aspect | IaaS | PaaS | SaaS |
|--------|------|------|------|
| **Control Level** | High | Medium | Low |
| **Management** | You manage OS and above | You manage applications | You manage users |
| **Flexibility** | Highest | High | Limited |
| **Complexity** | High | Medium | Low |
| **Technical Expertise** | Required | Some required | Minimal |
| **Deployment Speed** | Medium | Fast | Instant |
| **Cost** | Pay for resources | Pay for platform | Pay per user |

## Choosing the Right Model

### Choose IaaS when:
- You need maximum control and flexibility
- You have technical expertise
- You're migrating existing applications
- You need specific configurations

### Choose PaaS when:
- You want to focus on development
- You need rapid deployment
- You want built-in scalability
- You have limited DevOps resources

### Choose SaaS when:
- You need ready-to-use software
- You want minimal management overhead
- You need quick implementation
- You have limited technical resources

## Evolution of Cloud Services

Many organizations start with IaaS and gradually move to PaaS and SaaS as they mature in their cloud journey. This evolution allows them to:

1. **Learn** the cloud with IaaS
2. **Optimize** development with PaaS
3. **Simplify** operations with SaaS

Understanding these models helps you make informed decisions about your cloud strategy and choose the right services for your specific needs.`,
          type: 'document',
          order: 1,
          tags: ['iaas', 'paas', 'saas', 'service-models'],
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
