import React from "react"
import { graphql } from "gatsby"
import LocalizedLink from "../components/localizedLink"
import useTranslations from "../components/useTranslations"
import Img from "gatsby-image"

const Index = ({ data: { allMdx } }) => {
  // useTranslations is aware of the global context (and therefore also "locale")
  // so it'll automatically give back the right translations
  const { hello, subline } = useTranslations()

  return (
    <>
      <h1>{hello}</h1>
      <p>{subline}</p>
      <hr style={{ margin: `2rem 0` }} />
      <div className="post-list">
        {allMdx.edges.map(({ node: post }) => (
          <GridContainer post={post} />
        ))}
      </div>
    </>
  )
}
const GridContainer = ({ post }) => {
  const coverImgFluid = post.frontmatter.cover.childImageSharp.fluid;
  return (
   
    <div key={`${post.frontmatter.title}-${post.fields.locale}`}>
       <Img fluid={coverImgFluid} />
      <LocalizedLink to={`/${post.parent.relativeDirectory}`}>
        {post.frontmatter.title}
      </LocalizedLink>
      <div>{post.frontmatter.date}</div>
    </div>)
}

export default Index

export const query = graphql`
  query Index($locale: String!, $dateFormat: String!) {
    allMdx(
      filter: { fields: { locale: { eq: $locale } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: $dateFormat)
            cover {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
          }
          fields {
            locale
          }
          parent {
            ... on File {
              relativeDirectory
            }
          }
        }
      }
    }
  }
`
