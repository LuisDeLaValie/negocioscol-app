import Usuario from "../models/usuario";

export default async function getUserApi(id: number): Promise<Usuario> {
  try {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;
    const response = await fetch(`${apiUrl}/api/usuarios/${id}`);
    const result = await response.text();
    
    return JSON.parse(result);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}
