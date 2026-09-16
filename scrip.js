document.addEventListener("DOMContentLoaded", () => {
    // Mapeamento dos elementos principais
    const likeBtn = document.querySelector(".like-btn");
    const likesCountSpan = document.querySelector(".likes-count");
    const postMedia = document.querySelector(".post-media");
    const bookmarkBtn = document.querySelector(".bookmark-btn");

    if (!likeBtn || !likesCountSpan) return;

    // Estado inicial
    let baseLikes = 0;
    let isLiked = false;

    // Inicializa contador em zero
    likesCountSpan.textContent = "0";

    // Formata números acima de 1000 (ex: 1.2K)
    function formatLikes(num) {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + "K";
        }
        return num.toString();
    }

    // Animação visual de clique
    function triggerBounce(svgElement) {
        if (!svgElement) return;
        svgElement.style.transform = "scale(1.3)";
        setTimeout(() => {
            svgElement.style.transform = "scale(1)";
        }, 150);
    }

    // Incrementar curtida
    function addLike() {
        baseLikes++;
        isLiked = true;
        likeBtn.classList.add("liked");
        likesCountSpan.textContent = formatLikes(baseLikes);

        const svg = likeBtn.querySelector("svg");
        triggerBounce(svg);
    }

    // Decrementar curtida
    function removeLike() {
        isLiked = false;
        baseLikes = Math.max(0, baseLikes - 1);
        likeBtn.classList.remove("liked");
        likesCountSpan.textContent = formatLikes(baseLikes);

        const svg = likeBtn.querySelector("svg");
        triggerBounce(svg);
    }

    // Clique no coração (alterna entre curtir e descurtir)
    likeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (isLiked) {
            removeLike();
        } else {
            addLike();
        }
    });

    // Clique na imagem principal (sempre adiciona uma curtida)
    if (postMedia) {
        postMedia.addEventListener("click", (e) => {
            e.stopPropagation();
            addLike();
        });
    }

    // Clique no botão de salvar
    if (bookmarkBtn) {
        let isBookmarked = false;
        bookmarkBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            isBookmarked = !isBookmarked;
            bookmarkBtn.classList.toggle("bookmarked", isBookmarked);

            const svg = bookmarkBtn.querySelector("svg");
            triggerBounce(svg);
        });
    }
});