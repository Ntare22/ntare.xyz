type Link = {
  id: string;
  link_name: string;
  url: string;
};

type Section = {
  id: string;
  __typename?: string;
  section_name?: string; // Optional because not all objects have this key
  image?: string | null;
  heading?: string;
  sub_heading?: string;
  description?: string;
  links?: Link[];
  title?: string;
  projects?: any[]; // Adjust the type of `projects` if you know its structure
};

type HomepageData = {
  homepage: {
    content: Section[];
  };
};