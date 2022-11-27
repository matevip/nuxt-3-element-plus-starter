export function useCount() {
  const count = useState("count", () => Math.round(Math.random() * 10000));

  function inc() {
    count.value += 1;
  }
  function dec() {
    count.value -= 1;
  }

  return {
    count,
    inc,
    dec,
  };
}
