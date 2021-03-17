import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';

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

const params = { Bucket: `${REACT_APP_BUCKET_NAME}`, Key: 'Test' };

const client = new S3Client({
  credentials: loginParams,
  region: REACT_APP_AWS_REGION,
});

export const getFile = async () => {
  try {
    const data = await client.send(new GetObjectCommand(params));
    console.log('Success, bucket returned', data);
  } catch (err) {
    console.log('Error', err);
  }
};
