export default {
    search: function(){
       return fetch(`http://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimt}`)
        .then(res => res.json())
        .then(data => data.data.children.map(data => data.data))
        .catch(err => console.log(err));
    }
};