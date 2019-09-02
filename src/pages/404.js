import React from "react";
import "../styles/index.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import Section from "../components/Section";
import { Helmet } from "react-helmet";
import GridCol from "../components/GridCol";
import AnimatedTitle from "../components/AnimatedTitle";

export default () => (
  <ParallaxProvider>
    <Helmet>
      <title>Lynx | Stockholm Software Agency</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      ></link>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      ></link>
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      ></link>
      <link rel="manifest" href="/site.webmanifest"></link>
      <link
        rel="mask-icon"
        href="/safari-pinned-tab.svg"
        color="#222222"
      ></link>
      <meta name="msapplication-TileColor" content="#da532c"></meta>
      <meta name="theme-color" content="#ffffff"></meta>
    </Helmet>
    <Section className="full-height section--center-v">
      <GridCol className="sm12 lg6">
        <AnimatedTitle className="title--big">Page not found</AnimatedTitle>
        <a href="/">Go back</a>
      </GridCol>
    </Section>
  </ParallaxProvider>
);
