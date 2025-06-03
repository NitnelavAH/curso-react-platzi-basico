import "./styles.css"
import styles from "./Card.module.sass"

const Card = () => {
  const textStyles = {
    textAlign: "center",
    background: "lightcyan",
    padding: "8px"
  }

  return (

    <>

      <div className="cardStyles">
        Soy una card! estilos <pre>styles.css</pre>
      </div>


      <div className={styles.cardModule}>
        Soy una card! estilos desde <pre>Card.module.sass</pre>
      </div>

      <div style={textStyles}>
        Soy una card!
        <pre>
          Estilos en linea
        </pre>
      </div>
    </>
  )
}

export default Card;