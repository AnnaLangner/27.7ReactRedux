import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbUpComment1, thumbDownComment1} from './index';

const mapDispatchToProps = dispatch => ({
    thumbUpComment: (id) => dispatch(thumbUpComment(id)),
    thumbDownComment: (id) => dispatch(thumbDownComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);