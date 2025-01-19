import { useState, useEffect } from 'react'
import './App.css'
import Header from './componentes/Header/Header.jsx'
import Formulario from './componentes/Formulario/Formulario.jsx'
import VideosDestacados from './componentes/VideosDestacados/index.jsx'
import ContainerCards from './componentes/ContainerCards/ContainerCards.jsx'
import Footer from './componentes/Footer/index.jsx'
import HeroSection from './componentes/HeroSection/HeroSection.jsx'
import SearchBar from './componentes/SearchBar/SearchBar.jsx'
import { v4 as uuidv4 } from 'uuid';

//Función principal
function App() {

  //Estado inicial de formularios
  const [mostrarFormulario, actualizarMostrar] = useState(false)

  // Función para aumentar la luminosidad de un color
  const lightenColor = (hex, transparenciaBase) => {
    // Eliminar el '#' si está presente
    hex = hex.replace('#', '');

    // Convertir el hex a RGB
    const num = parseInt(hex, 16);
    const r = (num >> 16) & 0xFF;
    const g = (num >> 8) & 0xFF;
    const b = num & 0xFF;

    // Calcular el promedio RGB para obtener un gris auténtico
    const gris = Math.round((r + g + b) / 3);

    // Ajustar la transparencia para que no sea demasiado sólida
    const alpha = Math.min(0.7, Math.max(0, transparenciaBase)); // Limitar transparencia entre 10% y 70%

    // Devolver el color en formato RGBA
    return `rgba(${gris}, ${gris}, ${gris}, ${alpha.toFixed(2)})`;
  };

  //Estilos de categorías preestablecidas
  const [categorias2, actualizarCategorias2] = useState([
    {
      id: uuidv4(),
      titulo: 'Back End',
      colorPrimario: '#57C278',
      colorSecundario: lightenColor('#57C278', 200),
    },
    {
      id: uuidv4(),
      titulo: 'Front End',
      colorPrimario: '#82CFFA',
      colorSecundario: lightenColor('#82CFFA', 200),
    },
    {
      id: uuidv4(),
      titulo: 'Data Science',
      colorPrimario: '#A6D157',
      colorSecundario: lightenColor('#A6D157', 200),
    },
    {
      id: uuidv4(),
      titulo: 'Devops',
      colorPrimario: '#E06B69',
      colorSecundario: lightenColor('#E06B69', 200),
    },
    {
      id: uuidv4(),
      titulo: 'UX y Diseño',
      colorPrimario: '#D86EBF',
      colorSecundario: lightenColor('#D86EBF', 200),
    },
    {
      id: uuidv4(),
      titulo: 'Desarrollo Mobile',
      colorPrimario: '#DEC933',
      colorSecundario: lightenColor('#DEC933', 200),
    },
    {
      id: uuidv4(),
      titulo: 'Innovación y Gestión',
      colorPrimario: '#FF8A29',
      colorSecundario: lightenColor('#FF8A29', 200),
    }
  ])

  //Carrousel con cards precargadas
  const [carrousel, actualizarCarrousel] = useState([

    {
      id: uuidv4(),
      categoria: "Back End",
      descripcion: "¿Qué es backend? ¿Por qué debería comenzar mi carrera con backend? ¿Cuáles son las skills necesarias para ser un buen desarrollador backend?",
      imagen: "https://i.ytimg.com/vi/LLt7FreeHfQ/maxresdefault.jpg",
      titulo: "Desmistificando el Back-End",
      video: "https://www.youtube.com/watch?v=LLt7FreeHfQ&t=30s",
    },

    {
      id: uuidv4(),
      categoria: "Back End",
      descripcion: "¿Quieres saber más?",
      imagen: "https://i.ytimg.com/vi/Z024LSCMqFk/maxresdefault.jpg",
      titulo: "Explorando el poder del Back-End en el Desarrollo Web",
      video: "https://www.youtube.com/watch?v=Z024LSCMqFk",
    },

    {
      id: uuidv4(),
      categoria: "Back End",
      descripcion: "En este Alura.tips nuestra instructora Genesys Rondon nos comentará un poco de como fue su experiencia dejando de trabajar con JavaScript y empezando a trabajar con Java.",
      imagen: "https://i.ytimg.com/vi/3aK3Omo2RrU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC_7DBAIAy3xwHpQiX3X4vB-px57g",
      titulo: "De Front End a Back End con Java",
      video: "https://www.youtube.com/watch?v=3aK3Omo2RrU",
    },

    {
      id: uuidv4(),
      categoria: "Front End",
      descripcion: "En este video, Jeanmarie Quijada, instructora Front End en Alura Latam te explica qué hace el equipo de Front End.",
      imagen: "https://i.ytimg.com/vi/rpvrLaBQwgg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCC3r_hEX8IK92N9iR1SNYoAAkzmg",
      titulo: "Equipo Front End #AluraMás",
      video: "https://www.youtube.com/watch?v=rpvrLaBQwgg",
    },

    {
      id: uuidv4(),
      categoria: "Front End",
      descripcion: "¿Quieres conocer sobre los frameworks más utilizados en el mercado hoy en día?",
      imagen: "https://i.ytimg.com/vi/UNeKzI2WHgQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC_Lq69fbTONNgFf2wOSkdYb4WCtg",
      titulo: "Frameworks de Front End - Edición especial",
      video: "https://www.youtube.com/watch?v=UNeKzI2WHgQ",
    },

    {
      id: uuidv4(),
      categoria: "Front End",
      descripcion: "En este Alura+ nuestra instructora front-end, Jeanmarie Quijada, nos ayudará a entender que es Box Model...",
      imagen: "https://i.ytimg.com/vi/ts9qfCKamKg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA4E4P5TWq-E_hY523mfQ_PUPiamQ",
      titulo: "Box Model y Box sizing #AluraMás",
      video: "https://www.youtube.com/watch?v=ts9qfCKamKg",
    },

    {
      id: uuidv4(),
      categoria: "Data Science",
      descripcion: "Descubre el mundo del análisis de datos.",
      imagen: "https://i.ytimg.com/vi/7_UXo-aqAeM/maxresdefault.jpg",
      titulo: "¿Por qué estudiar Data Science?",
      video: "https://www.youtube.com/watch?v=7_UXo-aqAeM",
    },

    {
      id: uuidv4(),
      categoria: "Data Science",
      descripcion: "¿Vamos a hablar de Phyton para ciencia de datos?",
      imagen: "https://i.ytimg.com/vi/JMKZMa0tMhQ/sddefault.jpg?v=63e50e07",
      titulo: "Python para Data Science | Contenidos ONE",
      video: "https://www.youtube.com/watch?v=JMKZMa0tMhQ",
    },

    {
      id: uuidv4(),
      categoria: "Data Science",
      descripcion: "En este episodio, Álvaro y Erika nos comparten sus trayectorias profesionales y qué los motivó a adentrarse en el campo de la ciencia de datos.",
      imagen: "https://i.ytimg.com/vi/_Mda2qHqvZA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBRkrlXM60AYOx0arZli9xrXSiOAg",
      titulo: "Café Punto Tech #14 - Caminos posibles en Data Science",
      video: "https://www.youtube.com/watch?v=_Mda2qHqvZA",
    },

    {
      id: uuidv4(),
      categoria: "Devops",
      descripcion: "O Tech Guide de Devops oferece um roadmap completo para iniciantes em DevOps.",
      imagen: "https://i.ytimg.com/vi/VfC5QyP4n9s/maxresdefault.jpg",
      titulo: "Guia de Carreira: DevOps",
      video: "https://www.youtube.com/watch?v=VfC5QyP4n9s",
    },

    {
      id: uuidv4(),
      categoria: "Devops",
      descripcion: "Você tem interesse em implementar *uma área de DevOps*, mas não sabe por onde começar? Antes disso, você ainda não sabe muito bem o que isso significa?",
      imagen: "https://i.ytimg.com/vi/ni2xJQG8hDg/maxresdefault.jpg",
      titulo: "Aprenda sobre DevOps em menos de 40 minutos",
      video: "https://www.youtube.com/watch?v=ni2xJQG8hDg",
    },

    {
      id: uuidv4(),
      categoria: "Devops",
      descripcion: "O Shift Left é muito utilizado por times e pessoas que trabalham com DevOps e metodologias ágeis.",
      imagen: "https://i.ytimg.com/vi/6dDzhPTkcbk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA7sfknG4Vqh6lcD5iDUUrhmgi0eQ",
      titulo: "Shift Left em DevOps | #AluraMais",
      video: "https://www.youtube.com/watch?v=6dDzhPTkcbk",
    },

    {
      id: uuidv4(),
      categoria: "Ux y Diseño",
      descripcion: "¿Aún no sabes como utilizar Figma y quieres aprender desde cero?",
      imagen: "https://i.ytimg.com/vi/Y_6R3XTA2go/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC9NG_FhXIvJ-pvDP3rcOGoceVmKg",
      titulo: "Aprendiendo a utilizar Figma #AluraTips",
      video: "https://www.youtube.com/watch?v=Y_6R3XTA2go",
    },

    {
      id: uuidv4(),
      categoria: "Ux y Diseño",
      descripcion: "¿Cómo un desarrollador Front End utiliza el Figma? ",
      imagen: "https://i.ytimg.com/vi/UuAX5azcvDQ/maxresdefault.jpg",
      titulo: "¿Cómo un desarrollador Front End utiliza el Figma? #AluraMás",
      video: "https://www.youtube.com/watch?v=UuAX5azcvDQ",
    },

    {
      id: uuidv4(),
      categoria: "UX y Diseño",
      descripcion: "¿Sabías que un buen diseño de UX (User Experience) es esencial para el éxito de cualquier proyecto de Front End?",
      imagen: "https://i.ytimg.com/vi/xxYOWp0UVCY/maxresdefault.jpg",
      titulo: "La importancia de UX para Front End #aluratips",
      video: "https://www.youtube.com/watch?v=xxYOWp0UVCY",
    },

    {
      id: uuidv4(),
      categoria: "Desarrollo Mobile",
      descripcion: "¿Te interesa el desarrollo móvil? En este video, te llevamos a conocer el mundo del desarrollo de aplicaciones móviles...",
      imagen: "https://i.ytimg.com/vi/sutTgSkD0hI/hqdefault.jpg",
      titulo: "Cómo empezar en el Desarrollo Móvil",
      video: "https://www.youtube.com/watch?v=sutTgSkD0hI",
    },

    {
      id: uuidv4(),
      categoria: "Desarrollo Mobile",
      descripcion: "Nuestros hosts Gabriela Aguiar y Christian Velasco hablan con Bruno Darío Fernández Ellerbach, desarrollador Android en Zup Innovation y experto en back-end...",
      imagen: "https://i.ytimg.com/vi/g6OJeiGmFBY/hqdefault.jpg",
      titulo: "Café Punto Tech #17 - Desafíos en el Desarrollo Mobile | Habilidades Esenciales y Tendencias",
      video: "https://www.youtube.com/watch?v=g6OJeiGmFBY",
    },

    {
      id: uuidv4(),
      categoria: "Desarrollo Mobile",
      descripcion: "A Websérie “Desmistificando o mobile” vêm aí para simplificar com exemplos práticos vários assuntos envolvendo o mundo dos aplicativos de celular...",
      imagen: "https://i.ytimg.com/vi/2z6f8VN_Pro/maxresdefault.jpg",
      titulo: "Desmistificando Mobile- Por onde eu começo? #01",
      video: "https://www.youtube.com/watch?v=2z6f8VN_Pro",
    },

    {
      id: uuidv4(),
      categoria: "Innovación y Gestión",
      descripcion: "¿Cómo es estudiar en Alura? Conoce todos los recursos de la plataforma, donde encontrarás mucho más que cursos de tecnología.",
      imagen: "https://i.ytimg.com/vi/DB71zt-KAVc/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAWqVhbMwZsEBOyWAOX-5L8EsPBXA",
      titulo: "Introducción: ¿Cómo empezar en tecnología?",
      video: "https://www.youtube.com/watch?v=DB71zt-KAVc&list=PLNKOkLkhi1KcfF9LlgYyv7JvN9yVkdBvS",
    },

    {
      id: uuidv4(),
      categoria: "Innovación y Gestión",
      descripcion: "¿Ya tienes un perfil en Linkedin? ¿Sabes cuál es la importancia en tenerlo? En el video de hoy vamos a hablar de la importancia de la rede social laboral más grande del mundo.",
      imagen: "https://i.ytimg.com/vi/N9vxfMJEyYg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLACidXnHiHq5j0bqmb5BlCb-ig-dw",
      titulo: "Entendiendo la importancia de Linkedin #AluraTips",
      video: "https://www.youtube.com/watch?v=N9vxfMJEyYg",
    },

    {
      id: uuidv4(),
      categoria: "Innovación y Gestión",
      descripcion: "En este video nuestra invitada, Andyara, nos explicará que són las muy conocidas hoy en día metodologias ágiles y nos comentará un poco sobre como aplicarlas y cuáles son los beneficios de utilizarlas en su equipo o empresa.",
      imagen: "https://i.ytimg.com/vi/6N3OkLCfK-0/maxresdefault.jpg",
      titulo: "¿Qué son las metodologias ágiles?",
      video: "https://www.youtube.com/watch?v=6N3OkLCfK-0",
    },
  ])

  // Mapeo del carrousel para mostrar las cards. Por cada card que crea el arreglo carrousel, crea un nuevo componente llamado Cards.
  const [filteredCarrousel, setFilteredCarrousel] = useState(carrousel);
  const [searchParams, setSearchParams] = useState({ term: '', category: '' });

  useEffect(() => {
    const filtered = carrousel.filter(card => {
      const matchesTerm = card.titulo.toLowerCase().includes(searchParams.term.toLowerCase()) ||
        card.descripcion.toLowerCase().includes(searchParams.term.toLowerCase());
      const matchesCategory = !searchParams.category || card.categoria === searchParams.category;
      return matchesTerm && matchesCategory;
    });
    setFilteredCarrousel(filtered);
  }, [carrousel, searchParams]);

  const handleSearch = ({ term, category }) => {
    setSearchParams({ term, category });
  };

  const agregarCard = (card) => {
    card.id = uuidv4()
    actualizarCarrousel([...carrousel, card])
  }

  const eliminarCard = (titulo) => {
    const nuevosCards = carrousel.filter(card => card.titulo !== titulo)
    actualizarCarrousel(nuevosCards)
  }

  // Función para agregar una nueva categoría
  const agregarCategoria = (categoria) => {
    const categoriaConId = {
      ...categoria,
      id: uuidv4(),
      titulo: categoria.seccion,
      colorPrimario: categoria.color,
      colorSecundario: lightenColor(categoria.color, 200)
    };
    actualizarCategorias2([...categorias2, categoriaConId]);
  };

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  // Función para eliminar una categoría
  const eliminarCategoria = (categoriaAEliminar) => {
    const categoriasActualizadas = categorias2.filter(categoria => categoria.titulo !== categoriaAEliminar);
    actualizarCategorias2(categoriasActualizadas);
  };

  // Función para manejar el envío del formulario de subida de videos
  return (
    <div className='App'>
      <Header />
      <HeroSection cambiarMostrar={cambiarMostrar} />
      <VideosDestacados />
      <SearchBar onSearch={handleSearch} categorias={categorias2} />

      {mostrarFormulario && <Formulario
        categorias={categorias2.map((categoria) => categoria.titulo)}
        agregarCard={agregarCard}
        agregarCategoria={agregarCategoria}
        eliminarCategoria={eliminarCategoria}
      />}

      {categorias2
        .filter(categoria =>
          filteredCarrousel.some(card => card.categoria === categoria.titulo)
        )
        .map((categoria) => {
          const cardsCategoria = filteredCarrousel.filter(card => card.categoria === categoria.titulo)
          return <ContainerCards
            datos={categoria}
            key={categoria.titulo}
            carrousel={cardsCategoria}
            eliminarCard={eliminarCard}
          />
        })}
      <Footer />
    </div>
  )

}

export default App
