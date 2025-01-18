import './ContainerCards.css';
import Cards from '../Cards';

const ContainerCards = (props) => {
  const { colorPrimario, colorSecundario, titulo } = props.datos;
  const estiloTitulo = { borderColor: colorPrimario };
  const {carrousel, eliminarCard} = props;

  return (
    <section className="container" style={{ backgroundColor: colorSecundario }}>
      <h3 style={estiloTitulo}>{titulo}</h3>
      <div className="carrousel">

        {/* Mapeo del carrousel para mostrar las cards. 
        Por cada card que crea el arreglo carrousel, 
        crea un nuevo componente llamado Cards. index es el índice del array */}
        {props.carrousel.map((card, index) => (
          <Cards 
          datos={card} 
          key={index}
          colorPrimario={colorPrimario}
          eliminarCard={props.eliminarCard} 
          />
        ))}
      </div>
    </section>
  );
};

export default ContainerCards;
