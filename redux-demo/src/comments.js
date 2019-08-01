import {CREATE_COMMENT, EDIT_COMMENT, REMOVE_COMMENT, THUMB_DOWN_COMMENT, THUMB_UP_COMMENT} from "./actions";

function comments (state = [], action) {
    switch (action.type) {
        case CREATE_COMMENT:
            return [
                {
                    id: action.id,
                    text: action.text,
                    votes: 0
                }
                , ...state];

        case EDIT_COMMENT:
            const presentState = Object.parse(Object.stringify(state));
            const alteredState = presentState.forEach(item => {
                if(item.id === action.id) return { ...item, text: action.text };
                else item;
            });

            return alteredState;

        case REMOVE_COMMENT:
            return state.comments.filter(comment => comment.id !== action.id);

        case THUMB_UP_COMMENT:
            const presentState = Object.parse(Object.stringify(state));
            const alteredState = presentState.forEach(item => {
                if(item.id === action.id) return { ...item, votes: item.votes + 1 };
                else item;
            });

            return alteredState;

        case THUMB_DOWN_COMMENT:
            const presentState = Object.parse(Object.stringify(state));
            const alteredState = presentState.forEach(item => {
                if(item.id === action.id) return { ...item, votes: item.votes - 1 };
                else item;
            });

            return alteredState;

        default:
            return state;
    }
}

export default comments;