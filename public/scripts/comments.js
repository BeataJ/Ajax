const loadCommentsBtnElement = document.getElementById('load-comments-btn');

function fetchCommentsForPost() {
    const postid = loadCommentsBtnElement.dataset.postid;
    fetch(`/posts/${postid}/comments`);
}

loadCommentsBtnElement.addEventListener('click', fetchCommentsForPost);