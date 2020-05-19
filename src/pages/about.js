import React from 'react';
import { graphql } from 'gatsby';

import {
  Button,
  HeaderBack,
  HeadingXL,
  Image,
  Layout,
  SEO,
  TextBody,
} from '../components';

const About = ({ data }) => {
  return (
    <>
      <SEO title="About" />
      <HeaderBack />
      <Layout>
        <HeadingXL>About</HeadingXL>
        <Image fluid={data.RandomPhoto.childImageSharp.fluid} />
        <TextBody>
          I am Aur and I made this blog to write about money. 
          This project is about how I spend, save and invest. It is loosely
          based on Refinery29's Money Diaries though it is more of a permanent
          installation and revolves mostly around me.
          <br />
          <br />
           Blogging and budgeting aren't the same but I decided to keep this
           record to get out some energy and look for patterns
           that have helped me get to where I am.
           I hope this will be a good resource to anyone out there. 
        </TextBody>
        <Button href="mailto:sukhikgr@gmail.com">Get in touch</Button>
      </Layout>
    </>
  );
};

export default About;

export const query = graphql`
  query {
    RandomPhoto: file(relativePath: { eq: "assets/images/RandomPhoto.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
