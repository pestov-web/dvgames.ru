// graphqlQueries.js
export const indexData = `
  query {
    articles {
      article: data {
        id
        attributes {
          title
          slug
          description
          publishedAt
          banner {
            data {
              id
              attributes {
                name
                url
              }
            }
          }
        }
      }
      events {
        event: data {
          id
          attributes {
            title
            slug
            place
            date
            icon
          }
        }
      }
      slides: sliders {
        slide: data {
          id
          attributes {
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;
