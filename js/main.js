const config = {
    name: 'NASA API',
    baseUrl: 'https://api.nasa.gov/planetary/apod?api_key=',
    apiKey: '84pDsFJmvwh47VlR9zAdJhQinXKT2jgvwmcE6Tr'
}

const title = document.querySelector("#title")
const date = document.querySelector("#date")
const picture = document.querySelector("#picture");
const explanation = document.querySelector('#explanation')

async function getNASAData() {
    try {
        const response = await fetch(`${config.baseUrl}${config.apiKey}`)
        const data = await response.json()
        displayNASAData(data)
    } catch (error) {
        alert('An error occurred while fetching data from the NASA API')
    }
}

getNASAData()

function displayNASAData(data) {
    title.textContent = data.title
    date.textContent = data.date
    picture.src = data.url
    explanation.textContent = data.explanation
}
