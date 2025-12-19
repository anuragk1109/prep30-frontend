import { Subject } from '@/types/study-material';

export const databaseServicesContent: Subject = {
  id: 'aws-subject-6',
  slug: 'database-services',
  title: 'Database Services',
  description: 'Manage application data',
  order: 6,
  chapters: [
    {
      id: 'aws-chapter-6-1',
      slug: 'rds-overview',
      title: 'RDS',
      description: 'Relational Database Service',
      order: 1,
      topics: [
        {
          id: 'aws-topic-6-1-1',
          slug: 'rds-basics',
          title: 'RDS Fundamentals',
          description: 'Understanding managed relational databases',
          content: `# Amazon RDS Overview

## What is Amazon RDS?

Amazon Relational Database Service (RDS) is a managed database service that makes it easy to set up, operate, and scale a relational database in the cloud. It provides cost-efficient and resizable capacity while automating time-consuming administration tasks.

## Key Features

### Automated Management
- Automated backups
- Software patching
- Failure detection
- Recovery

### Scalability
- Scale compute resources
- Scale storage
- Read replicas for read scaling
- Multi-AZ for high availability

### Security
- Encryption at rest
- Encryption in transit
- IAM integration
- VPC isolation

### Monitoring
- Enhanced monitoring
- Performance Insights
- CloudWatch integration
- Event notifications

## Supported Database Engines

### MySQL
- Popular open-source database
- Multiple versions supported
- Compatible with existing applications
- Community and enterprise editions

### PostgreSQL
- Advanced open-source database
- Full SQL compliance
- Extensible architecture
- Strong data integrity

### MariaDB
- MySQL fork
- Enhanced features
- Open source
- Drop-in replacement for MySQL

### Oracle
- Enterprise database
- Multiple editions
- Bring Your Own License (BYOL)
- License included options

### SQL Server
- Microsoft database
- Multiple editions
- Windows and Linux
- BYOL and license included

### Amazon Aurora
- AWS proprietary database
- MySQL and PostgreSQL compatible
- High performance
- Cloud-native architecture

## RDS Components

### DB Instance
- Primary database server
- Compute and storage resources
- Database engine
- Network configuration

### Multi-AZ Deployment
- Primary and standby instance
- Automatic failover
- Synchronous replication
- High availability

### Read Replicas
- Read-only copies
- Asynchronous replication
- Load distribution
- Read scaling

### DB Subnet Group
- Network isolation
- Multiple subnets
- High availability
- Security

## Storage Options

### General Purpose SSD (gp2/gp3)
- Balanced performance
- Cost-effective
- Baseline performance
- Burst capability

### Provisioned IOPS SSD (io1)
- High performance
- Consistent I/O
- Specific IOPS provisioned
- Database-intensive workloads

### Magnetic (standard)
- Legacy storage
- Lowest cost
- Not recommended for new deployments
- Being deprecated

## High Availability

### Multi-AZ Deployments
- Standby instance in different AZ
- Automatic failover
- No data loss
- Minimal downtime

### Read Replicas
- Read scaling
- Geographic distribution
- Disaster recovery
- Can be promoted to primary

## Backup and Recovery

### Automated Backups
- Daily backups
- Transaction logs
- Point-in-time recovery
- Retention period (1-35 days)

### Manual Snapshots
- User-initiated
- Retained until deleted
- Can be shared
- Used for long-term backup

### Point-in-Time Recovery
- Restore to any second
- Within backup retention period
- No data loss
- Quick recovery

## Security

### Encryption
- At rest encryption
- In transit encryption
- Key management with KMS
- Transparent to applications

### Network Security
- VPC placement
- Security groups
- Network ACLs
- Private subnets

### Access Control
- IAM authentication
- Database credentials
- Master user account
- Fine-grained permissions

## Monitoring and Performance

### CloudWatch Metrics
- CPU utilization
- Memory usage
- Storage I/O
- Database connections

### Enhanced Monitoring
- OS-level metrics
- Process information
- Real-time data
- Detailed analysis

### Performance Insights
- Query performance
- Wait events
- Visualization
- Optimization recommendations

## Pricing Model

### Instance Costs
- Per hour billing
- Varies by instance class
- On-demand and reserved options
- Multi-AZ additional cost

### Storage Costs
- Per GB per month
- Varies by storage type
- Provisioned IOPS costs
- Backup storage costs

### Data Transfer
- Internet data transfer
- Cross-region replication
- Free within same region
- Standard AWS data transfer rates

## Best Practices

### Design
- Choose appropriate instance size
- Use Multi-AZ for production
- Use read replicas for scaling
- Plan for growth

### Security
- Enable encryption
- Use security groups
- Monitor with CloudTrail
- Regular security audits

### Performance
- Monitor metrics regularly
- Use Performance Insights
- Optimize queries
- Use appropriate storage type

### Backup
- Enable automated backups
- Set appropriate retention
- Test restore procedures
- Document recovery plan

## Use Cases

### Web Applications
- E-commerce sites
- Content management systems
- User data storage
- Session management

### Enterprise Applications
- ERP systems
- CRM systems
- Financial applications
- HR systems

### Data Warehousing
- Analytics databases
- Reporting systems
- Business intelligence
- Data aggregation

RDS simplifies database management while providing enterprise-grade features, security, and scalability. It's the ideal choice for most relational database needs in AWS.`,
          type: 'document',
          order: 1,
          tags: ['rds', 'database', 'relational'],
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
