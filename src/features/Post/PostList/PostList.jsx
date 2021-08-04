import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { postList } from '../../../common/constants/posts';

function PostList() {
  const match = useRouteMatch();

  return (
    <div style={{ marginTop: '50px' }}>
      <ul>
        {postList.map((post) => {
          return (
            <Link key={post.id} to={`${match.url}/${post.id}`}>
              <li>{post.title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default PostList;
