let url = "https://www.reddit.com/r/Planes.json";

fetch(url)
    .then(res => res.json())
    .then((out) => {
        console.log('Checkout this JSON! ', out);
        out.data.children.forEach(e => {
            let title = document.createElement('h1'),
                image = document.createElement('img');

            title.innerHTML = '<h1 class="reddit__title" style="font-size: 22px">' + e.data.title;
            image.style.height = "300px";
            image.style.width = "500px"
            image.src = e.data.url;
            console.log(e.data)

            card.appendChild(title)
            card.appendChild(image)
            console.log(e.data);
        });
    })
    .catch(err => { throw err });

let card = document.querySelector('.card');
