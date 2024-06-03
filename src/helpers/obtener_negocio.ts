export interface Servicio {
  Id_servicio: number;
  Nombre: string;
  Descripcion: string;
  Imagen: string;
  Unidad: number;
  Creado: Date;
  Actualizado: Date;
}
export interface Producto {
  Id_Producto: number;
  Nombre: string;
  Descripsion: string;
  Imagen: string;
  Unidad: number;
  Creado: Date;
  Actualizado: Date;
}

export interface Negocio {
  Id_Negocio: number;
  Nombre: string;
  Descripsion: string;
  Direccion: string;
  Telefono: string;
  Correo: string;
  Imagen: string;
  Latitude: number;
  Longitude: number;
  Facebook: string;
  Twitter: string;
  Instagram: string;
  Website: string;
  Creado: Date;
  Actualizado: Date;
  Servicios?: Servicio[];
  Productos?: Producto[];
}

export const GetNegocio = async (id: number): Promise<Negocio> => {
  try {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions: RequestInit = {
      method: "Get",
      headers: myHeaders,
      // redirect: "follow",
    };

    var responseNegocio = await fetch(
      `${apiUrl}/api/negocios/${id}`,
      requestOptions
    );
    var negocio = JSON.parse(await responseNegocio.text());

    var responseProductos = await fetch(
      `${apiUrl}/api/negocios/productos/${id}`,
      requestOptions
    );
    var producto = JSON.parse(await responseProductos.text());

    var responServicios = await fetch(
      `${apiUrl}/api/negocios/servisios/${id}`,
      requestOptions
    );
    var servicios = JSON.parse(await responServicios.text());

    var respuesta = { ...negocio, Productos: producto, Servicios: servicios };
    return respuesta;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};
