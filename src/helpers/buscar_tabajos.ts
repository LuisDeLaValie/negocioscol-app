import {
  BuscarNegocio,
  BuscarProducto,
  BuscarServicio,
  busqueda,
  isBuscarNegocio,
  isBuscarProducto,
  isBuscarServicio,
} from "../models/buscar_negocias";



const listProductos: busqueda = [
  {
    id: 1,
    negocio: "Restaurante El Sabor",
    direccion: "Calle 123, Ciudad del Sol",
    logo: "https://example.com/restaurante-el-sabor.png",
  },
  {
    id: 2,
    negocio: "Tienda de Ropa Moda",
    direccion: "Avenida Principal, Centro Comercial Plaza Mayor",
    logo: "https://example.com/tienda-ropa-moda.jpg",
  },
  {
    id: 3,
    negocio: "Supermercado La Abundancia",
    direccion: "Calle 5ta, Colonia Los Ángeles",
    logo: "https://example.com/supermercado-la-abundancia.svg",
  },
  {
    id: 4,
    negocio: "Peluquería Estilo Glam",
    direccion: "Calle 16, Zona Dorada",
    logo: "https://example.com/peluqueria-estilo-glam.png",
  },
  {
    id: 5,
    negocio: "Librería El Libro Mágico",
    direccion: "Avenida Juárez, Edificio Cultural",
    logo: "https://example.com/libreria-el-libro-magico.jpg",
  },
  {
    id: 1,
    idnegoci: 1,
    producto: "Camiseta Verde",
    negocio: "Tienda de Ropa Moda",
    presentacion: "Talla M, color verde",
    imagen: "https://example.com/camiseta-verde.jpg",
  },
  {
    id: 2,
    idnegoci: 1,
    producto: "Pantalón Jeans",
    negocio: "Tienda de Ropa Moda",
    presentacion: "Talla 32, azul oscuro",
    imagen: "https://example.com/pantalon-jeans.jpg",
  },
  {
    id: 3,
    idnegoci: 2,
    producto: "Leche Descremada",
    negocio: "Supermercado La Abundancia",
    presentacion: "1 litro",
    imagen: "https://example.com/leche-descremada.png",
  },
  {
    id: 4,
    idnegoci: 2,
    producto: "Manzanas Rojas",
    negocio: "Supermercado La Abundancia",
    presentacion: "1 kg",
    imagen: "https://example.com/manzanas-rojas.jpg",
  },
  {
    id: 5,
    idnegoci: 3,
    producto: "Libro de Aventuras",
    negocio: "Librería El Libro Mágico",
    presentacion: "Autor: Juan Pérez",
    imagen: "https://example.com/libro-aventuras.jpg",
  },
  {
    id: 1,
    idnegoci: 1,
    servicio: "Corte de Cabello",
    negocio: "Peluquería Estilo Glam",
    imagen: "https://example.com/corte-de-cabello.jpg",
  },
  {
    id: 2,
    idnegoci: 1,
    servicio: "Manicure y Pedicure",
    negocio: "Peluquería Estilo Glam",
    imagen: "https://example.com/manicure-pedicure.jpg",
  },
  {
    id: 3,
    idnegoci: 2,
    servicio: "Asesoría Nutricional",
    negocio: "Supermercado La Abundancia",
    imagen: "https://example.com/asesoria-nutricional.png",
  },
  {
    id: 4,
    idnegoci: 3,
    servicio: "Impresión y Fotocopiado",
    negocio: "Librería El Libro Mágico",
    imagen: "https://example.com/impresion-fotocopiado.jpg",
  },
  {
    id: 5,
    idnegoci: 3,
    servicio: "Encuadernación",
    negocio: "Librería El Libro Mágico",
    imagen: "https://example.com/encuadernacion.jpg",
  },
];

export function buscar(search: string, filto: number[]) {
  var auc: busqueda = [];
  for (let i = 0; i < listProductos.length; i++) {
    const element = listProductos[i];

    if (isBuscarNegocio(element) && filto.includes(0)) {
      const negocio = element.negocio.includes(search);
      if (negocio) auc.push(element);
    }

    if (isBuscarProducto(element) && filto.includes(1)) {
      const negocio = element.negocio.includes(search);
      const producto = element.producto.includes(search);
      if (negocio || producto) auc.push(element);
    }

    if (isBuscarServicio(element) && filto.includes(2)) {
      const negocio = element.negocio.includes(search);
      const servicio = element.servicio.includes(search);
      if (negocio || servicio) auc.push(element);
    }
  }

  return auc;
}
