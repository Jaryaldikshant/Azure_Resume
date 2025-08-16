
window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApiUrl = "/api/counter";

const getVisitCount = () => {
    console.log("getVisitCount called");
    let count = 0;
    try {
        fetch(functionApiUrl).then(response => {
            return response.json();
        }).then(response => {
            console.log("Website Called function API");
            count = response.count;
            document.getElementById("counter").innerText = count;
        }).catch((error)=>{
            console.log(error);
            // Fallback to default count if API fails
            document.getElementById("counter").innerText = "30";
        })
    }
    catch (error) {
        console.log(error);
        // Fallback to default count if API fails
        document.getElementById("counter").innerText = "30";
    }
};


// window.addEventListener('DOMContentLoaded', () => {
//     getVisitCount();
// });

// const getVisitCount = async () => {
//     console.log("getVisitCount called");

//     try {
//         // Fetch the environment variable injected by Azure
//         const apiUrl = process.env.FUNCTION_API_URL || "";
//         if (!apiUrl) {
//             throw new Error("API URL is not defined.");
//         }

//         const apiResponse = await fetch(apiUrl);
//         if (!apiResponse.ok) {
//             throw new Error("Failed to fetch visit count from API.");
//         }

//         const data = await apiResponse.json();
//         console.log("Website Called function API", data);

//         const count = data.count || 0;
//         document.getElementById("counter").innerText = count;
//     } catch (error) {
//         console.error("Error fetching visit count:", error);
//     }
// };

