import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';


const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const {signIn} = useContext(AuthContext);

  useEffect(() => {
     loadCaptchaEnginge(6); 
  }, [])

  const handleValidateCaptcha = () =>{
      const value = captchaRef.current.value;
      if(validateCaptcha(value)) setDisabled(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email,password)
    .then(res=>{
      const user = res.user;
      console.log(user);
    })
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 md:w-1/2 max-w-sm  shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />

            
                <label className="label">
                <LoadCanvasTemplate />
                </label>
              <input
                type="text"
                name="captcha"
                className="input"
                placeholder="type captcha"
                ref={captchaRef}
              />
              <button onClick={handleValidateCaptcha}  className='btn btn-outline btn-xs mt-2 w-full '>Validate</button>
      
              <input
                className="btn btn-neutral mt-4"
                type="submit"
                value="Login"
                disabled={disabled}
              />
            </fieldset>
          </form>
          <p className='mb-6 mx-auto'><small>New here ? <Link to ='/signup' className='underline text-orange-400'>Create a new Account</Link> </small></p>
        </div>
      </div>
    </div>
  );
};
export default Login;
