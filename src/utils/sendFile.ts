import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

import {
  REACT_APP_AWS_ENDPOINT,
  REACT_APP_AWS_ACCESS_KEY_ID,
  REACT_APP_AWS_SECRET_ACCESS_KEY,
  REACT_APP_BUCKET_NAME,
  REACT_APP_AWS_REGION,
} from '../envVarConfig';

const loginParams = {
  endpoint: `${REACT_APP_AWS_ENDPOINT}`,
  accessKeyId: `${REACT_APP_AWS_ACCESS_KEY_ID}`,
  secretAccessKey: `${REACT_APP_AWS_SECRET_ACCESS_KEY}`,
  s3BucketEndpoint: true,
};

const client = new S3Client({
  credentials: loginParams,
  region: REACT_APP_AWS_REGION,
});

export const sendFile = async (file: any, slackId: string, keyName: string) => {
  console.log(slackId);
  const uploadParams = {
    Bucket: `${REACT_APP_BUCKET_NAME}`,
    Key: keyName,
    Body: file.blob,
    ContentType: 'audio/wav',
    ACL: 'public-read',
  };
  try {
    const file = new PutObjectCommand(uploadParams);
    const data = await client.send(file);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
