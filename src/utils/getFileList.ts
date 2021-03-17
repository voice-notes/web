import { S3Client, ListObjectsCommand } from '@aws-sdk/client-s3';

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

const bucketParams = { Bucket: `${REACT_APP_BUCKET_NAME}` };

const client = new S3Client({
  credentials: loginParams,
  region: `${REACT_APP_AWS_REGION}`,
});

export const getFileList = async () => {
  try {
    const data = await client.send(new ListObjectsCommand(bucketParams));
    console.log('Success', data);
  } catch (err) {
    console.log('Error', err);
  }
};
