var postElement = document.getElementsByClassName('post')[0].cloneNode(true)
postElement.removeAttribute("hidden");
var post = postElement.outerHTML;
var home = document.getElementById('home-container');
var contents;

function addPost(contentIndex = Math.floor(Math.random() * contents.length)) {
    var content = contents[contentIndex];
    home.insertAdjacentHTML('beforeend',
        post
        .replace(/{{title}}/g, content.title)
        .replace(/{{file}}/g, content.file)
        .replace(/{{text}}/g, content.text)
        .replace(/{{score}}/g, Math.floor(Math.random() * 1000))
        .replace(/{{number-of-comments}}/g, Math.floor(Math.random() * 100))        
        .replace(/{{rating}}/g, content.rating)
        .replace(/{{id}}/g, contentIndex)
    );
}

function addContent() {
    for (var i = 0; i < 20; i++) {
        if (i < contents.length) {
            addPost(i);
        } else {
            addPost();
        }
    }

    window.onscroll = function (ev) {
        if ((window.innerHeight * 2 + window.scrollY) >= home.offsetHeight) {
            for (var i = 0; i < 5; i++) {
                addPost();
            }
        }
    };
}

var httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        contents = JSON.parse(this.responseText);
        addContent();
    }
};
httpRequest.open('GET', '/allPosts', true);
httpRequest.send();

function upvote(id) {
    var score = getScore(id);
    addPoint(score, 1);
    score.querySelector('.upvoted').removeAttribute('hidden');
    score.querySelector('.upvote').setAttribute('hidden', '');
    
}

function removeUpvote(id) {
    var score = getScore(id);
    addPoint(score, -1);
    score.querySelector('.upvote').removeAttribute('hidden');
    score.querySelector('.upvoted').setAttribute('hidden', '');
}

function downvote(id) {
    var score = getScore(id);
    addPoint(score, -1);
    score.querySelector('.downvoted').removeAttribute('hidden');
    score.querySelector('.downvote').setAttribute('hidden', '');
}

function removeDownvote(id) {
    var score = getScore(id);
    addPoint(score, 1);
    score.querySelector('.downvote').removeAttribute('hidden');
    score.querySelector('.downvoted').setAttribute('hidden', '');
}

function getScore(id) {
    return document.querySelector(`#post-${id} .score`);
}

function addPoint(score, value) {
    var scoreText = score.querySelector('.scoreText');
    scoreText.innerText = parseInt(scoreText.innerText) + value;
}