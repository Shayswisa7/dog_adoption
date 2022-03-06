import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { userConnection } from '../redux/userConncection';

const LogIn = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  const [ s , setS ] = useState('s');
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(userConnection({ email: data.email, password: data.password }));
    setS('');
  };
   useEffect(()=>{
      if(user.status === 'false' ){
        console.log("user not exist");
        alert('user not exist!')
      }
      if(user.status === 'success'){
        window.location.href = '/AdoptionDogs'
      }
    
   },[user.status])

  //  useEffect(() => {
  //    if(user.status == 'success'){
  //      window.localStorage.setItem('User', user.obj)
  //    }
  //  }, [user])

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
