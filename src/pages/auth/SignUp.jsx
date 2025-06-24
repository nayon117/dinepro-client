import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  useTitle("Signup")
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const {createUser,updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email,data.password)
    .then(res=>{
      const loggedUser = res.user;
      console.log(loggedUser);
      updateUserProfile(data.name,data.photoURL)
      .then(()=>{
        console.log('user profile updated')
        reset();
        toast.success("Signup Successfull");
        navigate('/');
      })
      .catch(err=>console.log(err));
    })
  }
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
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input type="text" {...register("name",{ required: true })} className="input" placeholder="your name" />
              {errors.name && <span className="text-red-600">Name is required</span>}

              {/* photo */}
              <label className="label">Photo URL</label>
              <input type="text" {...register("photoURL",{ required: true })} className="input" placeholder="photoURL" />
              {errors.photoURL && <span className="text-red-600">photoURL is required</span>}

              {/* // email */}
              <label className="label">Email</label>
              <input type="email"  {...register("email" , { required: true })} className="input" placeholder="Email" />
              {errors.email && <span className="text-red-600">Email is required</span>}

              {/* //password */}
              <label className="label">Password</label>
              <input type="password" {...register("password", { required: true ,minLength:6})} className="input" placeholder="Password" />
              {errors.password?.type == 'required' && <span className="text-red-600">Password is required</span>}
              {errors.password?.type == 'minLength' && <span className="text-red-600">Password must be 6 characters</span>}


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
