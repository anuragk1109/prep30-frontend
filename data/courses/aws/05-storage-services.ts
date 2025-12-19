import { Subject } from '@/types/study-material';

export const storageServicesContent: Subject = {
  id: 'aws-subject-5',
  slug: 'storage-services',
  title: 'Storage Services',
  description: 'Store data & files',
  order: 5,
  chapters: [
    {
      id: 'aws-chapter-5-1',
      slug: 's3-deep-dive',
      title: 'S3 (Deep)',
      description: 'Simple Storage Service fundamentals',
      order: 1,
      topics: [
        {
          id: 'aws-topic-5-1-1',
          slug: 's3-overview',
          title: 'S3 Overview',
          description: 'Understanding S3 storage',
          content: `# Amazon S3 Overview

## What is Amazon S3?

Amazon Simple Storage Service (S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance. It's designed for 99.999999999% (11 nines) of durability.

## Key Concepts

### Objects
- Fundamental entities stored in S3
- Consist of data and metadata
- Can be up to 5 TB in size
- Identified by unique keys

### Buckets
- Containers for objects
- Globally unique names
- Store objects in a flat namespace
- Can be configured with specific settings

### Keys
- Unique identifiers for objects within a bucket
- Can include folder-like prefixes
- Case-sensitive
- Can be up to 1024 bytes

## Storage Classes

### Standard
- Default storage class
- High durability (99.999999999%)
- High availability (99.99%)
- Low latency
- Use case: frequently accessed data

### Intelligent-Tiering
- Automatically moves objects between access tiers
- No retrieval fees
- Monitoring and automation
- Use case: unknown access patterns

### Standard-IA (Infrequent Access)
- Lower cost than Standard
- Same durability
- Higher availability (99.9%)
- Retrieval fee
- Use case: infrequently accessed data

### One Zone-IA
- Lower cost than Standard-IA
- Stored in single Availability Zone
- 99.999999999% durability
- Use case: non-critical, reproducible data

### Glacier Instant Retrieval
- Lowest cost for instant access
- Minimum 90 days storage
- Retrieval fee
- Use case: long-term, infrequent access

### Glacier Deep Archive
- Lowest cost storage class
- Minimum 180 days storage
- 12-hour restore time
- Use case: archival, compliance

## S3 Features

### Versioning
- Keep multiple versions of objects
- Protect against accidental deletion
- Restore previous versions
- Additional storage cost

### Lifecycle Policies
- Automatically transition objects between storage classes
- Delete objects after specified time
- Cost optimization
- Automated management

### Encryption
- Server-side encryption (SSE-S3, SSE-KMS, SSE-C)
- Client-side encryption
- Default encryption
- TLS in transit

### Access Control
- Bucket policies
- IAM policies
- ACLs (legacy)
- Block Public Access

### Replication
- Cross-Region Replication (CRR)
- Same-Region Replication (SRR)
- Disaster recovery
- Compliance requirements

## Performance

### Request Rate
- S3 can scale to high request rates
- No performance limits per prefix
- Automatic scaling
- Consistent performance

### Transfer Acceleration
- Faster uploads/downloads globally
- Edge locations
- Additional cost
- Use case: global user base

### Multipart Upload
- Upload large files efficiently
- Parallel uploads
- Resume capability
- Required for files > 100 MB

## Pricing Model

### Storage Costs
- Varies by storage class
- Per GB per month
- Tiered pricing
- Free tier available

### Request Costs
- PUT, GET, LIST requests
- Varies by storage class
- Per 1,000 requests
- Different pricing for different operations

### Data Transfer
- Internet data transfer out
- Cross-region replication
- Transfer within AWS is free
- Free tier for first 100 GB/month

## Best Practices

### Naming
- Use consistent naming conventions
- Avoid special characters
- Use prefixes for organization
- Consider DNS compliance

### Security
- Enable encryption by default
- Use bucket policies
- Block public access
- Monitor with CloudTrail

### Performance
- Use multipart uploads
- Optimize key names
- Use appropriate storage classes
- Enable transfer acceleration

### Cost Management
- Use lifecycle policies
- Choose appropriate storage classes
- Monitor usage
- Use S3 Inventory

## Use Cases

### Static Website Hosting
- Host static websites
- Custom domain support
- SSL certificates
- Global distribution with CloudFront

### Data Backup
- Backup and archive
- Cross-region replication
- Lifecycle policies
- Cost-effective storage

### Big Data Analytics
- Data lake storage
- Integration with AWS analytics
- High throughput
- Scalable storage

### Content Distribution
- Media storage
- Global distribution
- CDN integration
- Streaming support

S3 is the foundation of many AWS services and is essential for understanding cloud storage. Its scalability, durability, and feature set make it suitable for virtually any storage need.`,
          type: 'document',
          order: 1,
          tags: ['s3', 'storage', 'objects'],
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
