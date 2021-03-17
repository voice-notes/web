const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');

const loginParams = {
  endpoint: 'https://voice-notes-development.s3.eu-west-2.amazonaws.com',
  accessKeyId: 'AKIAU3C3QWRSTDBG6GYS',
  secretAccessKey: '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',
  s3BucketEndpoint: true,
};

const params = { Bucket: 'voice-notes-development', Key: 'Test' };

const client = new S3Client({ credentials: loginParams, region: 'eu-west-2' });

const run = async () => {
  try {
    const data = await client.send(new GetObjectCommand(params));
    console.log('Success, bucket returned', data);
  } catch (err) {
    console.log('Error', err);
  }
};
run();
