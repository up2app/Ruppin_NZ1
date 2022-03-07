import React, { useContext, useEffect } from 'react';
import { UserContext } from '../Context/UserContext'
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();

  const { currentUser, Logout } = useContext(UserContext);

  //כל פעם שהדף נטען בצע את הפעולות האלו או שינוי במשתמש הנוכחי
  useEffect(() => {
    if (currentUser === null || currentUser === undefined)
      navigate('/');
  }, []);
  useEffect(() => {
    if (currentUser === null || currentUser === undefined)
      navigate('/');
  }, [currentUser]);


  return (
    <>
    {
      currentUser === null || currentUser === undefined ? 
      <p>kuku</p>
      :
      <div>
        <h1>Hi {currentUser.name}</h1>
        <h2>Date of Birth: {currentUser.dob}</h2>
        <h3>Motto: {currentUser.msg}</h3>
        <button onClick={()=>Logout()}>Logout</button>
      </div>
    }
    </>
  )
}
