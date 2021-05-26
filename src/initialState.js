import guajolota_verde from './assets/images/guajolota-verde.png'
import guajolota_mole from './assets/images/guajolota-mole.png'
import guajolota_pasas from './assets/images/guajolota-pasas.png'
import guajolota_piña from './assets/images/guajolota-piña.png'
import guajolota_guayaba from './assets/images/guajolota-guayaba.png'

import bebida_champurrado from './assets/images/bebida-champurrado.png'
import bebida_cafe from './assets/images/bebida-cafe.png'
import bebida_chocolate from './assets/images/bebida-chocolate.png'
import bebida_arroz from './assets/images/bebida-arroz.png'

import tamal_verde from './assets/images/tamal-verde.png'
import tamal_mole from './assets/images/tamal-mole.png'
import tamal_pasas from './assets/images/tamal-pasas.png'
import tamal_piña from './assets/images/tamal-piña.png'
import tamal_guayaba from './assets/images/tamal-guayaba.png'

import sabor_verde from './assets/images/sabor-verde.svg'
import sabor_mole from './assets/images/sabor-mole.svg'
import sabor_guayaba from './assets/images/sabor-guayaba.png'
import sabor_piña from './assets/images/sabor-piña.svg'
import sabor_pasas from './assets/images/sabor-pasas.svg'

import sabor_champurrado from './assets/images/sabor-champurrado.svg'
import sabor_arroz_leche from './assets/images/sabor-arroz-con-leche.svg'
import sabor_chocolate from './assets/images/sabor-chocolate.svg'
import sabor_cafe from './assets/images/sabor-cafe.svg'

const initialState = {
  guajolotas: [
    {
      id: 1,
      tipo: "Verde",
      imagen: guajolota_verde,
      precio: 25,
      descripcion: 'guajolota verde'
    },
    {
      id: 2,
      tipo: "Mole",
      imagen: guajolota_mole,
      precio: 25,
      descripcion: 'guajolota de mole'
    },
    {
      id: 3,
      tipo: "Guayaba",
      imagen: guajolota_guayaba,
      precio: 25,
      descripcion: 'guajolota de guayaba'
    },
    {
      id: 4,
      tipo: "Piña",
      imagen: guajolota_piña,
      precio: 25,
      descripcion: 'guajolota de piña'
    },
    {
      id: 5,
      tipo: "Pasas",
      imagen: guajolota_pasas,
      precio: 25,
      descripcion: 'guajolota de pasas'
    }
  ],
  bebidas: [
    {
      id: 1,
      tipo: "Champurrado",
      imagen: bebida_champurrado,
      precio: 12,
      descripcion: 'bebida de champurrado'
    },
    {
      id: 2,
      tipo: "Café",
      imagen:  bebida_cafe ,
      precio: 12,
      descripcion: 'bebida de café'
    },
    {
      id: 3,
      tipo: "Chocolate",
      imagen: bebida_chocolate,
      precio: 12,
      descripcion: 'bebida de chocolate'
    },
    {
      id: 4,
      tipo: "Arroz con leche",
      imagen: bebida_arroz,
      precio: 12,
      descripcion: 'bebida de arroz con leche'
    }
  ],
  tamales: [
    {
      id: 1,
      tipo: "Verde",
      imagen: tamal_verde,
      precio: 14,
      descripcion: 'tamal verde'
    },
    {
      id: 2,
      tipo: "Mole",
      imagen: tamal_mole,
      precio: 14,
      descripcion: 'tamal de mole'
    },
    {
      id: 3,
      tipo: "Pasas",
      imagen: tamal_pasas ,
      precio: 14,
      descripcion: 'tamal de pasas'
    },
    {
      id: 4,
      tipo: "Piña",
      imagen: tamal_piña ,
      precio: 14,
      descripcion: 'tamal de piña'
    },
    {
      id: 5,
      tipo: "Guayaba",
      imagen: tamal_guayaba ,
      precio: 14,
      descripcion: 'tamal de guayaba'
    }
  ],
  sabores: [
    {
      id:"1",
      nombre: "Verde",
      tipo: "guajolota",
      imagen: sabor_verde,
    },
    {
      id: "2",
      nombre: "Mole",
      tipo: "guajolota",
      imagen: sabor_mole,
    },
    {
      id: "3",
      nombre: "Guayaba",
      tipo: "guajolota",
      imagen: sabor_guayaba ,
    },
    {
      id: "4",
      nombre: "Piña",
      tipo: "guajolota",
      imagen: sabor_piña,
    },
    {
      id: "5",
      nombre: "Pasas",
      tipo: "guajolota",
      imagen: sabor_pasas,
    },
    {
      id: "6",
      nombre: "Champurrado",
      tipo: "bebida",
      imagen: sabor_champurrado,
    },
    {
      id: "7",
      nombre: "Arroz con leche",
      tipo: "bebida",
      imagen: sabor_arroz_leche,
    },
    {
      id: "8",
      nombre: "Chocolate",
      tipo: "bebida",
      imagen: sabor_chocolate,
    },
    {
      id: "9",
      nombre: "Café",
      tipo: "bebida",
      imagen: sabor_cafe,
    }
  ],
  shop: {},
  offers: [],
  categoriaActiva: "guajolotas"
}

export default initialState