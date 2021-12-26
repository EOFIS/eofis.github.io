import React from 'react';
import { useForm } from 'react-hook-form';

export default () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.debug(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register("Name", {required: 'A display name is required', maxLength: 1024})} />
      <input type="email" placeholder="Email" {...register("Email", {required: 'An email is required'})} />
      <input type="password" placeholder="Confirm Password" {...register("Confirm Password", {required: 'Please enter a password', pattern: /^\S+@\S+$/i})} />
      <input type="password" placeholder="Password" {...register("Password", {required: 'Please confirm your password', min: 8})} />

      <input type="submit" />
    </form>
  );
};
