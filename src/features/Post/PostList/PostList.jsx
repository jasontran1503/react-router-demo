import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { postList } from '../../../common/constants/posts';

function PostList() {
  const match = useRouteMatch();

  return (
    <div style={{ marginTop: '50px' }}>
      <Link to={`${match.url}/create`}>
        <button className="btn btn-primary">New Post</button>
      </Link>
      <ul>
        {postList.map((post) => {
          return (
            <Link key={post.id} to={`${match.url}/detail/${post.id}`}>
              <li>{post.title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default PostList;
