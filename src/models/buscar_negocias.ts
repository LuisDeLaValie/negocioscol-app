export type resultadoBusqueda = BuscarNegocio | BuscarProducto | BuscarServicio;
export type busqueda = resultadoBusqueda[];

export interface BuscarNegocio {
  id: number;
  negocio: string;
  direccion: string;
  logo: string;
}
export function isBuscarNegocio(obj: any): obj is BuscarNegocio {
  return (
    typeof obj.id === "number" &&
    typeof obj.negocio === "string" &&
    typeof obj.direccion === "string" &&
    typeof obj.logo === "string"
  );
}

export interface BuscarProducto {
  id: number;
  idnegoci: number;
  producto: string;
  negocio: string;
  presentacion: string;
  imagen: string;
}

export function isBuscarProducto(obj: any): obj is BuscarProducto {
  return (
    typeof obj.id === "number" &&
    typeof obj.idnegoci === "number" &&
    typeof obj.producto === "string" &&
    typeof obj.negocio === "string" &&
    typeof obj.presentacion === "string" &&
    typeof obj.imagen === "string"
  );
}

export interface BuscarServicio {
  id: number;
  idnegoci: number;
  servicio: string;
  negocio: string;
  imagen: string;
}

export function isBuscarServicio(obj: any): obj is BuscarServicio {
  return (
    typeof obj.id === "number" &&
    typeof obj.idnegoci === "number" &&
    typeof obj.servicio === "string" &&
    typeof obj.negocio === "string" &&
    typeof obj.imagen === "string"
  );
}
