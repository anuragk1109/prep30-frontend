import { Subject } from '@/types/study-material';

export const iamContent: Subject = {
  id: 'aws-subject-2',
  slug: 'identity-access-management-iam',
  title: 'Identity & Access Management (IAM)',
  description: 'Security foundation (MOST IMPORTANT)',
  order: 2,
  chapters: [
    {
      id: 'aws-chapter-2-1',
      slug: 'iam-users-groups-roles',
      title: 'IAM Users, Groups, Roles',
      description: 'Understanding IAM principals',
      order: 1,
      topics: [
        {
          id: 'aws-topic-2-1-1',
          slug: 'iam-principals',
          title: 'IAM Principals Overview',
          description: 'Users, groups, and roles in AWS IAM',
          content: `# IAM Principals: Users, Groups, and Roles

## Overview

AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources. You use IAM to control who is authenticated (signed in) and authorized (has permissions) to use resources.

## IAM Users

### What are IAM Users?
IAM users are entities you create in AWS that represent applications or people. Each IAM user has a unique identity and can be given permissions to access AWS resources.

### Characteristics
- Permanent identity
- Can have long-term credentials (access keys, passwords)
- Can be assigned permissions directly or through groups
- Maximum of 5,000 IAM users per AWS account

### Use Cases
- Individual team members who need AWS access
- Applications running on-premise that need AWS access
- Third-party services requiring programmatic access

### Best Practices
- Create individual IAM users for each person
- Don't use the root account for daily tasks
- Assign minimum necessary permissions

## IAM Groups

### What are IAM Groups?
IAM groups are collections of IAM users. Groups let you specify permissions for multiple users, which can make those permissions easier to manage for those users.

### Characteristics
- Can contain multiple users
- Users can belong to multiple groups
- Groups can't contain other groups (no nesting)
- Groups don't have their own credentials

### Benefits
- Simplified permission management
- Consistent permissions across team members
- Easy to add/remove users from teams
- Reduced administrative overhead

### Use Cases
- Department-based access (DevOps, Finance, Marketing)
- Project-based teams
- Role-based access patterns

## IAM Roles

### What are IAM Roles?
IAM roles are secure identities that can be assumed by trusted entities to gain temporary access to AWS resources.

### Characteristics
- Temporary credentials
- No long-term credentials
- Can be assumed by users, applications, or AWS services
- Include trust policies and permission policies

### Trust Policy
Defines who can assume the role:
- AWS services (EC2, Lambda, etc)
- Other AWS accounts
- External identities (SAML, Active Directory)
- IAM users

### Permission Policy

Defines what the assumed role can do

### Use Cases
- **AWS Services**:acs2**: EC2 instances accessing Organizing AWS
-: Lambda functions
oretical applications
-- **Cross-Account Access**: Grant access to resources in other accounts
- **Federation**: External users access AWS without IAM users
- **Temporary Access**: Short-term elevated permissions

## Comparison: Users vs Roles

| Aspect | IAM Users | IAM Roles |
|--------|-----------|-----------|
| **Credentials** | Long-term | Temporary |
| **Usage** | People, on-premise apps | AWS services, temporary access |
| **Security** | Higher risk (static credentials) | Lower risk (rotating credentials) |
| **Management** | Manual credential rotation | Automatic credential rotation |
| **Best For** | Long-term access needs | Short-term or service access |

## Best Practices

### For Users
1. **Individual Accounts**: Create separate IAM users for each person
2. **Strong Passwords**: Enforce complex password policies
3. **MFA**: Enable multi-factor authentication
4. **Access Keys**: Rotate regularly and don't embed in code

### For Groups
1. **Logical Grouping**: Group users by function or department
2. **Consistent Permissions**: Apply permissions at group level
3. **Regular Review**: Audit group memberships regularly
4. **Naming Conventions**: Use clear, descriptive group names

### For Roles
1. **Least Privilege**: Grant only necessary permissions
2. **Trust Policies**: Limit who can assume the role
3. **Session Duration**: Set appropriate session timeouts
4. **Monitoring**: Log role assumption activities

## Implementation Examples

### Creating a Developer Group
\`\`\`json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ec2:*",
        "s3:*",
        "rds:*"
      ],
      "Resource": "*"
    }
  ]
}
\`\`\`

### Creating an EC2 Service Role
\`\`\`json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "ec2.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
\`\`\`

## Common Mistakes to Avoid

1. **Shared IAM Users**: Don't share user credentials
2. **Root Account Usage**: Never use root for daily operations
3. **Over-privileged Roles**: Grant only necessary permissions
4. **Hard-coded Credentials**: Never embed access keys in code
5. **Unused Entities**: Regularly clean up unused users, groups, and roles

Understanding IAM principals is fundamental to securing your AWS environment. Proper use of users, groups, and roles ensures that the right entities have the right access to the right resources at the right time.`,
          type: 'document',
          order: 1,
          tags: ['iam', 'users', 'groups', 'roles'],
          createdAt: '2024-01-01',
          updatedAt: '2024-01-01'
        }
      ],
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01'
    },
    {
      id: 'aws-chapter-2-2',
      slug: 'iam-policies-json',
      title: 'Policies (JSON)',
      description: 'Understanding IAM policy structure',
      order: 2,
      topics: [
        {
          id: 'aws-topic-2-2-1',
          slug: 'policy-structure',
          title: 'IAM Policy Structure',
          description: 'JSON policy documents and their components',
          content: `# IAM Policy Structure and JSON Format

## Overview

IAM policies are JSON documents that define permissions. They specify what actions are allowed or denied on which resources under what conditions.

## Policy Structure

### Basic Policy Elements
\`\`\`json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Statement1",
      "Effect": "Allow",
      "Principal": {"AWS": "arn:aws:iam::123456789012:user/John"},
      "Action": ["s3:GetObject"],
      "Resource": ["arn:aws:s3:::mybucket/*"],
      "Condition": {"StringEquals": {"s3:prefix": "public/"}}
    }
  ]
}
\`\`\`

## Policy Elements Explained

### Version
Specifies the policy language version. Always use \`"2012-10-17"\` for current features.

### Statement
Contains one or more individual statements. Each statement defines specific permissions.

### Sid (Statement ID)
Optional identifier for the statement. Used for documentation and management.

### Effect
Required element that specifies whether the statement allows or denies access.
- \`"Allow"\`: Grants permission
- \`"Deny"\`: Explicitly denies permission (overrides allow)

### Principal
Specifies who is allowed or denied access. Not used in identity-based policies.

#### Examples:
\`\`\`json
// Specific IAM user
"Principal": {"AWS": "arn:aws:iam::123456789012:user/John"}

// AWS account
"Principal": {"AWS": "123456789012"}

// AWS service
"Principal": {"Service": "ec2.amazonaws.com"}

// Multiple principals
"Principal": {
  "AWS": ["arn:aws:iam::123456789012:user/John", "arn:aws:iam::123456789012:user/Jane"],
  "Service": "ec2.amazonaws.com"
}
\`\`\`

### Action
Specifies the API actions that are allowed or denied.

#### Examples:
\`\`\`json
// Single action
"Action": "s3:GetObject"

// Multiple actions
"Action": ["s3:GetObject", "s3:PutObject"]

// All actions in a service
"Action": "s3:*"

// All AWS actions (use carefully)
"Action": "*"
\`\`\`

### Resource
Specifies the resources that the statement applies to. ARN format is used.

#### ARN Format:
\`\`\`
arn:partition:service:region:account-id:resource-type/resource-id
\`\`\`

#### Examples:
\`\`\`json
// Specific S3 bucket
"Resource": "arn:aws:s3:::mybucket"

// Specific S3 object
"Resource": "arn:aws:s3:::mybucket/myfile.txt"

// All objects in a bucket
"Resource": "arn:aws:s3:::mybucket/*"

// Multiple resources
"Resource": [
  "arn:aws:s3:::mybucket",
  "arn:aws:s3:::mybucket/*"
]
\`\`\`

### Condition
Specifies conditions for when the policy is in effect.

#### Common Condition Keys:
\`\`\`json
// Time-based condition
"Condition": {
  "DateGreaterThan": {"aws:CurrentTime": "2024-01-01T00:00:00Z"},
  "DateLessThan": {"aws:CurrentTime": "2024-12-31T23:59:59Z"}
}

// IP address condition
"Condition": {
  "IpAddress": {"aws:SourceIp": ["203.0.113.0/24", "198.51.100.0/24"]}
}

// MFA condition
"Condition": {
  "Bool": {"aws:MultiFactorAuthPresent": "true"}
}

// String condition
"Condition": {
  "StringEquals": {"s3:prefix": ["public/", "shared/"]}
}
\`\`\`

## Policy Types

### Identity-Based Policies
Attached to IAM users, groups, or roles. Specify what those identities can do.

### Resource-Based Policies
Attached to resources (S3 buckets, SQS queues). Specify who can access the resource.

### Permissions Boundaries
Limits the maximum permissions an identity can have.

### Organizations SCPs
Service Control Policies that set maximum permissions for accounts in an organization.

## Policy Evaluation Logic

### Request Evaluation
When a request is made, AWS evaluates all applicable policies:

1. **Explicit Deny**: Any explicit deny in any policy = DENY
2. **Allow**: Any allow in identity-based OR resource-based policy = ALLOW
3. **Default Deny**: If no allow found = DENY

### Order of Operations
1. Check for explicit deny statements
2. Check for explicit allow statements
3. Default deny if no allow found

## Best Practices

### Principle of Least Privilege
- Grant only necessary permissions
- Use specific resources instead of "*"
- Use specific actions instead of "*"

### Policy Organization
- Use meaningful SIDs for documentation
- Group related actions together
- Use consistent formatting

### Testing Policies
- Use IAM policy simulator
- Test with least privileged user
- Monitor policy usage with CloudTrail

## Example Policies

### Read-Only S3 Access
\`\`\`json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowS3ReadOnly",
      "Effect": "Allow",
      "Action": [
        "s3:Get*",
        "s3:List*"
      ],
      "Resource": [
        "arn:aws:s3:::mybucket",
        "arn:aws:s3:::mybucket/*"
      ]
    }
  ]
}
\`\`\`

### Time-Based Access
\`\`\`json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowBusinessHoursAccess",
      "Effect": "Allow",
      "Action": "*",
      "Resource": "*",
      "Condition": {
        "DateGreaterThan": {"aws:CurrentTime": "2024-01-01T09:00:00Z"},
        "DateLessThan": {"aws:CurrentTime": "2024-01-01T17:00:00Z"},
        "IpAddress": {"aws:SourceIp": "203.0.113.0/24"}
      }
    }
  ]
}
\`\`\`

### S3 Bucket Policy
\`\`\`json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowPublicRead",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::mybucket/public/*"
    },
    {
      "Sid": "DenyInsecureConnections",
      "Effect": "Deny",
      "Principal": "*",
      "Action": "s3:*",
      "Resource": "arn:aws:s3:::mybucket/*",
      "Condition": {
        "Bool": {"aws:SecureTransport": "false"}
      }
    }
  ]
}
\`\`\`

## Common Policy Mistakes

1. **Overly Permissive**: Using "*" for actions and resources
2. **Missing Conditions**: Not restricting access when needed
3. **Conflicting Statements**: Having both allow and deny for same action
4. **Incorrect ARNs**: Using wrong resource formats
5. **Missing Version**: Not specifying policy language version

Understanding IAM policy structure is essential for implementing proper security controls in AWS. Well-crafted policies ensure that users and services have exactly the permissions they need, nothing more.`,
          type: 'document',
          order: 1,
          tags: ['iam', 'policies', 'json', 'permissions'],
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
