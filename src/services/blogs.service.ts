import { request, gql } from "graphql-request";
import {
  BlogsType,
  IsinglePost,
  IsingleProject,
  ProjectsType,
} from "../interfaces/blogs.interface";

const graphAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!;

interface DetailedBlogResponse {
  post: IsinglePost; // Assuming IsinglePost is the correct type for the post object
}
interface DetailedWorkProject {
  workProject: IsingleProject;
}
export const BlogsService = {
  async getAllBlog() {
    const query = gql`
      query Posts {
        posts {
          createdAt
          date
          excerpt
          id
          publishedAt
          slug
          title
          category {
            label
            slug
          }
          coverImage {
            id
            url
          }
          content {
            html
            text
          }
        }
      }
    `;

    const result = await request<{ posts: BlogsType[] }>(graphAPI, query);
    return result.posts;
  },

  async getDetailedBlog(slug: string) {
    const query = gql`
      query GetDetailedBlog($slug: String!) {
        post(where: { slug: $slug }) {
          id
          createdAt
          excerpt
          title
          slug
          content {
            html
            text
          }
        }
      }
    `;
    const slugName = {
      slug,
    };

    const res = await request<DetailedBlogResponse>(graphAPI, query, slugName);
    return res.post;
  },

  async getLatestOne() {
    const query = gql`
      query GetLatestOne {
        posts(last: 1) {
          createdAt
          excerpt
          id
          slug
          title
          coverImage {
            url
            id
          }
          category {
            label
            slug
          }
          content {
            html
            text
          }
        }
      }
    `;

    const result = await request<{ posts: BlogsType[] }>(graphAPI, query);
    return result.posts;
  },
};

export const ProjectsService = {
  async getAllWorkExamples() {
    const query = gql`
      query WorkExamples {
        workProjects {
          slug
          technolgies
          title
          description
          demo
          image {
            url
          }
        }
      }
    `;

    const result = await request<{ workProjects: ProjectsType[] }>(
      graphAPI,
      query
    );
    return result;
  },

  async getWorkProOne(slug: string) {
    const query = gql`
      query WorkProOne($slug: String!) {
        workProject(where: { slug: $slug }) {
          slug
          description
          demo
          content {
            html
          }
          image {
            url
          }
          technolgies
          title
        }
      }
    `;
    const slugName = {
      slug,
    };

    const res = await request<DetailedWorkProject>(graphAPI, query, slugName);
    return res.workProject;
  },
};
