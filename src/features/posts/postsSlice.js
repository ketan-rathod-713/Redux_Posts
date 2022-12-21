import { createSlice, nanoid } from "@reduxjs/toolkit";
import {sub} from 'date-fns';

const initialState = [
    { id: '1' ,
     title: 'Learning Redux Toolkit', 
     content:"I've heard good things" ,
    date: sub(new Date(), {minutes: 10}).toISOString()
    },
    { id: '2' , 
    title: 'Slices...', 
    content:"The more I say slice, the more i want pizza" ,
    date: sub(new Date(), {minutes: 5}).toISOString()
},
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
                    author,
                    date: new Date().toISOString(),
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