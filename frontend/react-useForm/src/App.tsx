
import { useForm } from 'react-hook-form'
import './App.css'

type ProductType = {
  nombre: string;
  peso: number;
  tamanio: number;
  stock: number;
}

function App() {

  const {register, handleSubmit, formState: { errors, isSubmitting }} = 
    useForm<ProductType>({mode: 'onSubmit', defaultValues: {peso: 50}});

  const guardarProducto = async (data: ProductType) => {
    console.log(data);
    return new Promise(resolve => setTimeout(resolve, 10000));
  }

  return (
    <>
      <form onSubmit={handleSubmit(guardarProducto)}>
        <div className="flex flex-col">
          <input type="text" className="p-2 bg-white border border-gray-400 rounded-lg" {...register('nombre', {required: 'El nombre es obligatorio'})} placeholder="Nombre" />
          {errors.nombre && <span>{errors.nombre.message}</span>}
          <br />
          <input type="number" className="p-2 bg-white border border-gray-400 rounded-lg"{...register('peso', {required: 'El peso es obligatorio'})} placeholder="Peso" />
          {errors.peso && <span>{errors.peso.message}</span>}
          <br />
          <input type="number" className="p-2 bg-white border border-gray-400 rounded-lg"{...register('tamanio', {required: 'El tamanio es obligatorio'})} placeholder="Tamanio" />
          {errors.tamanio && <span>{errors.tamanio.message}</span>}
          <br />
          <input type="number" className="p-2 bg-white border border-gray-400 rounded-lg"{...register('stock', {required: 'El stock es obligatorio'})} placeholder="Stock" />
          {errors.stock && <span>{errors.stock.message}</span>}
          <br />
        </div>
        <button className={`p-2 ${isSubmitting ? 'bg-blue-100': 'bg-blue-500'}  text-white rounded-lg`} disabled={isSubmitting} type="submit">Guardar</button>
      </form>
    </>
  )
}

export default App
