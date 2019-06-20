var commentElement = document.getElementsByClassName('comment')[0].cloneNode(true)
commentElement.removeAttribute("hidden");
var comment = commentElement.outerHTML;
var commentSection = document.getElementById('commentsection');
var input = document.getElementById('commentInput');

var comments = [
    'Top review',
    'your shit i hate you',
    'good job',
    'Thanks',
    'Can you please explain this further?',
    'cool',
    'im interested',
    'you are a stupid piece of shit',
    'go commit sudoku',
    'Your review was very helpfull, thx'
]

function addComent(text) {
    commentSection.insertAdjacentHTML('afterbegin',
        comment.replace(/{{comment-text}}/g, text)
    );
}

for (var i = 0; i <  Math.floor(Math.random() * 50); i++) {
    addComent(comments[Math.floor(Math.random() * comments.length)]);
}

function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

function postComment() {
    var text = input.value;
    if (!isEmptyOrSpaces(text)) {
        addComent(text);
        input.value = '';
    }
}

function upvote() {
    var score = document.querySelector(`.scoreText`);
    score.innerText = parseInt(score.innerText) + 1;
}

function downvote() {
    var score = document.querySelector(`.scoreText`);
    score.innerText = parseInt(score.innerText) - 1;
}