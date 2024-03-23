type TrustedHTML = string;

export interface BlogsType {
  createdAt: string;
  date: string;
  excerpt: string;
  id: string;
  publishedAt: string;
  slug: string;
  title: string;
  category: {
    label: string;
    slug: string;
  };
  coverImage: {
    id: string;
    url: string;
  };
  content: {
    html: TrustedHTML;
    text: string;
  };
}

export interface IsinglePost {
  id: string;
  excerpt: string;
  title: string;
  slug: string;
  content: {
    html: string;
    text: string;
  };
  createdAt: string;
}

export interface IlatestBlog {
  createdAt: string;
  excerpt: string;
  id: string;
  slug: string;
  title: string;
  coverImage: {
    url: string;
    id: string;
  };
  category: { slug: string };
  content: {
    html: TrustedHTML;
    text: string;
  };
}

export interface ProjectsType {
  slug: string;
  technolgies: string[];
  title: string;
  description: string;
  image: {
    url: string;
  }[];
}

export interface IsingleProject {
  description: string;
  image: {
    url: string;
  };
  title: string;
  technolgies: string[];
  slug: string;
  content: {
    html: string;
  };
}
