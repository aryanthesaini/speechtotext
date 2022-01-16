const button = document.querySelector('.talk');
const content = document.querySelector('.content');


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log('voice activated');
}

recognition.onresult = function (event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readoutloud(transcript);

}

button.addEventListener('click', () => {
    recognition.start();
})


function readoutloud(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.volume = 1;
    speech.rate = 1;
    speech.text = message;
    speech.pitch = 0.5;

    window.speechSynthesis.speak(speech);

}