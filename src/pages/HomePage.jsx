import React, { useRef } from 'react';
import Hero from '../components/Hero';
import Pillars from '../components/Pillars';
import Dispatches from '../components/Dispatches';
import Carousel from '../components/Carousel';
import BooksArchive from '../components/BooksArchive';
import CtaBanner from '../components/CtaBanner';

export default function HomePage() {
  const heroRef = useRef(null);

  return (
    <>
      <Hero heroRef={heroRef} />
      <Pillars />
      <Dispatches />
      <Carousel />
      <BooksArchive />
      <CtaBanner />
    </>
  );
}
