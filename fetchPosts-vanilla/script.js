console.log('script ran');

const main = document.querySelector('#root');

const fetchPosts = async function() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
}

const loadPosts = async () => {
    const data = await fetchPosts();
    console.log(data);
    setFormData(data);
};

function setFormData(data) {
    for(let val of data) {
        const userName = document.createElement('h4');
        userName.innerHTML = `UserName: ${val.userId}`;
        main.appendChild(userName);
        
        const title = document.createElement('p');
        title.innerHTML = `UserName: ${val.title}`
        main.appendChild(title);
    }
}

loadPosts();

// const elem = document.createElement('h1');
// elem.innerHTML = 'foo';
// main.appendChild(elem);

// const button = document.createElement('button');
// button.innerHTML = 'click me!';
// main.appendChild(button);