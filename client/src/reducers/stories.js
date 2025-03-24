const storyReducers=(state=[],action)=>{
    switch(action.type){
        case "FETCH_ALL_STORIES":
            return action.payload;
        case "CREATE_STORY":
            return [...state,action.payload];
        case "UPDATE_STORY":
        case "LIKE_STORY":     // it means that both update_story and like_story will do teh same thing
            return state.map(story => story._id === action.payload._id ? action.payload : story);
        case "DELETE_STORY":
            return state.filter(story=>story._id !== action.payload);
        default:
            return state;
    }
}
export default storyReducers;