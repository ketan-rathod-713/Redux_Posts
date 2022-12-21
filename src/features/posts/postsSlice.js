import { createSlice, nanoid } from "@reduxjs/toolkit";
import {sub} from 'date-fns';

const initialState = [
    { id: '1' ,
     title: 'Learning Redux Toolkit', 
     content:"I've heard good things" ,
    date: sub(new Date(), {minutes: 10}).toISOString(),
    reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0
    }
    },
    { id: '2' , 
    title: 'Slices...', 
    content:"The more I say slice, the more i want pizza" ,
    date: sub(new Date(), {minutes: 5}).toISOString(),
    reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0
    }
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
        // if any new post is prepared then do this
        prepare(title, content, userId, author ){
            return {
                payload: {
                    id: nanoid(),
                    title,
                    content,
                    userId,
                    author,
                    date: new Date().toISOString(),
                    reactions: {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    }
                }
            }
        }
    },
    reactionAdded(state, action){
        const { postId, reaction } = action.payload // get payload from the action.payload
        const existingPost = state.find(post=>post.id === postId)
        if(existingPost){
            existingPost.reactions[reaction]++
            // normally this is mutating but wwe are in createSlice so underhood it will not mutating the state
        }
    }
    }
})

export const selectAllPosts = (state)=> state.posts;
export const {postAdded, reactionAdded} = postSlice.actions
// it is automatically get created , what does it mean
export default postSlice.reducer