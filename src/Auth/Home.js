import React from "react";
import Layout from '../components/Layout/Layout';
import Screens from '../containers/Screens/Screens';

const Home = () => {
  return (
    <>
      <div>
        <Layout>
          <Screens />
        </Layout>
      </div>
    </>
  );
};

export default Home;