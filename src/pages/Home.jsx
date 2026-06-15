import React from 'react';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import PopularCategories from '../components/PopularCategories';
import PromoSection from '../components/PromoSection';
import TodaysDeals from '../components/TodaysDeals';
import WhyChooseUs from '../components/WhyChooseUs';
import ReviewsSection from '../components/Reviews';
import Stats from '../components/Stats';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <PopularCategories />
      <PromoSection />
      <TodaysDeals />
      <WhyChooseUs />
      <ReviewsSection />
      <Stats />
      <Newsletter />
    </div>
  );
};

export default Home;