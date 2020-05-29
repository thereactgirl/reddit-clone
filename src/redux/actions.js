import {
    FETCH_DATA,
    UPVOTE_POST
} from './types'

import dummyData from '../dummy-data';
console.log(dummyData)

const fetchData = () => {
    return { type: FETCH_DATA, payload: dummyData }
}

const upvote = (postId, newVotes) => {
    
    return { type: UPVOTE_POST, payload: postId, newVotes }
}
//   const upvote = (id) => {
//     if (id === post.id) {
//       return post.votes + 1;
//     }
//   }  
export default {
    fetchData,
    upvote
};