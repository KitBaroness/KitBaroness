// Fetch and display Medium and Twitter RSS feeds
const blogPostsDiv = document.getElementById('blog-posts');

// Function to fetch and parse RSS feed
function fetchRSS(feedUrl, source) {
  fetch(feedUrl)
    .then(response => response.text())
    .then(data => {
      let parser = new DOMParser();
      let rss = parser.parseFromString(data, "application/xml");
      let items = rss.querySelectorAll("item");

      items.forEach(item => {
        let title = item.querySelector("title").textContent;
        let link = item.querySelector("link").textContent;
        let description = item.querySelector("description").textContent;

        // Create blog post element
        let post = document.createElement("div");
        post.classList.add("blog-post");

        let postTitle = document.createElement("h3");
        postTitle.textContent = `${title} (${source})`;

        let postDescription = document.createElement("p");
        postDescription.innerHTML = description;

        let postLink = document.createElement("a");
        postLink.href = link;
        postLink.textContent = "Read more";
        postLink.target = "_blank";

        // Append elements to the post div
        post.appendChild(postTitle);
        post.appendChild(postDescription);
        post.appendChild(postLink);

        // Append post to the blog posts section
        blogPostsDiv.appendChild(post);
      });
    })
    .catch(error => console.error(`Error fetching the feed (${source}):`, error));
}

// Fetch Medium feed
fetchRSS('https://medium.com/feed/@KitBaroness', 'Medium');

// Fetch Twitter feed
fetchRSS('https://twitrss.me/twitter_user_to_rss/?user=KitBaroness', 'Twitter');
