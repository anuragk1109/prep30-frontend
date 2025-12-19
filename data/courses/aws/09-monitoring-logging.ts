import { Subject } from '@/types/study-material';

export const monitoringContent: Subject = {
  id: 'aws-subject-9',
  slug: 'monitoring-logging',
  title: 'Monitoring, Logging & Observability',
  description: 'Run production systems safely',
  order: 9,
  chapters: [
    {
      id: 'aws-chapter-9-1',
      slug: 'cloudwatch',
      title: 'CloudWatch',
      description: 'Monitoring and logging service',
      order: 1,
      topics: [
        {
          id: 'aws-topic-9-1-1',
          slug: 'cloudwatch-overview',
          title: 'CloudWatch Overview',
          description: 'Understanding AWS monitoring',
          content: `# Amazon CloudWatch Overview

## What is Amazon CloudWatch?

Amazon CloudWatch is a monitoring and observability service that provides data and actionable insights to monitor your applications, respond to system-wide performance changes, optimize resource utilization, and get a unified view of operational health.

## Key Components

### Metrics
- Time-series data points
- Performance indicators
- Resource utilization
- Custom metrics

### Logs
- Application logs
- System logs
- Audit logs
- Custom logs

### Alarms
- Threshold monitoring
- Automated actions
- Notification systems
- Alerting

### Dashboards
- Visualizations
- Custom widgets
- Real-time data
- Historical views

## CloudWatch Metrics

### Standard Metrics
- CPU utilization
- Memory usage
- Disk I/O
- Network traffic

### Custom Metrics
- Application metrics
- Business metrics
- Performance metrics
- Custom dimensions

### Metric Dimensions
- Additional context
- Filtering capabilities
- Grouping options
- Query optimization

### Metric Math
- Calculations between metrics
- Percentiles
- Aggregations
- Transformations

## CloudWatch Logs

### Log Groups
- Collection of log streams
- Retention policies
- Access control
- Subscription filters

### Log Streams
- Sequential log entries
- Timestamp ordering
- Source identification
- Sequence tokens

### Log Events
- Individual log entries
- Timestamps
- Messages
- Metadata

### Insights
- Automatic pattern detection
- Anomaly identification
- Structured queries
- Visual analysis

## CloudWatch Alarms

### Alarm States
- OK
- ALARM
- INSUFFICIENT_DATA
- State transitions

### Alarm Types
- Metric alarms
- Composite alarms
- Canaries
- EventBridge alarms

### Actions
- Auto Scaling
- SNS notifications
- Lambda functions
- EC2 actions

### Evaluation Periods
- Breach duration
- Statistical methods
- Missing data treatment
- Period configuration

## CloudWatch Dashboards

### Widgets
- Line charts
- Number displays
- Text widgets
- Alarm widgets

### Customization
- Layout options
- Color schemes
- Time ranges
- Interactive features

### Sharing
- Public dashboards
- Team access
- Embedding options
- Export capabilities

## Integration with AWS Services

### Compute Services
- EC2 metrics
- Lambda metrics
- ECS/EKS monitoring
- Auto Scaling integration

### Storage Services
- S3 metrics
- EBS metrics
- RDS monitoring
- DynamoDB metrics

### Network Services
- VPC metrics
- ELB monitoring
- CloudFront metrics
- Route 53 health checks

### Database Services
- RDS performance
- Aurora metrics
- ElastiCache monitoring
- Database connections

CloudWatch is essential for monitoring AWS resources and maintaining operational excellence in the cloud.`,
          type: 'document',
          order: 1,
          tags: ['cloudwatch', 'monitoring', 'logs'],
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
