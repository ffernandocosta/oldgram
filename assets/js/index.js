import { postsData } from "./data.js";

const postsSectionEl = document.getElementById('posts-section');

function getPostsArray(posts) {
  const postsArray = []
  for (let post of posts){
    postsArray.push(post)
  }
  return postsArray
}

function render(posts) {
  let allPosts = "";
  const oldgramPosts = getPostsArray(posts)
  for (let post of oldgramPosts){
    allPosts += `<article class="container">
    <div class="post-header">
      <img src=${post.avatar} class="post-user-avatar">
      <div class="flex-group">
        <a href="#" class="post-username">${post.name}</a>
        <a href="#" class="post-location fs-small fw-regular">${post.location}</a>
      </div>
    </div>

    <img src=${post.post} alt="${post.alt}">

    <div class="post-footer">
      <ul class="post-icons-ul">
        <li>
          <button class="post-icon-button icon-heart"><img src="assets/img/icons/icon-heart.png" alt="Heart icon"></button>
        </li>
        <li>
          <button class="post-icon-button"><img src="assets/img/icons/icon-comment.png" alt="Comment icon"></button>
        </li>
        <li>
          <button class="post-icon-button"><img src="assets/img/icons/icon-dm.png" alt="Private message icon"></button>
        </li>
      </ul>
      <p class="post-likes">${post.likes}</p>
      <div class="comment-section">
        <a href="#" class="comment-username">${post.username}</a>
        <p class="post-comment fw-regular">${post.comment}</p>
      </div>
    </div>
  </article>`
  }
  postsSectionEl.innerHTML = allPosts;

  // Add event listeners to like buttons
  const likeButtons = document.querySelectorAll('.icon-heart');
  likeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const likeCount = button.parentElement.parentElement.nextElementSibling;
      let currentLikes = parseInt(likeCount.textContent);
      currentLikes = currentLikes + 1;
      likeCount.textContent = currentLikes;
    });
  });
}

render(postsData);
