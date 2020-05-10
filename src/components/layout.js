import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Navigation from '../components/navigation'
import 'prismjs/themes/prism-okaidia.css'

export default ({ children }) => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    )
    return (
        <div className="site-wrapper">
            <header className="site-header">
                <div className="site-title">
                    <Link to="/">{data.site.siteMetadata.title}</Link>
                </div>
                <Navigation />
            </header>
            {children}
            <footer className="site-footer">
                <p>
                    &copy; 2020 Juanezm &bull; Crafted by{' '}
                    <span role="img" aria-label="keyboard">
                        ⌨️
                    </span>{' '}
                    on{' '}
                    <a href="https://github.com/Juanezm/juanezm-personal-site">
                        Github
                    </a>
                </p>
            </footer>
        </div>
    )
}
