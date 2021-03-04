import React from 'react';
import { useForm } from 'react-hook-form';
import { Input, Textarea, StyledFormName, FieldRequired } from '../styled/styledForm';
import { Button } from '../styled/styledHero';

const FormComponent = () => {
  const {
    register, handleSubmit, watch, errors,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch('example'));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledFormName>Send a message</StyledFormName>
      <div>
        <Input name="name" ref={register({ required: true })} placeholder="type your name" />
        {errors.name && <FieldRequired>This field is required</FieldRequired>}
      </div>
      <div>
        <Input name="email" type="email" ref={register({ required: true })} placeholder="type your email" />
        {errors.email && <FieldRequired>This field is required</FieldRequired>}
      </div>
      <div>
        <Textarea type="textarea" name="text" ref={register({ required: true })} placeholder="type your message" />
        {errors.text && <FieldRequired>This field is required</FieldRequired>}
      </div>
      <Button type="submit">send</Button>
    </form>
  );
};

export default FormComponent;
