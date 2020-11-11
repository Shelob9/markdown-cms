import * as React from 'react';
import Layout from './Layout/Layout';

const FrontEndLayout = ({ children,title }) => {
  return (
    <Layout title={title}>
      { children }
    </Layout>
  )
}

export default FrontEndLayout;
