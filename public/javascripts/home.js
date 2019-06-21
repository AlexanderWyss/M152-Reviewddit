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