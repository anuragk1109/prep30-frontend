import { Subject } from '@/types/study-material';

export const serverlessContent: Subject = {
  id: 'aws-subject-8',
  slug: 'serverless-event-driven',
  title: 'Serverless & Event-Driven Architecture',
  description: 'Build scalable systems without servers',
  order: 8,
  chapters: [
    {
      id: 'aws-chapter-8-1',
      slug: 'lambda',
      title: 'Lambda',
      description: 'Serverless compute service',
      order: 1,
      topics: [
        {
          id: 'aws-topic-8-1-1',
          slug: 'lambda-overview',
          title: 'AWS Lambda Overview',
          description: 'Understanding serverless functions',
          content: `# AWS Lambda Overview

## What is AWS Lambda?

AWS Lambda is a serverless, event-driven compute service that lets you run code for virtually any type of application or backend service without provisioning or managing servers. You can trigger Lambda from over 200 AWS services and software as a service (SaaS) applications.

## Key Concepts

### Functions
- Units of code that Lambda runs
- Supported languages: Python, Node.js, Java, C#, Go, Ruby
- Can include dependencies
- Stateless execution

### Triggers
- Events that invoke Lambda functions
- Can be AWS services or custom events
- Asynchronous or synchronous invocation
- Event sources configuration

### Execution Environment
- Isolated runtime environment
- Temporary storage (/tmp)
- Network access
- Resource limits

## Lambda Features

### Serverless
- No server management
- Automatic scaling
- Pay per use
- High availability

### Event-Driven
- React to events
- Event sources
- Real-time processing
- Integration capabilities

### Scalability
- Automatic scaling
- Concurrency limits
- Provisioned concurrency
- Burst capacity

### Cost-Effective
- Pay per request
- Free tier available
- No idle costs
- Optimized pricing

## Lambda Components

### Function Code
- Handler method
- Runtime environment
- Dependencies
- Configuration

### Execution Role
- IAM permissions
- Resource access
- Security context
- Least privilege

### Runtime
- Programming language
- Version management
- Performance characteristics
- Compatibility

### Layers
- Shared dependencies
- Code reuse
- Version management
- Size limits

## Invocation Models

### Synchronous Invocation
- Wait for response
- Error handling
- Retry behavior
- Use cases: API Gateway, applications

### Asynchronous Invocation
- Fire and forget
- Queue management
- Retry with backoff
- Use cases: S3 events, SNS

### Poll-Based Invocation
- Stream processing
- Batching
- Error handling
- Use cases: DynamoDB streams, Kinesis

## Configuration

### Memory Allocation
- 128 MB to 10 GB
- CPU proportional to memory
- Performance impact
- Cost optimization

### Timeout
- 1 second to 15 minutes
- Function-specific
- Error handling
- User experience

### Environment Variables
- Configuration data
- Secrets management
- Runtime values
- Security considerations

### Concurrency
- Reserved concurrency
- Provisioned concurrency
- Throttling
- Performance control

## Lambda Integrations

### API Gateway
- HTTP endpoints
- REST APIs
- WebSocket APIs
- Authentication

### S3 Events
- Object creation
- Object deletion
- Image processing
- Data validation

### DynamoDB Streams
- Change data capture
- Replication
- Analytics
- Auditing

### SNS Topics
- Notifications
- Fan-out patterns
- Decoupling
- Event distribution

## Security

### IAM Roles
- Least privilege
- Resource access
- Service roles
- Cross-account access

### VPC Networking
- Private subnets
- Security groups
- NAT gateways
- Internet access

### Encryption
- Environment variables
- Code storage
- Data in transit
- Key management

### Code Security
- Dependency scanning
- Vulnerability management
- Input validation
- Output filtering

## Monitoring and Debugging

### CloudWatch Logs
- Function logs
- Execution logs
- Error logs
- Custom metrics

### CloudWatch Metrics
- Invocations
- Duration
- Errors
- Throttles

### X-Ray Tracing
- Request tracing
- Performance analysis
- Service maps
- Error identification

### Dead Letter Queues
- Failed events
- Retry handling
- Error analysis
- Manual processing

## Best Practices

### Function Design
- Single responsibility
- Stateless design
- Idempotent functions
- Error handling

### Performance
- Optimize cold starts
- Use provisioned concurrency
- Memory optimization
- Efficient code

### Security
- Use IAM roles
- Encrypt sensitive data
- Validate inputs
- Monitor access

### Cost Management
- Optimize memory usage
- Monitor duration
- Use free tier
- Control concurrency

## Use Cases

### Web Applications
- API backends
- Form processing
- Authentication
- Data validation

### Data Processing
- ETL pipelines
- Image processing
- File conversion
- Data validation

### Real-time Processing
- Stream processing
- Event handling
- Notifications
- Chatbots

### Automation
- Scheduled tasks
- Resource provisioning
- Cleanup operations
- Monitoring

Lambda enables developers to build scalable, cost-effective applications without managing infrastructure. It's ideal for event-driven architectures and microservices.`,
          type: 'document',
          order: 1,
          tags: ['lambda', 'serverless', 'functions'],
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
