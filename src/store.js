import { createStore } from 'redux'

//initial state
const initialState = {
    notes: [{ id: 0, title: 'Test Note', text: 'This is a test note in the redux store.' }]
}

//reducer
function reducer(state = initialState, action) {
    if (action.type === 'ADD_NOTE') {
        return { ...state, notes: [...state.notes, action.payload] }
    }
    return state
}

//actions
export function addNote(payload) {
    return { type: 'ADD_NOTE', payload }
}

//store
const store = createStore(reducer)

export default store