const socket = io();
const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.getElementById("messages");

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(input.value){
        socket.emit('chat message', input.value);
        input.value = "";
    }
});

socket.on('chat message', function(msg){
    const item = document.createElement('li');
    item.textContent = msg;
    list.appendChild(item);
});

socket.on('is_online', function(username) {
    const item = document.createElement('li');
    item.textContent = username;
    list.appendChild(item);
});

socket.emit('username', req.session.user);
