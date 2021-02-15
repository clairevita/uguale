import axios from "axios";

export default {
  // Gets all posts
  getUsers: function() {
    return axios.get("/api/user");
  },
  // Gets the post with the given id
  getUser: function(email) {
    return axios.get("/api/" + email);
  },
  // Saves a post to the database
  createUser: function(newData) {
    return axios.post("/api/signup", newData);
  }
};
