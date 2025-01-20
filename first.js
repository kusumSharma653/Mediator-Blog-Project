
   document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('postForm');
    const postsSection = document.getElementById('posts');

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        // Create new post element
        const post = document.createElement('article');
        post.classList.add('post');

        const postTitle = document.createElement('h2');
        postTitle.classList.add('post-title');
        postTitle.textContent = title;

        const postDate = document.createElement('p');
        postDate.classList.add('post-date');
        postDate.textContent = new Date().toLocaleDateString();

        const postContent = document.createElement('p');
        postContent.classList.add('post-content');
        postContent.textContent = content;

        // Append elements to post
        post.appendChild(postTitle);
        post.appendChild(postDate);
        post.appendChild(postContent);

        // Add post to posts section
        postsSection.appendChild(post);

        // Clear form
        postForm.reset();
    });
});
const bold = document.querySelector('.bold');
const italic = document.querySelector('.italic');
const large = document.querySelector('.large')
const small = document.querySelector('.small')

let turn = 0;
bold.addEventListener('click',()=>{
    if(turn==0){
        title.style.fontWeight="bold";
        content.style.fontWeight="bold"
        turn++;
    }
    else{
    
        turn = 0;
    } 
})
italic.addEventListener('click',()=>{
    title.style.fontStyle="italic";
    content.style.fontStyle="italic"
})

large.addEventListener('click',()=>{
    title.style.fontSize="30px";
    content.style.fontSize="30px"
    
   
})
small.addEventListener('click',()=>{
    title.style.fontStyle="10px";
     content.style.fontSize="10px"
})
