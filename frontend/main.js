if (typeof process !== 'undefined' && process.env) {
    require('dotenv').config();
}

window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApiUrl = window.env.FUNCTION_API_URL ;

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
        }).catch((error)=>{
            console.log(error);
        })
    }
    catch (error) {
        console.log(error);
        return { error };
    };

    return count;
};

