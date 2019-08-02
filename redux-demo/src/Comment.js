import React from 'react';
import {createComment1, editComment1, removeComment1, thumbDownComment1, thumbUpComment1} from './actions';

const Comment = ({text, votes, id, thumbUpComment1, thumbDownComment1}) =>
    <li>
        {text} <span> votes: {votes}</span>
        <button onClick={() => thumbUpComment1(id)}>Thumb up</button>
        <button onClick={() => thumbDownComment1(id)}>Thumb down</button>
    </li>;

export default Comment;