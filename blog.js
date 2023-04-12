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
      const img = document.createElement("img");
      const h2 = document.createElement("h2");
      const p = document.createElement("p");
      h2.textContent = post.title.rendered;
      p.innerHTML = post.content.rendered;
      img.src = post.featured_media_src_url;
      li.appendChild(img);
      li.appendChild(h2);
      li.appendChild(p);
      postsListElement.appendChild(li);
    });
  } catch (error) {
    console.error(error);
  }
}

fetchPosts();
