import Axios from "axios";

export const getALLPostsService = async (posts) => {
  return (Axios.get(
    `http://hn.algolia.com/api/v1/search_by_date?tags=story&page=${posts}`)
  )
};
