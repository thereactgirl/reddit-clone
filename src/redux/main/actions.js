import {
    FETCH_DATA,
    UPVOTE_POST,
    SELECT_POST,
    ADD_COMMENT,
    ADD_SUB_COMMENT
} from './types'

import dummyData from '../../dummy-data';
console.log(dummyData)

const fetchData = (posts) => () => {
    return { type: FETCH_DATA, payload: posts }
}
const reloadData = () => (dispatch, getState) => {
    let state = getState();
    let posts = state.main.posts
    return fetchData(posts)(dispatch)
}

const updateVoteCount = (postId, newVotes) => {
    return { type: UPVOTE_POST, payload: [postId, newVotes] }
}

const selectPost = (postId) => async (dispatch, getState) => {
    const state = getState();
    const post = await state.main.posts.find((post) => post.id == postId);
    // console.log('post', post)
    dispatch({ type: SELECT_POST, payload: post})

    return findPost(post)(dispatch, getState);
}
const findPost = (post) => (getState, dispatch) => {
    return { type: SELECT_POST, payload: post}
}

const createComment = (parentId, comment) => async (dispatch, getState) => {
    console.log(parentId, comment)
    let state = getState();

    const post = await state.main.posts.find((post) => post.id == parentId);
    console.log('post', post)
    dispatch({type: ADD_COMMENT, payload: [parentId, comment]})
}
const createSubComment = (postId, parentId, newComment) => async (dispatch, getState) => {
    // console.log(parentId, newComment)
    let state = getState();


    dispatch({type: ADD_SUB_COMMENT, payload: [postId, parentId, newComment]})
}

export default {
    fetchData,
    reloadData,
    updateVoteCount,
    selectPost,
    createComment,
    createSubComment
};