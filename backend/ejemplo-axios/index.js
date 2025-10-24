import axios, { AxiosError } from 'axios'

const ejemplosAxios = async () => {
  try{
    // Implementación de axios metodo GET
    const response1 = await axios.get('https://jsonplaceholder.typicode.com/posts',
      {params: {_limit: 5}}
    )
    console.log(response1.data);

    // Implementación de axios metodo POST
    const response2 = await axios.post('https://jsonplaceholder.typicode.com/posts',
      {title:'Mi post de prueba', body:'Body de mi post de prueba', userId: 1}
    )
    console.log(response2.data);

    // Implementación de axios metodo PUT
    const response3 = await axios.patch(`https://jsonplaceholder.typicode.com/posts/${response2.data.id}`,
      {title:'Mi post de prueba actualizado'}
    )
    console.log(response3.data);

    // Implementación de axios metodo PUT
    const response4 = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${response2.data.id}`)
    console.log(response4.data);

  }catch(e){
    console.log('Error obteniendo datos');
  }
}
ejemplosAxios();