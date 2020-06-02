import {
    FETCH_DATA,
    UPVOTE_POST,
    SELECT_POST
} from './types'

import dummyData from '../dummy-data';
console.log(dummyData)

const fetchData = () => {
    return { type: FETCH_DATA, payload: dummyData }
}

const updateVoteCount = (postId, newVotes) => {
    return { type: UPVOTE_POST, payload: [postId, newVotes] }
}

const selectPost = (postId) => async (dispatch, getState) => {
    const state = getState();
    const post = await state.posts.find((post) => post.id == postId);
    // console.log('post', post)
    dispatch({ type: SELECT_POST, payload: post})

    return findPost(post)(dispatch, getState);
}
const findPost = (post) => (getState, dispatch) => {
    return { type: SELECT_POST, payload: post}
}
export default {
    fetchData,
    updateVoteCount,
    selectPost
};