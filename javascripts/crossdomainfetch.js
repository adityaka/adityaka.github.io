function getGithubProfiledata() {
    var iFrame = document.getElementById("profileFrame");
    if (null === iFrame || undefined === iFrame) {
        throw "we need an iFrame to continue with the correct ID"
    }
    fetchPromise = fetch("https://github.com/adityaka")
    fetchPromise.
    then((response) => {response.text()}).
    then((data) => {iFrame.document.innerHTML = data}).
    catch(error=>console.error(`There was an error fetching content ${error}`));
}