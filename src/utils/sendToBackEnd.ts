import axios from 'axios';

import { REACT_APP_BACKEND_GRAPHQL_ENDPOINT } from '../envVarConfig';

export const sendToBackEnd = async (
  slackId: string,
  responseUrl: string,
  audioUrl: string
) => {
  await axios.post(`${REACT_APP_BACKEND_GRAPHQL_ENDPOINT}`, {
    query: `mutation {
    createNote(slackID: "${slackId}", responseUrl: "${responseUrl}", audioUrl: "${audioUrl}"){responseUrl}
  }`,
  });
};
