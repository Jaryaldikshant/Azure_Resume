window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApiUrl = "https://countresume.azurewebsites.net/api/CounterFunction?code=bxCuaZH3KWuoiit3TYYwvWzXYIrDwvQw5LGgDTs2aQBKAzFuqWKKZg==";

const getVisitCount = (req, res) => {
    console.log("getVisitCount called");
    let count = 30;
    try {
        fetch(functionApiUrl).then(response => {
            return response.json();
        }).then(response => {
            console.log("Website Called function API");
            count = response.count;
            document.getElementById("counter").innerText = count;
        }).catch((error) => {
            console.log(error);
        })
    }
    catch (error) {
        console.log(error);
        return { error };
    };

    return count;
};

