import Usuario from "../models/usuario";

export default async function getUserApi(id: number): Promise<Usuario> {
  try {
    const response = await fetch(`http://192.168.1.79:8081/api/usuarios/1`);
    const result = await response.text();
    console.log('getUserApi');
    
    return JSON.parse(result);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}
