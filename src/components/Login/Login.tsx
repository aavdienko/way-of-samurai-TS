import { Field, InjectedFormProps, reduxForm } from "redux-form"


type FormDataType = {
  login: string
  password: string
  rememberMe: boolean
}

export const Login = () => {
  const onSubmit = (formData: FormDataType) => {
    console.log(formData);
    
  }

  return (
    <div>
      <h2>LOGIN</h2>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}


export const LoginForm = (props: InjectedFormProps<FormDataType>) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field type="email" placeholder="Login" component={'input'} name={'login'}/>
        </div>
        <div>
          <Field type="password" placeholder="Passowrd" component={'input'} name={'password'}/>
        </div>
        <div>
          Remember me
          <Field type="checkbox"  id="1" component={'input'} name={'rememberMe'}/>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
  )
} 

export const LoginReduxForm = reduxForm<FormDataType>({
  form: 'login'
})(LoginForm)
