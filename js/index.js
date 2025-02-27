console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);

console.log("알맞은 스크립트를 작성하세요");

const commentInput = document.getElementById("commentInput");
const commentButton = document.getElementById("commentButton");
const commentList = document.querySelector(".comment-list");

commentButton.addEventListener("click", (e) => {
    e.preventDefault();

    const comment = commentInput.value;
    if (comment) {
      const li = document.createElement("li");
      
      const commentItem = document.createElement("div");
      commentItem.classList.add("comment-item");
      
      const commentAuthor = document.createElement("div");
      commentAuthor.classList.add("comment-author");
      
      const image = document.createElement("img");
      image.src = "./images/comment-author-icon.png"
      image.alt = "사용자 프로필 이미지";
      
      const authorName = document.createElement("span");
      authorName.textContent = "재오";
      
      commentAuthor.appendChild(image);
      commentAuthor.appendChild(authorName);
      
      const commentContent = document.createElement("div");
      commentContent.classList.add("comment-content");
      commentContent.textContent = comment;

      commentItem.appendChild(commentAuthor);
      commentItem.appendChild(commentContent);

      li.appendChild(commentItem);

      commentList.appendChild(li);
      commentInput.value = "";

      alert("댓글이 등록되었습니다.");
    }
});
  