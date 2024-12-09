
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
window.addEventListener('DOMContentLoaded', () => {
    getVisitCount();
});

const getVisitCount = async () => {
    console.log("getVisitCount called");

    try {
        const apiUrl = process.env.FUNCTION_API_URL || "";
        if (!apiUrl) {
            throw new Error("API URL is not defined.");
        }

        const apiResponse = await fetch(apiUrl);
        if (!apiResponse.ok) {
            throw new Error("Failed to fetch visit count from API.");
        }

        const data = await apiResponse.json();
        console.log("Website Called function API", data);

        const count = data.count || 0;
        document.getElementById("counter").innerText = count;
    } catch (error) {
        console.error("Error fetching visit count:", error);
    }
};

