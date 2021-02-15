import axios from "axios";

export default {
  // Gets all posts
  getUsers: function() {
    return axios.get("/api/user")
    .catch(error => {
        console.log(error.response)
    });
  },
  // Gets the post with the given id
  getUser: function(email) {
    return axios.get("/api/user/" + email)
    .catch(error => {
        console.log(error.response)
    });
  },
  // Saves a post to the database
  createUser: function(data) {
    return axios.post("/api/user", data)
    .catch(error => {
        console.log(error.response)
    });
  }
};
