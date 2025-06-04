import useCounter from "../../hooks/useCounter";

const CounterWithCustomHook = () => {
  const {
    count,
    increment,
    decrement,
    reset,
  } = useCounter(10);

  return (
    <>
      <h2>
        Counter With Custom Hook
      </h2>
      <p>Contador: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default CounterWithCustomHook;