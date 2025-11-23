import { useState, memo } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [firstHook, setFirstHook] = useState("useCallback");
  const [secondHook, setSecondHook] = useState("useMemo");

  const incrementCount = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className="app">
      <Title firstHook={firstHook} secondHook={secondHook} />
      <CountInfo count={count} />
      <button onClick={incrementCount}>+1</button>
    </div>
  );
}

const Title = memo(({ firstHook, secondHook }) => {
  console.log("Ререндер");
  return (
    <>
      <h1>
        React memo vs {firstHook} vs {secondHook}
      </h1>
    </>
  );
});

const CountInfo = ({ count }) => {
  return <h2>Count value {count}</h2>;
};
