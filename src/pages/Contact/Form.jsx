import { useForm } from 'react-hook-form';
import React from 'react'

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
      console.log(data);
      
    }

  return (<>
  
    <form 
    className='absolute max-w-md w-full flex flex-col items-center justify-center space-y-5 top-1/2 sm:top-[60%] left-1/2  -translate-y-1/2 -translate-x-1/2 '
    onSubmit={handleSubmit(onSubmit)}>
      <input 
      className='w-full focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground p-2 rounded-md shadow-lg custom-bg'
      type="text" placeholder="name" {...register("name", {required: true})} />
      {errors.name && (<span className='inline-block self-start  text-accent'>{errors.name.message}</span>)}

      <input 
        className='w-full focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground p-2 rounded-md shadow-lg custom-bg'
      type="email" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      {errors.Email && (<span className='inline-block self-start  text-accent'>{errors.Email.message}</span>)}  
      <textarea placeholder='message'
        className='w-full focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground p-2 rounded-md shadow-lg custom-bg'
      {...register("message", {required: true, max: 500, min: 10, maxLength: 500})} />
       {errors.message && (<span className='inline-block self-start  text-accent'>{errors.message.message}</span>)}
       <input type="submit" 
      value="cast yout message"
      className=' px-10 py-4 focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground p-2 rounded-md shadow-lg backdrop-blur-sm 
      bg-background text-foreground capitalize'
      />
    </form>
  </>  
  )
}

export default Form