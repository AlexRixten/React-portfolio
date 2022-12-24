import React, { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useAcync } from "../hooks/useAsync";
import { getPost } from "../services/posts";

const Context = React.createContext();

export const usePost = () => {
  return useContext(Context);
};

export const PostProvider = ({ children }) => {
  const { id } = useParams();
  const { loading, error, value: post } = useAcync(() => getPost(id), [id]);
  const commentsByParentId = useMemo(() => {
    if (post?.comments == null) return [];
    const group = {};
    post.comments.forEach((comment) => {
      group[comment.parendId] ||= [];
      group[comment.parendId].push(comment);
    });
    return group;
  }, [post?.comments]);

  const getReplies = (parentId) => {
    return commentsByParentId[parentId];
  };

  return (
    <Context.Provider
      value={{
        post: { id, ...post },
        getReplies,
        rootComments: commentsByParentId[null],
      }}
    >
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1 className="error-msg">{error}</h1>
      ) : (
        children
      )}
    </Context.Provider>
  );
};
