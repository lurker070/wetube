import axios from "axios";

const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");
const deleteBtn = document.getElementById("jsDeleteComment");

const increaseNumber = () => {
    commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
}


function addComment(comment) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = comment;
    li.appendChild(span);
    commentList.prepend(li);
    increaseNumber();
}

const sendComment = async (comment) => {
    const videoId = window.location.href.split("/videos/")[1];
    const response = await axios({
        url:`/api/${videoId}/comment`,
        method: "POST",
        data: {
            comment
        }
    });
    if (response.status === 200){
        addComment(comment);
    }

}

const handleSubmit = (event) => {
    event.preventDefault();
    const commentInput = addCommentForm.querySelector("input");
    const comment = commentInput.value;
    sendComment(comment);
    commentInput.value = "";
}

const deleteComment = () => {

}

const handleDelete = async () => {
    const targetli = deleteBtn.parentNode;
    const targetspan = targetli.querySelector("span");
    const targetcomment = targetspan.innerText;
    console.log(targetcomment);
    const videoId = window.location.href.split("/videos/")[1];
    const response = await axios({
        url:`/api/${videoId}/comment/delete`,
        method: "POST",
    });
}

function init() {
    addCommentForm.addEventListener("submit", handleSubmit);
}

if(addCommentForm){
    init();
}