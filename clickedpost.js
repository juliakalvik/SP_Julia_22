async function fetchPosts() {
  try {
    const response = await fetch(
      "https://cmsjulia.flywheelsites.com/wp-json/wp/v2/posts/" + id `?post=${post.id}`; 
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
      const link = document.createElement("a");

      h2.textContent = post.title.rendered;
      p.innerHTML = post.excerpt.rendered;
      link.href = `post.html?id=${post.id}&image=${post.featured_media}`;

      link.appendChild(h2);
      li.appendChild(link);
      li.appendChild(p);
      postsListElement.appendChild(li);
    });
  } catch (error) {
    console.error(error);
  }
}

fetchPosts();
