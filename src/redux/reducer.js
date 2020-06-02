import {
    FETCH_DATA, 
    UPVOTE_POST,
    SELECT_POST,
    ADD_COMMENT
} from './types';

import dummyData from '../dummy-data';

console.log(dummyData)

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
                    parentId: 1010,
                    username: "biancasaurus",
                    text: "For starters, the shop, the meat, and the all equipment for storage and whatnot.",
                    comments: [
                        {
                            id: 2,
                            parentId: 1,
                            username: "twitch",
                            text: "Thanks captain obvious",
                            comments: [ 
                                {
                                id: 3,
                                parentId: 2,
                                username: "dennis_futbol",
                                text: "Right lol"
                                }
                            ]
                        },
                        {
                            id: 4,
                            parentId: 1010,
                            username: "michaelmarzetta",
                            text: "Omg no help at all lol"
                        },
                        { 
                            id: 5,
                            parentId: 1,
                            username: "themexican_leprechaun",
                            text: "Can you be more specific regarding equipment"
                        },
                       
                    ],
                },
                {
                    id: 6,
                    parentId: 1010,
                    username: "roastedLove",
                    text: "Besides the actual property and equipment, I mean..."
                },
               
                {
                    id: 7,
                    parentId: 1010,
                    username: "martinseludo",
                    text: "Lots of permits!"
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
                    parentId: 2020,
                    username: "twitch",
                    text: "Epic Street Fighter action here in Vegas!"
                },
                {
                    id: 9,
                    parentId: 2020,
                    username: "michaelmarzetta",
                    text: "Omg that match was crazy"
                },
                {
                    id: 10,
                    parentId: 2020,
                    username: "themexican_leprechaun",
                    text: "What a setup"
                },
                {
                    id: 11,
                    parentId: 2020,
                    username: "dennis_futbol",
                    text: "It that injustice"
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
      "http://fangmarks.com/wp-content/uploads/2013/05/instagram-fangmarks-may-10.jpg"
};

const init = () => ({
    ...defaultState
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case FETCH_DATA: {
            return {
                ...state,
                posts: [...action.payload]
            };
        };
        case UPVOTE_POST: {
            let post = state.posts.find((post) => post.id == action.payload[0])
            // post = {...state, votes: action.newVotes}
          
            console.log('post', post)
            
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
            let post = state.posts.find((post) => post.id == action.payload[0])
            return {
                ...state,
                post: {...state, 
                    comments: [...post.comments, action.payload]
                }
            }
        }
        default: 
            return state;
    }
}