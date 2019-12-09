import React from 'react'
import ReactMarkdown from "react-markdown"

import { getApi } from '../lib/api-mock';

const Api = ({ title, content }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ReactMarkdown source={content} />
    </div>
  );
};

Api.getInitialProps = async ({ query }) => {
  const api = await getApi(query.apiId);
  return { ...api.attributes, content: api.body };
}

export default Api
