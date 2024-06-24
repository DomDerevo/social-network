const ADD_POST = 'ADD-POST'
const ADD_MESSAGE = 'ADD-MESSAGE'
const ON_POST_CHANGE = 'ON-POST-CHANGE'
const ON_MESSAGE_CHANGE = 'ON-MESSAGE-CHANGE'


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

    rerenderTree() {
        console.log('Fake function');
    },

    subscribe(observer) {
        this.rerenderTree = observer
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        if (action.type == ADD_POST) {
            let newPost = {
                message: this._state.profilePage.newPostText,
                id: this._state.profilePage.postList.length + 1,
                likes: 0
            }

            this._state.profilePage.postList.unshift(newPost)
            this._state.profilePage.newPostText = ''
            this.rerenderTree(this._state)
        }
        else if (action.type == ADD_MESSAGE) {
            let newMessage = {
                name: 'Артур',
                text: this._state.dialoguePage.newMessageText,
                id: this._state.dialoguePage.messageList.length + 1,
            }

            this._state.dialoguePage.messageList.unshift(newMessage)
            this.rerenderTree(this._state)
        }

        else if (action.type == ON_POST_CHANGE) {
            this._state.profilePage.newPostText = action.text
            this.rerenderTree(this._state)

        } else if (action.type == ON_MESSAGE_CHANGE) {
            this._state.dialoguePage.newMessageText = action.text
            this.rerenderTree(this._state)
        }
    }
}


export default store

window.state = store._state


export let addPostAC = () => {
    return (
        { type: 'ADD-POST', id: 1 }
    )
}

export let onPostChangeAC = (text) => {
    return (
        {
            type: 'ON-POST-CHANGE',
            text: text
        }
    )
}

export let addMessageAC = () => {
    return (
        {
            type: 'ADD-MESSAGE'
        }
    )
}

export let onMessageChangeAC = (text) => {
    return (
        {
            type: 'ON-MESSAGE-CHANGE',
            text: text
        }
    )
}