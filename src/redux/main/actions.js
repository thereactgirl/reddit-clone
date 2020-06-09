import {
    FETCH_DATA,
    UPVOTE_POST,
    SELECT_POST,
    ADD_COMMENT,
    ADD_SUB_COMMENT,
    SEARCH_POSTS,
    CREATE_POST
} from './types'

const fetchData = (posts) => () => {
    return { type: FETCH_DATA, payload: posts }
}
const reloadData = () => (dispatch, getState) => {
    let state = getState();
    let posts = state.main.posts
    return fetchData(posts)(dispatch)
}

const updateVoteCount = (postId, votes) => {
    return { type: UPVOTE_POST, payload: [postId, votes] }
}

const setSearched = filteredPosts => 
 ({type: SEARCH_POSTS, payload: filteredPosts })


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
    dispatch({type: ADD_COMMENT, payload: [parentId, comment]})
}
const createSubComment = (postId, parentId, newComment) => async (dispatch, getState) => {
    // console.log(parentId, newComment)

    dispatch({type: ADD_SUB_COMMENT, payload: [postId, parentId, newComment]})
}

const searchPosts = (searchValue)  => (dispatch, getState) => {
    console.log('search', searchValue)
    let filteredPosts;
    let state = getState();
    filteredPosts = state.main.posts.filter(p => {
        if(p.username.toLowerCase().includes(searchValue) || p.description.toLowerCase().includes(searchValue)) {
            return p;
        } 
    })
    console.log(filteredPosts)
    dispatch(setSearched(filteredPosts));

}

const createNewPost = (newPost) => {
    return ({ type: CREATE_POST, payload: newPost})
}

export default {
    fetchData,
    reloadData,
    updateVoteCount,
    selectPost,
    createComment,
    createSubComment,
    searchPosts,
    createNewPost,
};