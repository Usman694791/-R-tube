const videos = [
    { id: "dQw4w9WgXcQ", title: "First Video" },
    { id: "9bZkp7q19f0", title: "Second Video" }
];

function loadVideos(filter = "") {
    const list = document.getElementById("video-list");
    list.innerHTML = "";
    videos
        .filter(v => v.title.toLowerCase().includes(filter.toLowerCase()))
        .forEach(v => {
            list.innerHTML += `
                <div class="video-card">
                    <a href="video.html?id=${v.id}&title=${encodeURIComponent(v.title)}">
                        <img src="https://img.youtube.com/vi/${v.id}/0.jpg" alt="${v.title}">
                        <h3>${v.title}</h3>
                    </a>
                </div>
            `;
        });
}

document.getElementById("search").addEventListener("input", (e) => {
    loadVideos(e.target.value);
});

loadVideos();