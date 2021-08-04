import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import PostDetail from './PostDetail/PostDetail';
import PostList from './PostList/PostList';

function Post() {
  const match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={`${match.url}/:postId`} component={PostDetail}></Route>
        <Route path={`${match.url}`} component={PostList}></Route>
      </Switch>
    </div>
  );
}

export default Post;
