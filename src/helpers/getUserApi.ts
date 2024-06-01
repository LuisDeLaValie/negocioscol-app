import Usuario from "../models/usuario";

export default async function getUserApi(id: number): Promise<Usuario> {
  try {
    const response = await fetch(`https://api-negosioscol-production.up.railway.app/api/usuarios/${id}`);
    const result = await response.text();
    
    return JSON.parse(result);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}
