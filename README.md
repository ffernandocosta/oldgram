# Scrimba - 'Oldgram' clone of instagram solo project challenge

This is my solo project challenge from Scrimba to build a 'Oldgram' clone of instagram using HTML, CSS & JavaScript

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Video](#video)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Click the hear icon button and increase the like total number

### Video

https://user-images.githubusercontent.com/70672573/222904258-b7131cbc-f4e8-40fd-9ffa-bb493cdfb8d1.mp4


### Links

- [My solution](https://github.com/ffernandocosta/oldgram)
- [Live version](https://oldgram.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS variables
- Grid
- Flexbox
- Mobile first workflow
- JavaScript


### What I learned

Building this 'Oldgram' clone of instagram project taught me important skills in working with manipulating the DOM and array objects. Learned how to render posts on the page using JavaScript using for loop.


```html
  <h1>Some HTML I am proud of</h1>
  
  <header>
            <div class="main-header">
                <a href="#" class="oldgram-logo-link"><img src="/assets/img/logo/logo.png" class="oldgram-logo" alt="Oldgram logo"></a>
                <a href="#" class="header-user-avatar-link"><img src="/assets/img/user-avatar/user-avatar.png" class="header-user-avatar" alt="User avatar picture"></a>
            </div>
    </header>
```
```css
  .proud-of-this-css {

    .comment-section {
      width: 100%;
      overflow: hidden;
      padding: 0 0 1rem 0;
  }
  
    .comment-username {
      text-decoration: none;
      color: var(--clr-neutral-900);
      float: left;
      margin-right: 5px;
  }
}
```
```js
const proudOfThisFunc = () => {
  
  const heartIcons = document.querySelectorAll('.post-icon-button.icon-heart');

heartIcons.forEach(heartIcon => {
    
    // gets the index of the post object in the array using the "data-index" attribute
    const index = heartIcon.getAttribute('data-index');

    heartIcon.addEventListener('click', () => {

    // increments the "likes" property of the post object at the specified index
    posts[index].likes++;
    
    // updates the text content of the "post-likes" element at the specified index
    document.querySelector(`.post-likes[data-index="${index}"]`).textContent = posts[index].likes;
  });

});
}
```


## Author

<div>
  <a href="https://www.linkedin.com/in/ffernando-costa/?locale=en_US" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="My Linkedin profile"></a>
  <a href="https://twitter.com/ffernandodev" target="_blank"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="My twitter profile"</a>
</div>
