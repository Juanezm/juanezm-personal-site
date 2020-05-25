import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { timeToRead, frontmatter, html } = markdownRemark
    return (
        <Layout>
            <Helmet>
                <title>{frontmatter.title}</title>
                <meta
                    name="description"
                    content={frontmatter.metaDescription}
                />
            </Helmet>
            <div className="blog-post-container">
                <article className="post">
                    <h1 className="post-title">{frontmatter.title}</h1>
                    <div className="post-meta">
                        {frontmatter.date} · {timeToRead} min read
                    </div>
                    {!!frontmatter.thumbnail && (
                        <div
                            className="post-thumbnail"
                            style={{
                                backgroundImage: `url(${frontmatter.thumbnail})`,
                            }}
                        ></div>
                    )}
                    <div
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </article>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "Do MMMM YYYY")
                path
                title
                thumbnail
                metaDescription
            }
            timeToRead
        }
    }
`
