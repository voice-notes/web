// Import required AWS SDK clients and commands for Node.js
const { S3Client, ListObjectsCommand } = require('@aws-sdk/client-s3');

// Set the AWS region

const loginParams = {
  endpoint: 'https://voice-notes-development.s3.eu-west-2.amazonaws.com',
  accessKeyId: 'AKIAU3C3QWRSTDBG6GYS',
  secretAccessKey: '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',
  s3BucketEndpoint: true,
};

// Create the parameters for the bucket
const bucketParams = { Bucket: 'voice-notes-development' };

// Create S3 service object
const client = new S3Client({ credentials: loginParams, region: 'eu-west-2' });

const run = async () => {
  try {
    const data = await client.send(new ListObjectsCommand(bucketParams));
    console.log('Success', data);
  } catch (err) {
    console.log('Error', err);
  }
};
run();
