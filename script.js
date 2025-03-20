// Get elements
const postForm = document.getElementById('postForm');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const postsContainer = document.getElementById('posts');

// Load posts from localStorage
function loadPosts() {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  postsContainer.innerHTML = posts
    .map(post => `<div class="post"><h3>${post.title}</h3><p>${post.content}</p></div>`)
    .join('');
}

// Save a new post to localStorage
function savePost(title, content) {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.push({ title, content });
  localStorage.setItem('posts', JSON.stringify(posts));
  loadPosts(); // Reload posts after adding a new one
}

// Handle form submission
postForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  if (title && content) {
    savePost(title, content);
    titleInput.value = '';
    contentInput.value = '';
  }
});

// Initial load
loadPosts();
