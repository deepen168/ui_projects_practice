let currentPageIndex = 1; // which page to fetch posts from (posts are paginated)
let getNewItems = [];

const fakeFetch = async (pageID) => {
  // timeout added to mimic the server side delay
  return new Promise(resolve => setTimeout(() => {
    resolve(fakePosts(pageID));
  }, 100));
};

// give a page id (for example 2), return list of posts with only a title (for example 20-29)
const fakePosts = (pageID) => {
  return new Array(10).fill(0).map((_, i) => {
    return {
      title: `Post ${pageID*10 + i + 1}`
    };
  });
};

const getMoreItems = () => {
  fakeFetch(currentPageIndex).then((items) => {
    getNewItems = [];
    getNewItems.push(...items)
  });
}

let listElm = document.querySelector('#infinite-list');
getMoreItems();


listElm.addEventListener('scroll', function() {
  const totalHeight = listElm.scrollHeight;
  const scrollHeight = listElm.scrollTop;
  const clientHeight = listElm.clientHeight;
  
  if(scrollHeight + clientHeight >= totalHeight) {
    for(let i = 0; i < getNewItems.length; i++) {
      const newItem = document.createElement('li');
      newItem.innerHTML = getNewItems[i]['title'];
      listElm.appendChild(newItem);
    }
    currentPageIndex += 1;
    getMoreItems();
  }
});


