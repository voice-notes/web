const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');

const loginParams = {
  endpoint: 'https://voice-notes-development.s3.eu-west-2.amazonaws.com',
  accessKeyId: 'AKIAU3C3QWRSTDBG6GYS',
  secretAccessKey: '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',
  s3BucketEndpoint: true,
};

const uploadParams = {
  Bucket: 'voice-notes-development',
  Key: 'Test',
  Body: 'this is the body',
};

const client = new S3Client({ credentials: loginParams, region: 'eu-west-2' });

async function send() {
  try {
    const file = new PutObjectCommand(uploadParams);
    const data = await client.send(file);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

send();
