import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: '1' , title: 'Learning Redux Toolkit', content:"I've heard good things" },
    { id: '2' , title: 'Slices...', content:"The more I say slice, the more i want pizza" },
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded : {
            reducer(state, action){
            state.push(action.payload)
            //  ???, state is not mutating
        },
        prepare(title, content, userId, author ){
            return {
                payload: {
                    id: nanoid(),
                    title,
                    content,
                    userId,
                    author
                }
            }
        }
    }
    }
})

export const selectAllPosts = (state)=> state.posts;
export const {postAdded} = postSlice.actions
// it is automatically get created , what does it mean
export default postSlice.reducer