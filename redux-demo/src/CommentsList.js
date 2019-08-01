import React from 'react';
import Comment from 'Comment';

const CommentList = ({coments}) => <ul>{comments.map(comment => <Comment key={comment.id} {...coment}/>)}</ul>;

export default CommentList;