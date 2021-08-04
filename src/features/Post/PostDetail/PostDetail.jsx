import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
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
      <button onClick={backToPostList}>Back</button>
    </div>
  );
}

export default PostDetail;
