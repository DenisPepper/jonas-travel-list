export const Stats = ({ list }) => {
  const totalCount = list.length;
  const packedCount = list.filter((item) => item.packed).length;
  const percent = Math.floor(
    (totalCount > 0 ? packedCount / totalCount : 0) * 100
  );

  if (totalCount === 0) {
    return (
      <footer className='stats'>
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  }

  return (
    <footer className='stats'>
      {percent < 100 ? (
        <em>
          👜 You have {totalCount} {totalCount > 1 ? 'items' : 'item'} on your
          list, and you already packed {packedCount} ({percent} %)
        </em>
      ) : (
        <em>You got everything! Ready to go ✈️</em>
      )}
    </footer>
  );
};
