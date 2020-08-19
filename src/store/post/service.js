import axios from 'axios';

export const getPostAsync = async() => {
    const res = await axios({
      url: `https://jsonplaceholder.typicode.com/posts`,
      method: "GET",
    });
    return res.data;
}

export const getPostByIdAsync = async (id) => {
  const res = await axios({
    url: `https://jsonplaceholder.typicode.com/posts/${id}`,
    method: "GET",
  });
  return res.data;

};

export const savePostAsync = async (post) => {
  const res = await axios({
    url: `https://jsonplaceholder.typicode.com/posts`,
    method: "POST",
    body: { post }
  });
  return res.data;
}

export const editPostAsync = async ({id, post}) => {
  const res = await axios({
    url: `https://jsonplaceholder.typicode.com/posts/${id}`,
    method: "PUT",
    body: { post },
  });
  return res.data;
};

export const deletePostAsync = async (id) => {
  const res = await axios({
    url: `https://jsonplaceholder.typicode.com/posts/${id}`,
    method: "DELETE",
  });
  return res.data;
};