import React from "react";
import "../styles/index.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import TextSection from "../components/TextSection";
import GridList from "../components/GridList";
import Section from "../components/Section";
import { Helmet } from "react-helmet";
import GridCol from "../components/GridCol";
import AnimatedTitle from "../components/AnimatedTitle";
import HighlightedIcon from "../components/HighlightedIcon";

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
        <AnimatedTitle className="title--big">
          We make software that works.
        </AnimatedTitle>
      </GridCol>
    </Section>
    <Section>
      <GridCol className="sm12 md6">
        <AnimatedTitle>We are Lynx.</AnimatedTitle>
      </GridCol>
      <GridCol className="sm12 md6">
        <p>
          Founded by <a href="https://github.com/ThePicoNerd">@ThePicoNerd</a>{" "}
          in Stockholm in 2015, we help people and businesses with everything
          software. We mean it. Need a new, stunning website? No problem. Want
          to develop a mobile app, too? Well, we don't know how to do it{" "}
          <i>yet</i>, but we are always learning! Tell us about your idea and we
          promise to try our best to make it happen.
        </p>
      </GridCol>
    </Section>
    <Section>
      <GridCol className="sm12 md4">
        <HighlightedIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
            <line x1="6" y1="6" x2="6" y2="6" />
            <line x1="6" y1="18" x2="6" y2="18" />
          </svg>
        </HighlightedIcon>
        <h2>Modern, managed infrastructure</h2>
        <p>
          Are servers loud and scary? No problem, we'll host everything on
          modern clouds like Google Cloud and DigitalOcean.
        </p>
      </GridCol>
      <GridCol className="sm12 md4">
        <HighlightedIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="4" />
            <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
            <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
            <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
            <line x1="14.83" y1="9.17" x2="18.36" y2="5.64" />
            <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
          </svg>
        </HighlightedIcon>
        <h2>Fast support</h2>
        <p>
          You are important to us. That is why we are happy to help you, and
          always ready to fix bugs in the middle of the night, should you find
          any.
        </p>
      </GridCol>
      <GridCol className="sm12 md4">
        <HighlightedIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 9.9-1" />
          </svg>
        </HighlightedIcon>
        <h2>Open software</h2>
        <p>Any software that we sell to you comes with the source code, allowing you to modify and upgrade it down the road.</p>
      </GridCol>
    </Section>
    <Section>
      <TextSection className="sm12 md6" title="This is our toolbox.">
        <p>
          We work with tools we like, and we are always trying to improve. If
          you have a project on your mind involving a tool not listed above, we
          will of course <i>at least</i> attempt to learn it.
        </p>
      </TextSection>
      <div className="sm12 md6">
        <GridList
          cols="3"
          items={[
            ".NET Core",
            "C#",
            "CSS",
            "Docker",
            "DigitalOcean",
            "Firebase",
            "GitLab",
            "Google Cloud Platform",
            "gRPC",
            "GTFS",
            "HTML",
            "JavaScript",
            "Kubernetes",
            "Node.js",
            "PostgreSQL",
            "React",
            "Redis",
            "SQL",
            "TypeScript",
          ]}
        />
      </div>
    </Section>
    <Section>
      <TextSection
        className="sm12 md6"
        title="Ready to start your new project?"
      >
        <p>
          We are thrilled to help you with your new, groundbreaing idea. Send us
          an email or use the form to get in touch. We will reply as soon as
          possible!
        </p>
        <p>
          <u>hi@lynx.agency</u>
        </p>
      </TextSection>
      <div className="sm12 md6">
        <form action="https://formspree.io/hi@lynx.agency" method="POST">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="sm12 lg6"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="sm12 lg6"
            required
          />
          <textarea
            name="description"
            placeholder="Tell us about your idea!"
            className="sm12"
            required
          ></textarea>
          <GridCol className="sm12">
            <input type="submit" value="Send" />
          </GridCol>
        </form>
      </div>
    </Section>
    <div className="footer">
      <p>
        © 2019 Lynx · <a href="https://blog.lynx.agency">Blog</a>
      </p>
    </div>
  </ParallaxProvider>
);
