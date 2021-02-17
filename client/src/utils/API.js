import axios from "axios";

export default {
  // Gets all posts
  getUsers: function() {
    return axios.get("/api/user/");
  },
  // Gets the post with the given id
  getUser: function(email) {
    return axios.get("/api/user/" + email);
  },
  // Saves a post to the database
  signup: function(data) {
    return axios.post("/api/sign", data).catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    });
  },
  updateStats: function(data){
    return axios.put("/api/user/", data);
  }
};
