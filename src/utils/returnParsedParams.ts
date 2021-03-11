import queryString from 'query-string';

export const returnParsedParams = () => {
  const params = window.location.search;
  return queryString.parse(params);
};
