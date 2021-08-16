const createRandomName = () => {
  let randomString = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < 16; i += 1) {
      randomString += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return randomString;
};

const createMessage = (message) => {
  console.log(message);
  const list = document.querySelector('#messageList');
  const li = document.createElement('li');
  li.innerText = message;
  li.setAttribute('data-testid', 'message');
  list.appendChild(li);
};

const socket = window.io();
let nickname = createRandomName();
const sendMessage = document.querySelector('#sendMessage');
const changeNickname = document.querySelector('#buttonNickname');
const usersList = document.querySelector('#onlineList');
usersList.innerHTML = '';

const setOnline = () => {
  socket.emit('setOnline', nickname);
};

setOnline();

socket.on('messageList', (messageList) => {
  messageList.forEach(({ message }) => createMessage(message));
});

const handleNickname = () => {
  const h3 = document.querySelector('#nickname');
  h3.innerText = nickname;
};

handleNickname();

sendMessage.addEventListener('click', () => {
  const chatMessage = document.querySelector('#inputMessage').value;
  socket.emit('message', { chatMessage, nickname });
});

changeNickname.addEventListener('click', () => {
  const newNickname = document.querySelector('#inputNickname').value;
  socket.emit('changeNickname', { newNickname, nickname });
  nickname = newNickname;
  handleNickname();
});

socket.on('message', (message) => createMessage(message));

const createOnline = (user) => {
  const li = document.createElement('li');
  li.innerText = user;
  li.setAttribute('data-testid', 'online-user');
  usersList.appendChild(li);
};

const setUsersOnline = (usersOnline) => {
  usersList.innerHTML = '';
  usersOnline.forEach(({ user }) => {
    if (user !== nickname) {
      createOnline(user);
    }
  });
};

window.onbeforeunload = (e) => {
  e.preventDefault();
  socket.disconnect();
};

socket.on('usersOnline', (usersOnline) => setUsersOnline(usersOnline));
