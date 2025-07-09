let list = document.getElementById("list");
let n = Number(prompt("Enter number of posts"));

fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(res =>res.json())
  .then(posts =>{
    for (let i=0; i<n && i<posts.length; i++){
      let post = posts[i];
      let postTitle = document.createElement('h3');
      postTitle.textContent = post.title;

      let postBody = document.createElement('p');
      postBody.textContent = post.body;

      list.appendChild(postTitle);
      list.appendChild(postBody);
    }
  })
  .catch(err => console.error(err));
