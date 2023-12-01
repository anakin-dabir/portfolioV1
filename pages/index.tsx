// /pages/index.tsx
// Friday, December 1st 2023, 4:59 am

import Head from 'next/head';
import {GetStaticProps} from 'next';
import HeroSection from '../components/Hero';
import AboutSection from '../components/About';
import PortfolioSection from '../components/Portfolio';
import ContactSection from '../components/Contact';

export const getStaticProps: GetStaticProps = async () => {
  const response = await import(`../data/data.json`);

  return {
    props: {
      content: response.default,
    },
  };
};

export default function Index({content}: {content: typeof import('../data/data.json')}) {
  const {defaultSeo, heroData, aboutData, portfolioData, contactData} = content;
  const {title, description, url, previewImage} = defaultSeo;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name='description' />
        <meta content='portfolio' name='keywords' />
        <meta content='English' name='language' />
        <meta key='ogtitle' content={title} property='og:title' />
        <meta key='ogdesc' content={description} property='og:description' />
        <meta content='website' property='og:type' />
        <meta key='ogurl' content={url} property='og:url' />
        <meta key='ogimage' content={previewImage} property='og:image' />
      </Head>
      <HeroSection heroData={heroData} />
      <AboutSection aboutData={aboutData} />
      <PortfolioSection portfolioData={portfolioData} />
      <ContactSection contactData={contactData} />
    </>
  );
}
