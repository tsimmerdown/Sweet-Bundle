const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allContentfulGoodies {
        edges {
          node {
            slug
            productType
            productName
            productHeader
            productDescription {
              productDescription
            }
            otherGoodies {
              color
              slug
              price
              productName
              id
              image {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                  width: 300
                )
              }
            }
            chocolateCoveredStrawberry {
              gatsbyImageData
              id
              title
            }
            menuOptions {
              flavour
              priceOptions {
                options {
                  amount
                  price
                  type
                  id
                }
              }
              addOnOptions {
                options {
                  name
                  price
                }
                id
              }
              id
              name
              note
            }
          }
        }
      }
    }
  `)

  result.data.allContentfulGoodies.edges.forEach(({ node }) => {
    createPage({
      path: `/goodies/${node.slug}`,
      component: path.resolve(`./src/templates/ProductTemplate.js`),
      context: {
        images: node.chocolateCoveredStrawberry,
        productDescription: node.productDescription.productDescription,
        productHeader: node.productHeader,
        productName: node.productName,
        slug: node.slug,
        otherGoodies: node.otherGoodies,
        menuOptions: node.menuOptions,
        type: node.productType,
      },
    })
  })
}
