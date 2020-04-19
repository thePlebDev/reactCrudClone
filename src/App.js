import React, { useState } from 'react';

import UserTable from './tables/UserTables'
import AddUserForm from './forms/AddUsersForm'
import EditUserForm from './forms/EditUserForm'


const App =()=> {
  const usersData = [
    {id: 1, name:'Tan',Username:'dude'},
    {id: 2, name:'Tani',Username:'not dude'},
    {id: 3, name:'Tania',Username:'almost dude'},
  ]
  const initialFormState = {id:null,name:'', username:''}

  const [users,setUsers] = useState(usersData)
  const [editing,setEditing] = useState(false)
  const [currentUser,setCurrentUser] = useState(initialFormState)

  const addUser = user => {
    user.id = users.length +1
    setUsers([...users,user])
  }

  const deleteUser = id =>{
    setUsers(users.filter(user=> user.id !== id))
  }

  const editRow = user => {
    setEditing(true)
    setCurrentUser({id:user.id, name:user.name,username:user.username})
  }

  const updateUser = (id, updateUser) =>{
    setEditing(false)
    setUsers(users.map(user => (user.id===id? updateUser: user)))
  }

  return (
    <div className='container'>
      <h1> CRUD APP with hooks</h1>
      <div className='flex-row'>
      <div className="flex-large">
{editing ? (
  <div>
    <h2>Edit user</h2>
    <EditUserForm
      setEditing={setEditing}
      currentUser={currentUser}
      updateUser={updateUser}
    />
  </div>
) : (
  <div>
    <h2>Add user</h2>
    <AddUserForm addUser={addUser} />
  </div>
)}
</div>
        <div className='flex-large'>
          <h2>View Users</h2>
          <UserTable users={users} deleteUser={deleteUser}  editRow={editRow}/>
        </div>
      </div>

    </div>
  )
}

export default App
