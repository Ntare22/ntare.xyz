import { gql } from "@apollo/client";

export const GET_HOMEPAGE = gql`
  query GetHomePage {
    homepage {
      content {
        ... on ComponentSectionsSection {
          id
          section_name
          image
          heading
          sub_heading
          description
          links {
            id
            link_name
            url
          }
        }
        ... on ComponentExperienceExperience {
          id
          company
          role
          start_date
          description
          end_date
        }
        ... on ComponentProjectProjectsContainer {
          id
          title
          description
          projects {
            id
            project_name
            title
            description
            year
            link {
              id
              link_name
              url
            }
            client
            image
            tag {
              id
              tag_name
            }
          }
        }
      }
    }
  }
`;