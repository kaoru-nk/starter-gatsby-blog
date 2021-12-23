import React from 'react'
import {Link, graphql} from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Tags from '../components/tags'
import * as styles from './blog-post.module.less'
import Author from "../components/author";
import ShareButton from "../components/shareButton"

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')
    const [author] = get(this.props, 'data.allContentfulPerson.nodes')
    const taglist = get(this.props, 'data.allContentfulTags.nodes')
    const siteurl = get(this.props, 'data.site.siteMetadata.siteURL')
    const defaultTitle = encodeURIComponent("すど日記");
    let tweetUrl =`https://twitter.com/intent/tweet?text=${post.title}%20-%20${defaultTitle}%0A${siteurl}${this.props.location.pathname}`;

    return (
      <Layout location={this.props.location}>
        <Seo
          title={post.title}
          description={post.description.childMarkdownRemark.excerpt}
          image={post.heroImage.resize.src}
        />
        <Hero
          image={post.heroImage?.gatsbyImageData}
          title={post.title}
        />
        <div className={styles.container_wrapper}>
          <div className={styles.container}>
            <div className={styles.meta}>
              <time dateTime={post.rawDate}>{post.publishDate}</time> –{' '}
              {post.body?.childMarkdownRemark?.timeToRead} 分で読めます
            </div>
            <div className={styles.article}>
              <div
                className={styles.body}
                dangerouslySetInnerHTML={{
                  __html: post.body?.childMarkdownRemark?.html,
                }}
              />
              <Tags tags={post.tag2} />
              <ShareButton link={tweetUrl} />
              {(previous || next) && (
                <nav>
                  <ul className={styles.articleNavigation}>
                    {previous && (
                      <li>
                        <Link to={`/blog/${previous.slug}`} rel="prev">
                          ← {previous.title}
                        </Link>
                      </li>
                    )}
                    {next && (
                      <li>
                        <Link to={`/blog/${next.slug}`} rel="next">
                          {next.title} →
                        </Link>
                      </li>
                    )}
                  </ul>
                </nav>
              )}
            </div>
          </div>
          <Author
            image={author.heroImage.gatsbyImageData}
            title={author.name}
            content={author.shortBio.shortBio}
            tags={taglist}
          />
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      author {
        name
      }
      publishDate(formatString: "YYYY/MM/DD")
      rawDate: publishDate
      heroImage {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
        resize(height: 630, width: 1200) {
          src
        }
      }
      body {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
      tag2 {
        title
        id
      }
      description {
        childMarkdownRemark {
          excerpt
        }
      }
    }
    previous: contentfulBlogPost(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: contentfulBlogPost(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      nodes {
        name
        shortBio {
          shortBio
        }
        title
        heroImage: image {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 1180
          )
        }
      }
    }
    allContentfulTags {
      nodes {
        title
        id
      }
    }
    site {
      siteMetadata {
        siteURL
      }
    }
  }
`
