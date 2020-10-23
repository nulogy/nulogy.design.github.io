import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { Title, Box, theme } from "@nulogy/components";
import styled from "styled-components";
import { Intro, IntroText, Layout } from "../components";

const MarkdownStyles = styled(Box)({
  color: theme.colors.black,

  h1: {
    fontWeight: theme.fontWeights.light,
    marginTop: 0,
    marginBottom: theme.space.x6,
    fontSize: theme.fontSizes.heading1,
    lineHeight: theme.lineHeights.heading1,
    fontWeight: theme.fontWeights.light
  },

  h2: {
    marginTop: "24px",
    marginBottom: theme.space.x1,
    fontSize: theme.fontSizes.heading2,
    lineHeight: theme.lineHeights.heading2,
    fontWeight: theme.fontWeights.normal
  },

  h3: {
    marginTop: "24px",
    marginBottom: theme.space.x1,
    fontSize: theme.fontSizes.heading3,
    lineHeight: theme.lineHeights.heading3,
    fontWeight: theme.fontWeights.medium
  },

  h4: {
    marginTop: "24px",
    marginBottom: theme.space.x1,
    fontSize: theme.fontSizes.heading4,
    lineHeight: theme.lineHeights.heading4,
    fontWeight: theme.fontWeights.medium
  },

  "a, a:visited": {
    color: theme.colors.blue
  },

  "a:hover": {
    color: theme.colors.darkBlue
  },

  code: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.darkGrey,
    lineHeight: theme.lineHeights.smallTextBase
  }
});

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <MarkdownStyles>
        <Helmet>
          <title>{frontmatter.title} Nulogy Design System </title>
        </Helmet>
        <Intro>
          <Title>{frontmatter.title}</Title>
          <IntroText>{frontmatter.intro}</IntroText>
        </Intro>
        <Box maxWidth={800} mb="x4">
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }} // eslint-disable-line
          />
        </Box>
      </MarkdownStyles>
    </Layout>
  );
}

Template.propTypes = {
  data: PropTypes.node.isRequired
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        intro
        path
        title
      }
    }
  }
`;
