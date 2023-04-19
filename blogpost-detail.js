/*const blogPost = document.querySelector("#object-details");
const blogPostHeader = document.querySelector("#js-h1");
const queryparameter = new URLSearchParams(window.location.search);

const id = queryparameter.get("id");

const url = "https://cmsjulia.flywheelsites.com/wp-json/wp/v2/posts/23";

async function fetchPost() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    return results;
  } catch (error) {
    console.error(error);
    alert("Something went wrong, please try again later");
  }
}

let fetchedPost = await fetchPost();
blogPostHeader.innerHTML = fetchedPost.name + " ";

let htmlText = "";
document.title = `${fetchedPost.title.rendered} info`;
htmlText += "<div class=details_content>";
htmlText +=
  "<br> <img alt='picture of a dog' class=details_img src=" + image + ">";
htmlText += "<p> Lifespan: " + fetchedBreed.life_span + "</p>";
if (fetchedBreed.bred_for != undefined) {
  htmlText += "<p> Bred for: " + fetchedBreed.bred_for + "</p>";
}
if (fetchedBreed.temperament != undefined) {
  htmlText += "<p> Personality: " + fetchedBreed.temperament + "<p>";
}
htmlText += "</div>";

breedDetails.innerHTML = htmlText;
*/

const params = new URLSearchParams(window.location.search);
const postId = params.get("id");

fetch(`https://cmsjulia.flywheelsites.com/wp-json/wp/v2/posts/${postId}`)
  .then((response) => response.json())
  .then((blogPost) => {
    const postDetailContainer = document.getElementById("blogpost-detail");
    const postHtml = `
      <div class="post">
        <h2>${blogPost.title.rendered}</h2>
        ${blogPost.content.rendered}
      </div>
    `;
    postDetailContainer.insertAdjacentHTML("beforeend", postHtml);
  })
  .catch((error) => console.error(error));
