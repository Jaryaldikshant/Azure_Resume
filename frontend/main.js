
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

const getVisitCount = async () => {
    console.log("getVisitCount called");

    try {
        // Fetch the environment variable from the API
        const response = await fetch('/api/GetFunctionUrl');
        const data = await response.json();
        const functionApiUrl = data.functionApiUrl;

        // Use the function URL to fetch the visit count
        const visitResponse = await fetch(functionApiUrl);
        const visitData = await visitResponse.json();

        console.log("Website Called function API");
        document.getElementById("counter").innerText = visitData.count;
    } catch (error) {
        console.error("Error fetching visit count:", error);
    }
};

