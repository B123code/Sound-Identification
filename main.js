
function getapi() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Vo3Ad9Koy/model.json', modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
    console.log("model is ready");
    document.getElementById("mic-glyph").src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/2x/external-mic-ui-essential-kmg-design-basic-outline-kmg-design.png"
}
function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result").innerHTML=results[0].label;
    }
}