import rerenderTree from "../render"


let state = {
    profilePage: {
        postList: [
            { message: 'Hello world', id: 1 },
            { message: 'Я Илон Маск!', id: 2 },
            { message: 'Полетели на марс!', id: 3 },
            { message: 'Дорбое утро', id: 4 },
        ]
    },
    dialoguePage: {
        messageList: [
            { name: 'Вася', text: 'Привет', id: 1 },
            { name: 'Андрей', text: 'Здрасьте', id: 2 },
            { name: 'Леха', text: 'Добрый день', id: 3 },
        ]
    },

    Navbar: {
        friends: [
            {img:'./img/PFP1.png',name:'Андрей', id: 1 },
            {img:'./img/PFP2.jpg',name:'Вася', id: 2 },
            {img:'./img/PFP3.jpg',name:'Лёха', id: 3 }
        ]
    },
}

export let addPost = (postText)=>{
    let newPost = {
        message: postText,
        id : state.profilePage.postList.length+1, 
        likes:0
    }

    state.profilePage.postList.push(newPost)
    rerenderTree(state)
}

export let addMessage = (messageText) =>{
    let newMessage = {
        name:'Артур',
        text:messageText,
        id:state.dialoguePage.messageList.length+1,
    }

    state.dialoguePage.messageList.push(newMessage)
    rerenderTree(state)
}

export default state