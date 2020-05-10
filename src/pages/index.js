import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PostLink from '../components/post-link'
import HeroHeader from '../components/heroHeader'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

//  fab: which represents all of the brand icons in @fortawesome/free-brands-svg-icons.
//       So any of the brand icons in that package may be referenced by icon name as a
//       string anywhere else in our app. For example: "apple", "microsoft", or "google".
//
// faCheckSquare and faCoffee: Adding each of these icons individually allows us to refer
//       to them throughout our app by their icon string names, "check-square" and "coffee", respectively.
library.add(fab, faCheckSquare, faCoffee)

const IndexPage = ({
    data: {
        site,
        allMarkdownRemark: { edges },
    },
}) => {
    const Posts = edges
        .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map((edge) => <PostLink key={edge.node.id} post={edge.node} />)

    return (
        <Layout>
            <Helmet>
                <title>{site.siteMetadata.title}</title>
                <meta
                    name="description"
                    content={site.siteMetadata.description}
                />
                {!site.siteMetadata.w3l_dom_key ? null : (
                    <meta
                        name="w3l-domain-verification"
                        content={site.siteMetadata.w3l_dom_key}
                    />
                )}
            </Helmet>
            <HeroHeader />
            <h2>Blog Posts &darr;</h2>
            <div className="grids">{Posts}</div>
        </Layout>
    )
}

export default IndexPage
export const pageQuery = graphql`
    query indexPageQuery {
        site {
            siteMetadata {
                title
                description
                w3l_dom_key
            }
        }
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        path
                        title
                        thumbnail
                    }
                }
            }
        }
    }
`
