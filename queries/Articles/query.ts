import { gql } from "graphql-request";

export const getArticleWithSlug = gql`
    query Article($slug: String!) {
        article(where: {slug: $slug}) {
            id
            author {
                biography
                name
            }
            category
            content {
                text
                raw
                markdown
                html
            }
            createdAt
            date
            excerpt
            publishedAt
            publishedBy {
                name
                picture
            }
            seo {
                description
                id
                image {
                    url
                }
                keywords
                publishedAt
                title
                updatedAt
            }
            slug
            title
            updatedAt
            tags
            siteDisplay
            coverImage {
                url
            }
        }
    }
`;

export const getAllArticles = gql`
    query Articles {
        articles {
            id
            author {
                biography
                name
            }
            category
            content {
                text
                raw
                markdown
                html
            }
            createdAt
            date
            excerpt
            publishedAt
            publishedBy {
                name
                picture
            }
            seo {
                description
                id
                image {
                    url
                }
                keywords
                publishedAt
                title
                updatedAt
            }
            slug
            title
            updatedAt
            tags
            siteDisplay
            coverImage {
                url
            }
        }
    }
`;