const config = {
    baseUrl: 'https://geek-jokes.sameerkumar.website/api?format=json'
}

$(document).ready(function() {
    fetchJoke()
})

function fetchJoke() {
    $.ajax({
        url: config.baseUrl,
        type: 'GET',
        success: (data) => onSuccess(data),
        error: (data) => onError(data)
    })
}

function onSuccess(data) {
    $('#joke').text(data.joke)
}

function onError(err) {
    console.error(err)
}

$('#btn').click(fetchJoke)
