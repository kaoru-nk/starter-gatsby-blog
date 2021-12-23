import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import * as styles from "./blog-post.module.less";
import Seo from "../components/seo";
import Hero from "../components/hero";



class RootTags extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    const tag = get(this, 'props.data.allContentfulTags.nodes')
    //console.log(tag);
    return (
      <Layout location={this.props.location}>
        <Seo
          title={tag[0].title}
          description={tag[0].slug}
          image={tag[0].image.resize.src}
        />
        <Hero
          image={tag[0].image?.gatsbyImageData}
          title={tag[0].title}
        />
        <div className={styles.container_wrapper}>
          <h3>{tag[0].slug}</h3>
        </div>
        <div className={styles.index_container}>
          <ArticlePreview posts={posts} />
        </div>
      </Layout>
    )
  }
}

export default RootTags

export const pageQuery = graphql`
  query TagQuery($id: String!) {
    allContentfulBlogPost(
    sort: {fields: [publishDate], order: DESC}
    filter: {tag2: {elemMatch: {id: {eq: $id}}}}
    ) {
      nodes {
        title
        slug
        publishDate(formatString: "YYYY/MM/DD")
        tag2 {
          title
          id
        }
        heroImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allContentfulTags(filter: {id: {eq: $id}}) {
      nodes {
        image {
          gatsbyImageData(width: 1180, layout: CONSTRAINED, placeholder: BLURRED)
          resize(height: 630, width: 1200) {
            src
          }
        }
        slug
        title
      }
    }
  }
`
