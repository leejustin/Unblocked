function writeNewBlockingData(data) {
    var postRef = firebase.database()
        .ref('blocking/')
        .push(data)
        .then(function(snapshot) {
            console.log("stored: " + snapshot.key);                
        });
}

function updateBlockingData(data, key) {
    var postRef = firebase.database()
        .ref('blocking/' + key)
        .set(data)
        .then(function(snapshot) {
            //console.log("stored: " + snapshot.key);                
        });
}

function retrieveBlockingData(id) {
    var postRef = firebase.database()
        .ref('/blocking/' + id)
        .once('value')
        .then(function(snapshot) {
            console.log("retrieved:");
            console.log(snapshot.val());
        });
}