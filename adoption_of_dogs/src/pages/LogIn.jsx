import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { userConnection } from '../redux/userConncection';

const LogIn = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(userConnection({ email: data.email, password: data.password }));
  };
  return (
    <React.Fragment>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('email', { required: 'email is required!' })}
            type="email"
          ></input>
          <input
            {...register('password', { required: 'password is required!' })}
            type="password"
          ></input>
          <input type="submit"></input>
        </form>
      </div>
    </React.Fragment>
  );
};
export default LogIn;
