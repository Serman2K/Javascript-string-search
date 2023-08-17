const searchBtn = document.getElementById("searchBtn");
const fullText = document.getElementById("fullText");
const keywordsList = document.getElementById("keywords");
const results = document.getElementById("results");

searchBtn.addEventListener("click", () => {
    results.innerHTML = ""; //clear results

    const fullTextContent = fullText.value.toLowerCase();
    const keywords = keywordsList.value.split(/[\s,]+/);

    keywords.forEach(keyword => {
        const trimmedKeyword = keyword.trim();
        if (trimmedKeyword.startsWith("mod_")) {
            const modName = " " + trimmedKeyword + " "; //to remove includes like: "Kowal" in "Kowalski"
            console.log(modName.toLowerCase());
            const keywordFound = fullTextContent.includes(modName.toLowerCase());
            console.log(keywordFound);
            const result = document.createElement("p");
            result.textContent = `${trimmedKeyword}: ${keywordFound ? "FOUND" : "NOT FOUND"}`;
            results.appendChild(result);
        }
    });
});