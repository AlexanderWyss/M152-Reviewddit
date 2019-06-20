var commentElement = document.getElementsByClassName('comment')[0].cloneNode(true)
commentElement.removeAttribute("hidden");
var comment = commentElement.outerHTML;
var commentSection = document.getElementById('commentsection');

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

function addComent(commentIndex = Math.floor(Math.random() * comments.length)) {
    commentSection.insertAdjacentHTML('beforeend',
        comment.replace(/{{comment-text}}/g, comments[commentIndex])
    );
}

for (var i = 0; i <  Math.floor(Math.random() * 50); i++) {
    addComent();
}
