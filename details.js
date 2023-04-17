const blogPost = document.querySelector("#object-details");
const blogPostHeader = document.querySelector("#js-h1");
const queryparameter = new URLSearchParams(window.location.search);

const id = queryparameter.get("id");

const url = "https://cmsjulia.flywheelsites.com/wp-json/wp/v2/posts/23" + id;
