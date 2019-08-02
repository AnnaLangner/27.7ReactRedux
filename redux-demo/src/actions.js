import uuid from 'uuid';

export const CREATE_COMMENT = 'CREATE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function createComment(text) {
    return {
        type: CREATE_COMMENT,
        text,
        id: uuid.v4()
    }
}

function editComment(text, commentId) {
    return {
        type: EDIT_COMMENT,
        id: commentId,
        text
    }
}

function removeComment(text, id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

function thumbUpComment(commentId) {
    return {
        type: THUMB_UP_COMMENT,
        id : commentId
    }
}

function thumbDownComment(commentId) {
    return {

        type: THUMB_DOWN_COMMENT,
        id: commentId

    }
}

export const createComment1 = createComment;
export const editComment1 = editComment;
export const removeComment1 = removeComment;
export const thumbUpComment1 = thumbUpComment;
export const thumbDownComment1 = thumbDownComment;