import'./User.scss'
import { userData } from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../store/userSlice';
const User = () => {
const dispatich = useDispatch()
const res = useSelector((state) => state.user)
  console.log(res)
  const addNewUser = (payload) => {
  dispatich(add(payload))
  } 
  return (
    <div className='content'>
      <div className="table">
        <h1> List of User Details</h1>
        <button onClick={() => addNewUser(userData())}>Add User</button>
      </div>
        <hr/>
        <ul> 
      
       {res.map((name) => (
         
         <li key={name}>{name}</li>
      
       
       ))}
         
        </ul>
    </div>
  )
}

export default User