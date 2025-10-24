
const obtenerPosts = async () => {
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log(response);
    const data = await response.json();
    console.log(data);
  }catch(e){
    console.log('Error obteniendo datos');
  }
}
obtenerPosts();