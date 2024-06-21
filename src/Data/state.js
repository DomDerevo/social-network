let store = {


    _state: {
        profilePage: {
            postList: [
                { message: 'Hello world', id: 1 },
                { message: 'Я Илон Маск!', id: 2 },
                { message: 'Полетели на марс!', id: 3 },
                { message: 'Дорбое утро', id: 4 },
            ],
            newPostText: ''
        },
        dialoguePage: {
            messageList: [
                { name: 'Вася', text: 'Привет', id: 1 },
                { name: 'Андрей', text: 'Здрасьте', id: 2 },
                { name: 'Леха', text: 'Добрый день', id: 3 },
            ],
            newMessageText: ''
        },

        Navbar: {
            friends: [
                { img: './img/PFP1.png', name: 'Андрей', id: 1 },
                { img: './img/PFP2.jpg', name: 'Вася', id: 2 },
                { img: './img/PFP3.jpg', name: 'Лёха', id: 3 }
            ]
        },
    },

    addPost(postText){
        let newPost = {
            message: postText,
            id: this._state.profilePage.postList.length + 1,
            likes: 0
        }

        this._state.profilePage.postList.unshift(newPost)
        this._state.profilePage.newPostText = ''
        this.rerenderTree(this._state)
    },

    addMessage(messageText){
        let newMessage = {
            name: 'Артур',
            text: messageText,
            id: this._state.dialoguePage.messageList.length + 1,
        }

        this._state.dialoguePage.messageList.unshift(newMessage)
        this.rerenderTree(this._state)
    },


    onPostChange(text){
        this._state.profilePage.newPostText = text
        this.rerenderTree(this._state)
    },

    onMessageChange(text){
        this._state.dialoguePage.newMessageText = text
        this.rerenderTree(this._state)
    },


    rerenderTree(){
        console.log('Fake function');
    },

    subscribe(observer){
        this.rerenderTree = observer
    },

    getState(){
        return this._state
    }
}

export default store

window.state = store._state
