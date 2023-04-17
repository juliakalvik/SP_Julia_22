/*async function fetchPosts() {
  try {
    const response = await fetch(
      "https://cmsjulia.flywheelsites.com/wp-json/wp/v2/posts/"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const data = await response.json();
    const postsListElement = document.getElementById("postsList");
    data.forEach((post) => {
      const li = document.createElement("li");
      const h2 = document.createElement("h2");
      const p = document.createElement("p");
      h2.textContent = post.title.rendered;
      p.innerHTML = post.excerpt.rendered;

      li.appendChild(h2);
      li.appendChild(p);
      postsListElement.appendChild(li);
    });
  } catch (error) {
    console.error(error);
  }
}

fetchPosts();
*/

async function fetchPosts() {
  try {
    const response = await fetch(
      "https://cmsjulia.flywheelsites.com/wp-json/wp/v2/posts/"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const data = await response.json();
    const postsListElement = document.getElementById("postsList");
    data.forEach((post) => {
      const li = document.createElement("li");
      const h2 = document.createElement("h2");
      const p = document.createElement("p");
      const a = document.createElement("a"); // Create a link element

      h2.textContent = post.title.rendered;
      p.innerHTML = post.excerpt.rendered;
      a.href = post.link; // Set the link's URL to the post's link
      a.appendChild(h2); // Add the h2 element as a child of the link
      li.appendChild(a); // Add the link as a child of the list item
      li.appendChild(p);
      postsListElement.appendChild(li);
    });
  } catch (error) {
    console.error(error);
  }
}

fetchPosts();
