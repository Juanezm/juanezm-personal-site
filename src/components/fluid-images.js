import { useStaticQuery, graphql } from 'gatsby'

export const UseFluidImages = props => {
    var fluidImage = null
    const imageName = props.imagePath.split('/').slice(-1)[0]

    const data = useStaticQuery(graphql`
        query FluidImages {
            allImageSharp {
                edges {
                    node {
                        id
                        fluid {
                            originalName
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    `)

    data.allImageSharp.edges.forEach(edge => {
        if (edge.node.fluid.originalName === imageName) {
            fluidImage = edge.node.fluid
        }
    })

    return fluidImage
}
