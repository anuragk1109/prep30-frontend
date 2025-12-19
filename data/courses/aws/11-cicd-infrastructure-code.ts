import { Subject } from '@/types/study-material';

export const cicdContent: Subject = {
  id: 'aws-subject-11',
  slug: 'cicd-infrastructure-code',
  title: 'CI/CD & Infrastructure as Code',
  description: 'Automate everything',
  order: 11,
  chapters: [
    {
      id: 'aws-chapter-11-1',
      slug: 'cloudformation',
      title: 'CloudFormation',
      description: 'Infrastructure as Code service',
      order: 1,
      topics: [
        {
          id: 'aws-topic-11-1-1',
          slug: 'cloudformation-overview',
          title: 'CloudFormation Overview',
          description: 'Understanding IaC with AWS',
          content: `# AWS CloudFormation Overview

## What is AWS CloudFormation?

AWS CloudFormation is a service that helps you model and set up your Amazon Web Services resources so that you can spend less time managing those resources and more time focusing on your applications that run in AWS.

## Key Concepts

### Templates
- JSON or YAML format
- Declarative syntax
- Resource definitions
- Parameterization

### Stacks
- Collection of resources
- Managed as a unit
- Lifecycle management
- State tracking

### Change Sets
- Preview changes
- Safety mechanism
- Impact analysis
- Approval workflow

### Drift Detection
- Configuration changes
- Manual modifications
- Compliance checking
- Remediation

## Template Structure

### Template Format Version
- Latest version: "2010-09-09"
- Backward compatibility
- Feature availability
- Required field

### Description
- Template documentation
- Usage instructions
- Resource overview
- Best practices

### Parameters
- Input values
- Type constraints
- Default values
- Validation rules

### Mappings
- Lookup tables
- Conditional values
- Environment-specific
- Region mapping

### Conditions
- Conditional resources
- Parameter-based logic
- Environment logic
- Feature flags

### Resources
- AWS resource definitions
- Resource properties
- Dependencies
- References

### Outputs
- Stack information
- Resource IDs
- Configuration values
- Export values

## Template Sections

### Parameters Section
\`\`\`yaml
Parameters:
  Environment:
    Type: String
    Default: dev
    AllowedValues: [dev, staging, prod]
    Description: Environment name
  
  InstanceType:
    Type: String
    Default: t3.micro
    AllowedValues: [t3.micro, t3.small, t3.medium]
    Description: EC2 instance type
\`\`\`

### Resources Section
\`\`\`yaml
Resources:
  MyEC2Instance:
    Type: AWS::EC2::Instance
    Properties:
      InstanceType: !Ref InstanceType
      ImageId: ami-0c55b159cbfafe1f0
      SecurityGroups:
        - !Ref MySecurityGroup
  
  MySecurityGroup:
    Type: AWS::EC2::SecurityGroup
    Properties:
      GroupDescription: Enable HTTP access
      SecurityGroupIngress:
        - IpProtocol: tcp
          FromPort: 80
          ToPort: 80
          CidrIp: 0.0.0.0/0
\`\`\`

### Outputs Section
\`\`\`yaml
Outputs:
  InstanceId:
    Description: The Instance ID
    Value: !Ref MyEC2Instance
    Export:
      Name: !Sub "\${AWS::StackName}-InstanceId"
  
  PublicIP:
    Description: Public IP address
    Value: !GetAtt MyEC2Instance.PublicIp
\`\`\`

## Intrinsic Functions

### Ref
- Parameter references
- Pseudo parameters
- Resource references
- Output values

### GetAtt
- Resource attributes
- Dynamic values
- Runtime resolution
- Resource properties

### Join
- String concatenation
- Array joining
- Delimiter support
- Dynamic strings

### Sub
- Variable substitution
- String interpolation
- Parameter injection
- Resource references

### Condition
- Conditional logic
- Boolean evaluation
- Resource inclusion
- Value selection

## Stack Operations

### Create Stack
- Initialize resources
- Validate template
- Create dependencies
- Return outputs

### Update Stack
- Modify resources
- Handle changes
- Preserve state
- Update dependencies

### Delete Stack
- Remove resources
- Clean up dependencies
- Delete state
- Free resources

### Rollback Stack
- Error recovery
- Previous state
- Failure handling
- Cleanup operations

## Change Sets

### Creating Change Sets
- Compare templates
- Identify changes
- Preview impacts
- Safety check

### Executing Change Sets
- Apply changes
- Update resources
- Handle dependencies
- Monitor progress

### Managing Change Sets
- Multiple change sets
- Version control
- Approval workflow
- Documentation

## Best Practices

### Template Design
- Modular templates
- Reusable components
- Parameterization
- Documentation

### Resource Management
- Logical naming
- Resource tagging
- Dependency management
- Resource limits

### Security
- Least privilege
- IAM roles
- Resource policies
- Security groups

### Cost Management
- Resource tagging
- Cost allocation
- Resource cleanup
- Budget tracking

## Advanced Features

### Nested Stacks
- Template composition
- Modular architecture
- Reusable components
- Separation of concerns

### Drift Detection
- Configuration changes
- Manual modifications
- Compliance checking
- Automated remediation

### Stack Policies
- Update prevention
- Resource protection
- Change control
- Compliance enforcement

### Cross-Stack References
- Stack communication
- Resource sharing
- Output exports
- Value imports

## Integration with AWS Services

### CodePipeline
- Automated deployments
- Pipeline stages
- Approval workflows
- Testing integration

### CodeBuild
- Template validation
- Testing automation
- Build automation
- Quality checks

### CodeCommit
- Version control
- Template storage
- Change tracking
- Collaboration

### AWS SAM
- Serverless applications
- Simplified syntax
- Local testing
- Deployment automation

## Use Cases

### Infrastructure Provisioning
- Environment setup
- Resource creation
- Configuration management
- Standardization

### Application Deployment
- Application stacks
- Dependency management
- Environment replication
- Continuous deployment

### Disaster Recovery
- Backup infrastructure
- Recovery procedures
- Testing validation
- Automation

### Compliance and Governance
- Standardized templates
- Policy enforcement
- Audit trails
- Change control

CloudFormation enables you to manage infrastructure as code, providing consistency, repeatability, and automation for your AWS resources. It's essential for DevOps practices and cloud operations.`,
          type: 'document',
          order: 1,
          tags: ['cloudformation', 'iac', 'automation'],
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
