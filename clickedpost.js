async function fetchPost() {
  try {
    const response = await fetch(
      "https://cmsjulia.flywheelsites.com/wp-json/wp/v2/posts/23"
      /* "https://cmsjulia.flywheelsites.com/wp-json/wp/v2/posts/" + id `?post=${post.id}`;  */
    );
    const blogPost = await response.json();
    const postContent = document.getElementById("object-details");
      const h2 = document.createElement("h2");// <h2></h2>
      const p = document.createElement("p");// <p></p>
      

      h2.textContent = post.title.rendered; 
      p.innerHTML = post.excerpt.rendered;// <p>tekst</p>
      link.href = `post.html?id=${post.id}&image=${post.featured_media}`;

      link.appendChild(h2);
      li.appendChild(link);
      li.appendChild(p);
      postsListElement.appendChild(li);
    
    };
  } catch (error) {
    console.error(error);
  )};
;

fetchPost();
