function upvote(element) {
    var score = getScore(element);
    addPoint(score, 1);
    removeDownvote(element);
    show(score, 'upvoted');
    hide(score, 'upvote');

}

function removeUpvote(element) {
    var score = getScore(element);
    if (isHidden(score, 'upvote')) {
        addPoint(score, -1);
        show(score, 'upvote');
        hide(score, 'upvoted');
    }
}

function downvote(element) {
    var score = getScore(element);
    addPoint(score, -1);
    removeUpvote(element);
    show(score, 'downvoted');
    hide(score, 'downvote');
}

function removeDownvote(element) {
    var score = getScore(element);
    if (isHidden(score, 'downvote')) {
        addPoint(score, 1);
        show(score, 'downvote');
        hide(score, 'downvoted');
    }
}

function getScore(element) {
    return element.parentElement;
}

function addPoint(score, value) {
    var scoreText = score.querySelector('.scoreText');
    scoreText.innerText = parseInt(scoreText.innerText) + value;
}

function isHidden(score, className) {
    return score.querySelector(`.${className}`).hasAttribute('hidden')
}

function hide(score, className) {
    score.querySelector(`.${className}`).setAttribute('hidden', '');
}

function show(score, className) {
    score.querySelector(`.${className}`).removeAttribute('hidden');
}