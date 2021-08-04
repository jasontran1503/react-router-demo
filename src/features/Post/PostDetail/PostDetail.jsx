import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { postList } from '../../../common/constants/posts';
import useQueryParams from '../../../common/hooks/useQueryParams';

function PostDetail() {
  const { postId } = useParams();
  const postItem = postList.find((post) => post.id === +postId);
  const history = useHistory();
  const queryParams = useQueryParams();

  const backToPostList = () => {
    history.push('/post');
    // console.log(queryParams.get('queryParamKey'));
  };

  return (
    <div style={{ marginTop: '50px' }}>
      <div>{postItem.body}</div>
      <button className="btn btn-warning" onClick={backToPostList}>
        Back
      </button>
      <Link to={`/post/update/${postId}`}>
        <button className="btn btn-primary">Update this post</button>
      </Link>
    </div>
  );
}

export default PostDetail;
