import axios from 'axios'

export const postLogin = async (email: string, password: string) => {
  try{
    const resp = await axios.post('http://172.17.185.54:3000/auth',
      {email, password}
    )
    console.log(resp.data);
    return resp.data;
  }catch(e){
    console.log('Error obteniendo datos', e);
  }
}
