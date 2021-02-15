import axios from "axios";

export default {
  // Gets all posts
  getUsers: function() {
    return axios.get("/api/user");
  },
  // Gets the post with the given id
  getUser: function(email) {
    return axios.get("/api/user/" + email);
  },
  // Saves a post to the database
  updateUser: function(newData) {
    return axios.post("/api/user", newData);
  }
};
