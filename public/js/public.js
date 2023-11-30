const scriptURL = 'https://script.google.com/macros/s/AKfycbyaXbSlaye-ZBAEwFXeIrnZCWU5U382V-sPiVdH_j9XgxlaiWJzabH9YEVhtCxxEcqLGg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')
form.addEventListener('submit', e => {
    e.preventDefault()
    alert('Su mensaje fue enviado con éxito!')
    fetch(scriptURL, {method: 'POST', body: new FormData(form) })
        .then(Response => {
            msg.innerHTML = "Gracias por su mensaje!"
            setTimeout(function() {
                msg.innerHTML = ""
            }, 5000)
            form.reset
        })
        .catch(error => console.error('Error!', error.message))
})