import { configureStore } from "@reduxjs/toolkit"
import postsReducer from "../features/posts/postsSlice"
import usersReducer from "../features/users/usersSlice"

export const store = configureStore({
    reducer: {
         // we can have other slices here as well 
         posts: postsReducer,
         users: usersReducer
    }
}) 

// Now as we have added counterReducer to the store it is available to the whole app by using the provider 