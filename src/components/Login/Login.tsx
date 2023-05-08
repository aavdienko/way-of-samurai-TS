import { Field, InjectedFormProps, reduxForm } from "redux-form"
import { requiredField } from "../../utils/validators/validators"
import { Input } from "../../common/formControls/FormControls"


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
          <Field type="email" placeholder="Login" component={Input} name={'login'} validate={requiredField}/>
        </div>
        <div>
          <Field type="password" placeholder="Passowrd" component={Input} name={'password'} validate={requiredField}/>
        </div>
        <div>
          Remember me
          <Field type="checkbox"  id="1" component={Input} name={'rememberMe'}/>
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
