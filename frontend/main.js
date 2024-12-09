
// window.addEventListener('DOMContentLoaded', (event) => {
//     getVisitCount();
// })

// const functionApiUrl = Process.env.hy;

// const getVisitCount = (req, res) => {
//     console.log("getVisitCount called");
//     let count = 30;
//     try {
//         fetch(functionApiUrl).then(response => {
//             return response.json();
//         }).then(response => {
//             console.log("Website Called function API");
//             count = response.count;
//             document.getElementById("counter").innerText = count;
//         }).catch((error)=>{
//             console.log(error);
//         })
//     }
//     catch (error) {
//         console.log(error);
//         return { error };
//     };

//     return count;
// };
window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

// Correcting the environment variable access
const functionApiUrl = process.env.FUNCTION_API_URL;

const getVisitCount = async () => {
    console.log("getVisitCount called");
    let count = 30;

    try {
        if (!functionApiUrl) throw new Error("Function API URL not defined");

        const response = await fetch(functionApiUrl);
        const data = await response.json();

        console.log("Website Called function API");
        count = data.count || count;  // Fallback to default if count is undefined
        document.getElementById("counter").innerText = count;
    } catch (error) {
        console.error("Error fetching visit count:", error);
    }
};

