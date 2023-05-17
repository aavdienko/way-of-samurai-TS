import { Field, InjectedFormProps, reduxForm } from "redux-form"
import { requiredField } from "../../utils/validators/validators"
import { Input } from "../../common/formControls/FormControls"
import { connect } from "react-redux"
import { loginThunkCreator } from "../../redux/auth-reducer"
import { AppStateType } from "../../redux/redux-store"
import { Redirect } from "react-router-dom"


type FormDataType = {
  login: string
  password: string
  rememberMe: boolean
}
type LoginMSTPType = {
  isAuth: boolean
}

type LoginMDTPType = {
  loginThunkCreator: (email: string, password: string, rememberMe: boolean) => void
}

type LoginPropsType = LoginMDTPType & LoginMSTPType

export const Login = (props: LoginPropsType) => {
  const onSubmit = (formData: FormDataType) => {
    props.loginThunkCreator(formData.login, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'}/>
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



const mapStateToProps = (state: AppStateType): LoginMSTPType => {
  return {
    isAuth: state.auth.isAuth
  }
}
export const LoginContainer = connect(mapStateToProps, {loginThunkCreator})(Login)