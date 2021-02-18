import axios from "axios";

export default {
  // Gets all posts
  getUsers: function() {
    return axios.get("/api/user/");
  },
  // Gets the post with the given id
  getUser: function(email) {
    return axios.get("/api/user/", email).then(response => {
      return response.data
    });
  },
  // Saves a post to the database
  signup: function(data) {
    return axios.post("/api/sign", data).then(response => {
      return response.data
   });
  },
  updateStats: function(data){
    return axios.put("/api/user/", data);
  },

  newuserInfo: function(data){
    return axios.put("/api/user/info", data);
  }

};
