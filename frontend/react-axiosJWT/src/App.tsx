
import { useForm } from 'react-hook-form'
import './App.css'
import { postLogin } from './services/auth.service'
import { useAuthStore } from './store/auth.store'

type loginType = {
  email: string;
  password: string;
}

function App() {
  const token = useAuthStore((s) => s.token);
  const setToken = useAuthStore((s) => s.setToken);

  const {register, handleSubmit, formState: { errors, isSubmitting }} = 
    useForm<loginType>({mode: 'onSubmit'});

  const loginHandler = async (data: loginType) => {
    console.log(data);
    const res = await postLogin(data.email, data.password);
    console.log('respuesta de token:',res);
    setToken(res.data.token);

    console.log('......');
    console.log(token)
  }

  return (
    <>
      <form onSubmit={handleSubmit(loginHandler)}>
        <div className="flex flex-col">
          <input type="text" className="p-2 bg-white border border-gray-400 rounded-lg" {...register('email', {required: 'El email es obligatorio'})} placeholder="email" />
          {errors.email && <span>{errors.email.message}</span>}
          <br />
          <input type="password" className="p-2 bg-white border border-gray-400 rounded-lg"{...register('password', {required: 'El password es obligatorio'})}/>
          {errors.password && <span>{errors.password.message}</span>}
          <br />
        </div>
        <button className={`p-2 ${isSubmitting ? 'bg-blue-100': 'bg-blue-500'}  text-white rounded-lg`} disabled={isSubmitting} type="submit">Iniciar sesión</button>
      </form>
    </>
  )
}

export default App
