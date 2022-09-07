import React, { FC, useState, useEffect } from 'react';

import http from '../http';
import UserCards from '../components/Users/UserCards';

import { useSearch } from '../hooks/useSearch';
import { useAction } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelectors';


const Users: FC = () => {
  const {users} = useTypedSelector(state => state.users)
  const [search, setSearch] = useState('');
  const [showUserForm, setShowUserForm] = useState(false);
  const {getUsers} = useAction();

  useEffect(() => {
    getUsers();
  }, []);


  const deleteUser = async (id: number) => {
    const isDelete = window.confirm('Do you really delete this user?');
    if (isDelete) {
      const deletedUser = await http.delete(`users/${id}`);
      console.log(deletedUser);
      if (deletedUser.status === 200) {
        // setUsers(users.filter((user) => user.id !== id));
      }
    }
  };

  const searchedUsers = useSearch(users, "email", search);

  return (
    <>
      <div className='input-group mb-3'>
        <span className='input-group-text' id='basic-addon1'>
          Search
        </span>
        <input
          type='text'
          className='form-control'
          placeholder='Username'
          aria-label='Username'
          aria-describedby='basic-addon1'
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <button
        className='btn btn-success mt-3 mb-3'
        onClick={() => setShowUserForm(!showUserForm)}
      >
        Add New User
      </button>
      {/* {showUserForm && <UserAddForm setUsers={setUsers} users={users} />} */}
      <UserCards />
    </>
  );
};

export default Users;
