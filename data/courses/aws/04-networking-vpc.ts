import { Subject } from '@/types/study-material';

export const networkingContent: Subject = {
  id: 'aws-subject-4',
  slug: 'networking-vpc',
  title: 'Networking (VPC & Connectivity)',
  description: 'Control traffic flow',
  order: 4,
  chapters: [
    {
      id: 'aws-chapter-4-1',
      slug: 'vpc-fundamentals',
      title: 'VPC Fundamentals',
      description: 'Virtual Private Cloud basics',
      order: 1,
      topics: [
        {
          id: 'aws-topic-4-1-1',
          slug: 'vpc-overview',
          title: 'VPC Overview',
          description: 'Understanding Virtual Private Cloud',
          content: `# Amazon VPC Overview

## What is Amazon VPC?

Amazon Virtual Private Cloud (VPC) is the fundamental networking layer in AWS. It enables you to launch AWS resources into a virtual network that you've defined. This virtual network closely resembles a traditional network that you'd operate in your own data center, with the benefits of using the scalable infrastructure of AWS.

## Key Concepts

chirp

 
### Virtual Network 
A V在不断发展的技术环境中 
network that you control

### Isolation
Logically isolated from other virtual networks in the AWS cloud

### Customization
Complete control over your network environment

### Security
Multiple layers of security including network access control

## VPC Components

### VPC
The main container for your network  network resources

和B
-伤痕累累
.
### Subnets
',
          type	segments of yourí
- ";
          type 
### Route Tables
croft
Determine 
### Internet Gateway
Connects VPC to internet

### NAT Gateway
Enables instances in private subnet to connect to internet

### Security Groups
Instance-level firewall

### Network ACLs
Subnet-level firewall

## CIDR Blocks

### Private IP Ranges
- 10.0.0.0/8
- 172.16.0.0/12  
- 192.168.0.0/16

### Sizing
- /16 to /28
- Maximum 65,536 private IPs (/16)
- Minimum 16 private IPs (/28)

## Subnet Types

### Public Subnets
- Have route to Internet Gateway
- Can have public IP addresses
- Used for web servers, load balancers

### Private Subnets
- No direct route to Internet Gateway
- Use NAT Gateway for outbound access
- Used for databases, application servers

## Security Layers

### Network ACLs
- Stateless filtering
- Subnet level
- Allow/deny rules
- Rule numbers determine priority

### Security Groups
- Stateful filtering
- Instance level
- Allow only (no deny)
- Implicit deny all

## Best Practices

### Planning
- Plan IP addressing carefully
- Use multiple AZs for high availability
- Separate environments by VPC

### Security
- Use security groups for instance protection
- Use Network ACLs for subnet protection
- Enable VPC Flow Logs

### Connectivity
- Use VPC Peering for VPC-to-VPC
- Use Transit Gateway for many VPCs
- Use VPN/Direct Connect for on-premise

## Use Cases

### Web Applications
- Public subnets for web servers
- Private subnets for databases
- Multiple AZs for high availability

### Hybrid Cloud
- VPN connection to on-premise
- Direct Connect for high bandwidth
- Consistent IP addressing

### Multi-Tier Applications
- Web tier in public subnets
- Application tier in private subnets
- Database tier in private subnets

VPC is essential for building secure, scalable applications in AWS. Understanding VPC fundamentals is critical for AWS certification and real-world deployments.`,
          type: 'document',
          order: 1,
          tags: ['vpc', 'networking', 'virtual-network'],
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
