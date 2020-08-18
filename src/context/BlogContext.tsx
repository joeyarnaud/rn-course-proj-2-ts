import React, { useReducer } from 'react';
import createDataContext from './createDataContext';

export interface BlogContextInterface {
  data: { title: string }[];
  addBlogPost: () => void;
}

type State = {
  blogPosts: { title: string }[];
};

type Action = {
  type: string;
  payload: any;
};

const ADD_BLOG_POST = 'ADD_BLOG_POST';

const blogReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ADD_BLOG_POST:
      return {
        ...state,
        blogPosts: [
          ...state.blogPosts,
          { title: `Blog Post #${state.blogPosts.length + 1}` },
        ],
      };
    default:
      return state;
  }
};

const BlogContext = React.createContext<BlogContextInterface>({
  data: [],
  addBlogPost: () => null,
});

type Props = {};

const BlogProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, { blogPosts: [] });

  const addBlogPost = () => {
    dispatch({ type: ADD_BLOG_POST, payload: null });
  };

  return (
    <BlogContext.Provider value={{ data: state.blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogProvider };
export default BlogContext;
