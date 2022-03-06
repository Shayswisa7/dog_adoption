import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
const CreateUser = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let i = 0;
  const he = ['מייל', 'סיסמה', 'אישור סיסמה'];
  let s = 0;
  
  useDispatch(()=>{
    if(user.obj.status === 'no users'){
      alert("משתמש כבר קיים");
    }
    
  },[user.obj.status])
  const createUser = async (email, password) => {
    const result = await axios.post('http://localhost:8000/CreateUser', {
      type: 'User',
      user: {
        email: email,
        password: password,
        dogsList: [],
      },
    });

    return result.data;
  };
  const onSubmit = (data) => {
    if (data.password !== data.password1) {
      alert('הסיסמאות לא שוות!');
    } else {
      let result = createUser(data.email, data.password);
      if (result.error)
        result.then((result) => {
          alert(
            'error:',
            Object.keys(result.error)[0],
            result.error[Object.keys(result.error)[0]] + '.',
            'message: ',
            result.mess
          );
        });
      else {
        result.then((result) => {
          console.log(result);
          alert(
            Object.keys(result.error)[0]
          );
        });
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container">
              <div>
                <label htmlFor="email">מייל</label> <br />
                <input
                  {...register('email', { required: 'email is require!' })}
                  type="email"
                  name="email"
                  id="email"
                ></input>
              </div>
              <div>
                <label htmlFor="password">סיסמה</label> <br />
                <input
                  {...register('password', { required: 'email is require!' })}
                  type="password"
                  name="password"
                  id="password"
                ></input>
              </div>
              <div>
                <label htmlFor="password1">אישור סיסמה</label> <br />
                <input
                  {...register('password1', { required: 'email is require!' })}
                  type="password"
                  name="password1"
                  id="password1"
                ></input>
              </div>
            </div>
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
