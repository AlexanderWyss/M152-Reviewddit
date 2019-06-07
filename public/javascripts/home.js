
var postElement = document.getElementsByClassName('post')[0].cloneNode(true)
postElement.removeAttribute("hidden");
var post = postElement.outerHTML;
var contents = [
    `<img src="images/placeholder.png">`,
    `<p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
    of type and scrambled it to make a type specimen book. It has survived not only five centuries,
    but also the leap into electronic typesetting, remaining essentially unchanged. It was
    popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
    and more recently with desktop publishing software like Aldus PageMaker including versions of
    Lorem Ipsum.
    </p>`,
    `<audio src="audio/audio.wav" controls></audio>`,
    `<video src="video/video.mp4" controls></audio>`
];
var home = document.getElementById('home-container');

for (var i = 0; i < 20; i++) {
    if (i < contents.length) {
        addPost(i);
    } else {
        addPost();
    }
}

function addPost(contentIndex) {
    home.insertAdjacentHTML('beforeend',
        post
            .replace(/{{title}}/g, 'Title')
            .replace(/{{content}}/g, contents[contentIndex != undefined ? contentIndex : Math.floor(Math.random() * contents.length)])
            .replace(/{{score}}/g, Math.floor(Math.random() * 1000))
            .replace(/{{number-of-comments}}/, Math.floor(Math.random() * 100))
    );
}

window.onscroll = function (ev) {
    if ((window.innerHeight * 2 + window.scrollY) >= home.offsetHeight) {
        addPost();
    }
};