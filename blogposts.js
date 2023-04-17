/*const resultsBlogPosts = document.querySelector("#results");

const url = "https://cmsjulia.flywheelsites.com/wp-json/wp/v2/posts/";

let fetchedPosts = [];

async function fetchPosts() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    return results;
  } catch (error) {
    console.error(error);
    alert(
      "Something went wrong, seems like our blog is taking a break! Try again or please come back later."
    );
  }
}

fetchedPosts = await fetchPosts();

function writeToHTML(posts) {
  let blogPosts = "";
  for (let i = 0; i < posts.length; i++) {
    posts =
      posts +
      "<a href=clickedpost.html?id=" +
      posts[i].id +
      "&content=" +
      posts[i].image.url +
      "></a>";
  }
  resultsBlogPosts.innerHTML = posts;
}

writeToHTML(fetchedPosts);
*/

const resultsBlogPosts = document.querySelector("#results");

const url = "https://cmsjulia.flywheelsites.com/wp-json/wp/v2/posts/";

let fetchedPosts = [];

async function fetchPosts() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    return results;
  } catch (error) {
    console.error(error);
    alert(
      "Something went wrong, seems like our blog is taking a break! Try again or please come back later."
    );
  }
}

fetchedPosts = await fetchPosts();

function writeToHTML(posts) {
  let blogPosts = "";
  for (let i = 0; i < posts.length; i++) {
    blogPosts +=
      "<a href='clickedpost.html?id=" +
      posts[i].id +
      "&content=" +
      posts[i].image.url +
      "' class='post-link'>" +
      posts[i].title.rendered +
      "</a><br>";
  }
  resultsBlogPosts.innerHTML = blogPosts;
}
