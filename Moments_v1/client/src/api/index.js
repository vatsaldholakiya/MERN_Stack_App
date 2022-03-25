import axios from "axios";

const url = 'http://localhost:3306/posts';
// instead of this url use 'https://[appName].herokuapp.com/posts' when server is deployed to heroku.
// port is set to 3306 because that's what we're using on node side in index.js file

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
