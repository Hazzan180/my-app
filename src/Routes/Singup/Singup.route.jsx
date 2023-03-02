import { FaFacebookF } from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import  "./Singup.styles.css";

const Login = () => {
  return (
    <div className="wrapper">
    <div className="title">
     <h1>Get started</h1>
     <p>Already have an account? Login</p>
    </div>
    <div className="form">
      <div className="input_field">
       <label>Email</label>
       <input type="text" className="input" placeholder="roht@gmail.com"/> 
      </div>

      <div className="input_field">
       <label>Phone Number</label>
       <input type="tel" className="input" placeholder="081 0203 49950"/> 
      </div>

      <div className="input_field">
       <label>Pasworld</label>
       <input type="pasworld" className="input" placeholder="********"/> 
      </div>

      <div className="button">
       <button>Sign up</button>
      </div>

      <div className="others">
       <p>OR</p>
       <div className='social'>
         <FaTwitter />
         <FaFacebookF />
         <FaInstagram />
       </div>
      </div>
    </div>
   </div>
  )
}

export default Login
