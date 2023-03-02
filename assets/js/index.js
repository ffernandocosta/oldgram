const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "/assets/img/posts/avatar-vangogh.jpg",
        post: "/assets/img/posts/post-vangogh.jpg",
        alt: "Vincent van Gogh avatar picture",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "/assets/img/posts/avatar-courbet.jpg",
        post: "/assets/img/posts/post-courbet.jpg",
        alt: "Gustave Coubert avatar picture",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "/assets/img/posts/avatar-ducreux.jpg",
        post: "/assets/img/posts/post-ducreux.jpg",
        alt: "Josesh Ducreux avatar picture",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postsSectionEl = document.getElementById('posts-section');

let allPosts = ""

for (let i = 0; i < posts.length; i++) {
    allPosts += `
    <article class="container">
        <div class="post-header">
            <img src=${posts[i].avatar} class="post-user-avatar">
            <div class="flex-group">
                <a href="#" class="post-username">${posts[i].name}</a>
                <a href="#" class="post-location fs-small fw-regular">${posts[i].location}</a>
            </div>
        </div>

        <img src=${posts[i].post} alt="${posts[i].alt}">

        <div class="post-footer">
            <ul class="post-icons-ul">
                <li>
                    <button class="post-icon-button"><img src="assets/img/icons/icon-heart.png" alt="Heart icon"></button>
                </li>
                <li>
                    <button class="post-icon-button"><img src="assets/img/icons/icon-comment.png" alt="Comment icon"></button>
                </li>
                <li>
                    <button class="post-icon-button"><img src="assets/img/icons/icon-dm.png" alt="Private message icon"></button>
                </li>
            </ul>

            <p class="post-likes">${posts[i].likes}</p>
            <div class="comment-section">
                <a href="#" class="comment-username">${posts[i].username}</a>
                <p class="post-comment fw-regular">${posts[i].comment}</p>
            </div>
        </div>
    </article>
    `
}

postsSectionEl.innerHTML = allPosts;