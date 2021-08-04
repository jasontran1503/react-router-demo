import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';
import { postList } from '../../../common/constants/posts';

function PostForm() {
  const { postId } = useParams();
  let defaultValues = {};
  let postItem = {};
  if (postId) {
    postItem = postList.find((post) => post.id === +postId);
    defaultValues = {
      title: postItem.title,
      body: postItem.body,
    };
  }

  const validation = yup.object().shape({
    title: yup.string().required('Title is required'),
    body: yup.string().required('Body is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(validation),
    defaultValues,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form style={{ marginTop: '20px' }} onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          {...register('title')}
          className={`form-control ${errors.title ? 'is-invalid' : ''}`}
        />
        <p className="invalid-feedback">{errors.title?.message}</p>
      </div>
      <div className="form-group">
        <label>Body</label>
        <input
          type="text"
          {...register('body')}
          className={`form-control ${errors.body ? 'is-invalid' : ''}`}
        />
        <p className="invalid-feedback">{errors.body?.message}</p>
      </div>
      <button type="submit" className="btn btn-success">
        {postId ? 'Update' : 'Create'}
      </button>
    </form>
  );
}

export default PostForm;
