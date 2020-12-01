import React from 'react';
import Banner from './Banner';
import Navbar from './Navbar';
import BannerRight from './BannerRight';
import Page from './Page';
export default function Home() {
  return (
    <Page>
      <Navbar />
      <div className="ct-container__banner" id="home">
        <Banner />
        <BannerRight />
      </div>
    </Page>
  );
}
