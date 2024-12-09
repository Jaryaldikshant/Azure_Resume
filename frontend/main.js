
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
// Define the function first
const getVisitCount = async () => {
    console.log("getVisitCount called");

    try {
        // Fetch environment variable from Azure API endpoint
        const response = await fetch("/api/GetFunctionUrl");
        if (!response.ok) {
            throw new Error("Failed to fetch API URL.");
        }

        const { apiUrl } = await response.json();  // Ensure correct variable name
        const apiResponse = await fetch(apiUrl);
        const data = await apiResponse.json();

        console.log("Website Called function API", data);
        const count = data.count || 0;
        document.getElementById("counter").innerText = count;
    } catch (error) {
        console.error("Error fetching visit count:", error);
    }
};

// Attach the event listener after the function declaration
window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

