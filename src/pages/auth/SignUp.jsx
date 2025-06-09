import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 md:w-1/2 max-w-sm  shadow-2xl">
          <form className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input type="text" name="name" className="input" placeholder="your name" />
              <label className="label">Email</label>
              <input type="email"  name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              <input
                className="btn btn-neutral mt-4"
                type="submit"
                value="Signup"
              />
            </fieldset>
          </form>
          <p className='mb-6 mx-auto'><small>Already registered ? <Link to ='/login' className='underline text-orange-400'>Go to login</Link> </small></p>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
