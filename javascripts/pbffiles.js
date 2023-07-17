const PBF_URLS=["/pbffiles/sample.pbf",
"/pbffiles/3mb.pbf",
"/pbffiles/5mb.pbf",
"/pbffiles/23mb.pbf",
"https://download.geofabrik.de/europe/isle-of-man-latest.osm.pbf"
];
function downloadPbfFileFetch(url, corrs) {
    options = {}
    if (corrs === true) {
        options["mode"] = "no-cors"
        options["headers"] = {
            "Access-Control-Allow-Origin":"*",
        }
    }
    fetch(url, options).then(res => {
        res.blob()
    }).then(data => {
        console.log(data.slice(0,10));
        console.log("Fetch Download PBF succeeded")
    }).catch(err => {
        console.log("Fetch Download PBF failed")
    })
}

function downloadPbfFileXmlHttp(url, corrs) {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    if (corrs === true) {
        xhr.setRequestHeader("Sec-Fetch-Site", "cross-site")
        xhr.setRequestHeader("Sec-Fetch-Mode","no-cors")
        xhr.setRequestHeader("Sec-Fetch-Destination", "empty")
        xhr.setRequestHeader("Access-Control-Allow-Origin","*")
    }
    xhr.send()
    xhr.onload = () => {
        if(xhr.status == 200) {
            respBytes = xhr.response;
            console.log(respBytes.slice(1,10));
            console.log("XHR PBF Download was a success")
        }
    }
    xhr.onerror = () => {
        console.log("XHR PBF Download failed")
    }
  
}

for(let uri of PBF_URLS){
    downloadPbfFileFetch(uri);
    downloadPbfFileXmlHttp(uri);
}