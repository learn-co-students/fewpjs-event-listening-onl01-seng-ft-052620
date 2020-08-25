function addingEventListener() {
    const input = document.getElementById('input'); //code that will be doing the listening
    input.addEventListener('click', function(event) { //The first argument is the event name to listen for

    alert('I was clicked!'); //The second argument is the callback function. It's work that will be executed when the node "hears" the event

});
}
