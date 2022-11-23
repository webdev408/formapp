import { useForm } from "react-hook-form";

export const Contact = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="container">
      <h2 className="text-center my-4">Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="contact">
        <input
        {...register("name", {
          required:true, maxLength:25 
        })}
      />
        {errors.name && errors.name.message}
        
      <input
        type="email"
        {...register("email", {
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address", className: "form-control"
          }
        })}
      />
      {errors.email && errors.email.message}

      <input
        {...register("password", {
          validate: value => value !== "admin" || "Nice try!", className: "form-control"
        })}
      />
      {errors.password && errors.password.message}

      <button type="submit">Submit</button>
    </form>
    </div>
  )
};