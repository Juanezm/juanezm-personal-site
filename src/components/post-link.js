import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { UseFluidImages } from './fluid-images'

const PostLink = ({ post }) => (
    <article className="card ">
        <Link to={post.frontmatter.path}>
            {!!post.frontmatter.thumbnail && (
                <Img
                    fluid={UseFluidImages({
                        imagePath: post.frontmatter.thumbnail,
                    })}
                    alt={post.frontmatter.title + '- Featured Shot'}
                />
            )}
        </Link>
        <header>
            <h2 className="post-title">
                <Link to={post.frontmatter.path} className="post-link">
                    {post.frontmatter.title}
                </Link>
            </h2>
            <div className="post-meta">{post.frontmatter.date}</div>
        </header>
    </article>
)
export default PostLink
