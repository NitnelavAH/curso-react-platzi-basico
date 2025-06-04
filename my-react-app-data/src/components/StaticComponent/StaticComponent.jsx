const StaticComponent = () => {
  const items = ["Manzana", "Banana", "Cereza"];

  return (
    <>
      <h2>Lista Estatica</h2>
      <ul>
        {
          items.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </>
  )
}

export default StaticComponent;