document.addEventListener("DOMContentLoaded", ()=>{
    const likeBtn = document.querySlector(".like-btn");
    const postMedia = document.querySlector(".post-media");
    if (!likeBtn) return;

    const likesCountSpan = likeBtn.querySlector(".likes-count");
    const bookmarkBtn = document.querySlector('.bookmark-btn');

    let   isLiked = false;
    let baseLikes = 0;

    
})