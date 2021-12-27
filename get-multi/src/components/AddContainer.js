import React from 'react'
import { connect } from 'react-redux'
import postUserInfo from '../redux/User/userActions';
import { useNavigate } from 'react-router-dom';
import './postt.css'


function AddContainer (props) {
    
  const {id, name,phone,email } = props.user;

  let navigate = useNavigate()

  const navi = () => {
    props.postUserInfo()
    navigate('/')
  }

    return (
        <div>
            <h2>User Details</h2>
                
            <h2>User Information</h2><br/>
            <label className='adder'>Name : </label>
            <input type="text" className='adder' id='name'/><br/>
            <label className='adder'>Phone : </label>
            <input type="phone" className='adder' id='phone'/><br/>
    

            <label className='adder'>Email : </label>
            <input type="email" className='adder' id='email'/><br/>

            <button id="write" onClick={navi}>click me</button>
         
        </div>
    )
}

const mapStateToProps = state => {
    return{
        user: state.userInfo.user
    }
}

const mapDispatchToProps = dispatch => {
    return{
        postUserInfo : () => {

            const user = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
            };

            dispatch(postUserInfo(user))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddContainer)