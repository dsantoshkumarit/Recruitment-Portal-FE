import React from 'react';
import {Menu,Segment} from 'semantic-ui-react';
import Login from './Login';
import Signup from './Signup';

export default function LoginOrSignupMenu({user}){
const [activeItem,setActiveItem]=React.useState('login');
const handleItemClick = (e, { name }) => setActiveItem(name);
    return(
      <>
        <Menu attached='top' tabular >
          <Menu.Item
            name='login'
            active={activeItem === 'login'}
            onClick={handleItemClick}
            
          />
          <Menu.Item
            name='signup'
            active={activeItem === 'signup'}
            onClick={handleItemClick}
            
          />          
        </Menu>

        <Segment attached='bottom' >

        {activeItem==='login'?<Login user={user}/>:<Signup user={user}/>}
        
      
        </Segment>
        </>
    );
};

// const Login=({user})=>{
// const [email,setEmail]=React.useState('');
// const [password,setPassword]=React.useState('');

//   const handleChange = (e, { name, value }) => {
//     if(name==='email'){
//     setEmail( value );
//   }
//   else
//   {
//     setPassword(value);
//   }  
//   }
//   const handleSubmit = () => {

//   };

//   return (
//     <Form  onSubmit={handleSubmit}>
//     <Form.Field>
      
//       <Form.Input
//         placeholder='Email'
//         name='email'
//         value={email}
//         onChange={handleChange}
//       />
//       </Form.Field>
//       <Form.Field>
//       <Form.Input
//         placeholder='Password'
//         name='password'
//         value={password}
//         onChange={handleChange}
//       />
//       <Form.Button content='Login' inverted fluid color='violet' />
//     </Form.Field>
//   </Form>
//   );
// };

// const SignUp=({user})=>{

//   const [name,setName]=React.useState('');
//   const [email,setEmail]=React.useState('');
//   const [password,setPassword]=React.useState('');
//   const [company,setCompany]=React.useState('');
//   console.log(axios.defaults.baseURL)
//     const handleChange = (e, { name, value }) => {

//       switch(name){
//         case 'name':setName(value);
//                     break;
//         case 'email':setEmail( value );
//                     break;
//         case 'password':setPassword( value );
//                     break;
//         case 'company':setCompany( value );
//                     break;
//         default : console.log('Error in selection');                                
//       }
      

//     }
//     const handleSubmit = () => {
      
//     };
  
//     return (
//       <Form  onSubmit={handleSubmit}>
//         <Form.Field>        
//         <Form.Input
//           placeholder='Name'
//           name='name'
//           value={name}
//           onChange={handleChange}
//         />
//         </Form.Field>
//       <Form.Field>        
//         <Form.Input
//           placeholder='Email'
//           name='email'
//           value={email}
//           onChange={handleChange}
//         />
//         </Form.Field>
//         <Form.Field>
//         <Form.Input
//           placeholder='Password'
//           name='password'
//           value={password}
//           onChange={handleChange}
//         />
//         {user==='recruiter'?
//         <Form.Field>        
//         <Form.Input
//           placeholder='Company'
//           name='company'
//           value={company}
//           onChange={handleChange}
//         />
//         </Form.Field>:null}
        
//         <Form.Button content='Sign Up' inverted fluid color='violet' />
//       </Form.Field>
//     </Form>
//     );
//   };