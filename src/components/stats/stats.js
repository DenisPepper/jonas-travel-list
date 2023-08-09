export const Stats = ({ list }) => {
  const totalCount = list.length;
  const packedCount = list.reduce(
    (acc, current) => (current.packed ? acc + 1 : acc),
    0
  );
  const coef = packedCount / totalCount ? packedCount / totalCount : 0;

  return (
    <footer className='stats'>
      {coef < 1 ? (
        <em>
          👜 You have {totalCount} {totalCount > 1 ? 'items' : 'item'} on your
          list, and you already packed {packedCount} (
          {Math.floor(coef * 100, 2)} %)
        </em>
      ) : (
        <em>You got everything! Ready to go ✈️</em>
      )}
    </footer>
  );
};
