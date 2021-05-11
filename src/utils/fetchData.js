const fetchData = async (url) => {
    return await fetch(url)
    .then(res=>res.json())
    .then(todosJson=>{
        todosJson.splice(10);
        return todosJson.reverse();
    })
}

export default fetchData;