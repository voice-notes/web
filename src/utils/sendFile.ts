import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

import {
  REACT_APP_AWS_ENDPOINT,
  REACT_APP_AWS_ACCESS_KEY_ID,
  REACT_APP_AWS_SECRET_ACCESS_KEY,
  REACT_APP_BUCKET_NAME,
} from '../envVarConfig';

const loginParams = {
  endpoint: `${REACT_APP_AWS_ENDPOINT}`,
  accessKeyId: `${REACT_APP_AWS_ACCESS_KEY_ID}`,
  secretAccessKey: `${REACT_APP_AWS_SECRET_ACCESS_KEY}`,
  s3BucketEndpoint: true,
};

const client = new S3Client({ credentials: loginParams, region: 'eu-west-2' });

export const sendFile = async (file: Blob, slackId: string) => {

  const uploadParams = {
    Bucket: `${REACT_APP_BUCKET_NAME}`,
    Key: `${slackId}@${Date.now()}`,
    Body: file
  };

  try {
    const file = new PutObjectCommand(uploadParams);
    const data = await client.send(file);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
