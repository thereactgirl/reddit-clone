import {
    FETCH_DATA, 
    UPVOTE_POST,
    SELECT_POST,
    ADD_COMMENT,
    ADD_SUB_COMMENT,
    SEARCH_POSTS

} from './types';

const defaultState = {
    posts: [
        {
            id: 1010,
            username: "roastedLove",
            description: "I once worked for a deli and I actually really miss it. I wanted to own my deli someday. What does it take to get there, legally and financially?",
            thumbnailUrl: 'https://i.ibb.co/JkMLHbn/cafe-coffee-cup-tea-wall-decal-coffee-thumbnail.png',
            imageUrl: 'https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1876&q=80',
            votes: 400,
            timestamp: "July 17th 2017, 12:42:40 pm",
            comments: [
                {
                    id: 1,
                    postId: 1010,
                    parentId: 1010,
                    username: "biancasaurus",
                    text: "For starters, the shop, the meat, and the all equipment for storage and whatnot.",
                    comments: [
                        {
                            id: 2,
                            postId: 1010,
                            parentId: 1,
                            username: "twitch",
                            text: "Thanks captain obvious",
                            comments: [ 
                                {
                                id: 3,
                                parentId: 2,
                                postId: 1010,
                                username: "dennis_futbol",
                                text: "Right lol",
                                comments: []
                                }
                            ]
                        },
                        {
                            id: 4,
                            postId: 1010,
                            parentId: 1,
                            username: "michaelmarzetta",
                            text: "Omg no help at all lol",
                            comments: []
                        },
                        { 
                            id: 5,
                            postId: 1010,
                            parentId: 1,
                            username: "themexican_leprechaun",
                            text: "Can you be more specific regarding equipment",
                            comments: []
                        },
                       
                    ],
                },
                {
                    id: 6,
                    postId: 1010,
                    parentId: 1010,
                    username: "roastedLove",
                    text: "Besides the actual property and equipment, I mean...",
                    comments: []
                },
               
                {
                    id: 7,
                    parentId: 1010,
                    postId: 1010,
                    username: "martinseludo",
                    text: "Lots of permits!",
                    comments: []
                }
            ]
        },
        {
            id: 2020,
            username: "twitch",
            description: "Tonight's live stream is all about action figures!",
            thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
            imageUrl: 'https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80',
            votes: 4307,
            timestamp: "July 15th 2017, 03:12:09 pm",
            comments: [
                {
                    id: 8,
                    postId: 2020,
                    parentId: 2020,
                    username: "twitch",
                    text: "Epic Street Fighter action here in Vegas!",
                    comments: [],
                },
                {
                    id: 9,
                    postId: 2020,
                    parentId: 2020,
                    username: "michaelmarzetta",
                    text: "Omg that match was crazy",
                    comments: []
                },
                {
                    id: 10,
                    postId: 2020,
                    parentId: 2020,
                    username: "themexican_leprechaun",
                    text: "What a setup",
                    comments: []
                },
                {
                    id: 11,
                    parentId: 2020,
                    username: "dennis_futbol",
                    text: "It that injustice",
                    comments: []
                }
            ]
        }
    ],
    userVoted: [],
    selectedPost: {
        id: '',
        username: '',
        description: '',
        thumbnailUrl: '',
        imageUrl: '',
        votes: null,
        timestamp: '',
        comments: []
    },
    userPhoto:
      "http://fangmarks.com/wp-content/uploads/2013/05/instagram-fangmarks-may-10.jpg",
};

const filtered = defaultState.posts;

const init = () => ({
    ...defaultState,
    filtered
});

export default (state = init(), action) => {
    switch(action.type) {
        case FETCH_DATA: {
            return {
                ...state,
                posts: [...action.payload]
            };
        };
        case UPVOTE_POST: {
            let post = state.posts.find((post) => post.id === action.payload[0])
            // post = {...state, votes: action.newVotes}
                    
            return {
                ...state,
                post:   post.votes = action.payload[1]
                // selectedPost: {...post},
                // posts: [...state.posts]
            }
            
        }
        case SELECT_POST: {
            return {
                ...state,
                selectedPost: action.payload
            }
        }
        case ADD_COMMENT: {
            let post = state.posts.find((post) => post.id === action.payload[0])
            post.comments = [...state.selectedPost.comments, action.payload[1]]
            return {
                ...state,
                posts: [...state.posts],
               post: post
            }
        }
        case ADD_SUB_COMMENT: {
            let post = state.posts.find((post) => post.id === action.payload[0])
            let parentId = action.payload[1];
            let parent;
            let findDeep = function(comments, id) {
                console.log('id', id)
                return comments.find(function(c) {
                    if(c.id === id) {
                        console.log('c', c)
                        console.log('parentId', parentId)
                        parent = c;
                      return parent;
                    } else if(c.comments)  {
                        return findDeep(c.comments, id)
                    };
                    return parent;
                })
              }
            findDeep(state.posts, parentId)
            console.log('comment', parent)
            post.comments = [...state.selectedPost.comments]
            parent.comments = [...parent.comments, action.payload[2]]
            return {
                ...state,
                posts: [...state.posts],
                post: post,
                // parent: parent,
            }   
        }
        case SEARCH_POSTS: {
            return {
                ...state, 
                filtered: action.payload
            }
        }
        default: 
            return state;
    }
}