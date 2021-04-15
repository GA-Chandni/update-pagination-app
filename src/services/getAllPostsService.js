import Axios from "axios";

export const getALLPostsService = async (posts) => {
  return (Axios.get(
    `http://hn.algolia.com/api/v1/search_by_date?tags=story&page=${posts}`  //api URL
  )
    .then((res) => {
      return ("API call success---- ", res);                  //Succes 
    })
    .catch((e) => {
      return ("API call not success !Internal Error -----------", e);         //Error
    })
  )
};
