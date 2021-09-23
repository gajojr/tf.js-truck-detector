document.getElementById('imgupload').addEventListener('change', e => {
    document.getElementById('img').style.display = 'flex';
    const image = document.getElementById('img');
    image.src = URL.createObjectURL(e.target.files[0]);
    image.style.width = '200px';
    image.style.height = '200px';
});

document.getElementById('check-if-truck').addEventListener('click', () => {
    const img = document.getElementById('img');

    mobilenet.load().then(model => {
        // Classify the image.
        model.classify(img).then(predictions => {
            let truckDetected = 'No ';
            for (const prediction of predictions) {
                if (prediction.className.toLowerCase().indexOf('truck') !== -1) {
                    truckDetected = '';
                    break;
                }
            }
            alert(`${truckDetected}Truck detected`);
        });
    });
});