export const PackingList = (props) => {
  const { list, handleDeleteItem, handleToggleItem } = props;

  return (
    <div className={'list'}>
      <ul>
        {list.map((item) => (
          <Item
            key={item.id}
            item={item}
            handleDeleteItem={handleDeleteItem}
            handleToggleItem={handleToggleItem}
          />
        ))}
      </ul>
    </div>
  );
};

const Item = (props) => {
  const {
    item: { id, description, quantity, packed },
    handleDeleteItem,
    handleToggleItem,
  } = props;

  const handleCrossClick = (evt) => {
    handleDeleteItem(id);
  };

  const handleCheckboxClick = () => {
    handleToggleItem(id);
  };

  return (
    <li>
      <input type='checkbox' value={packed} onChange={handleCheckboxClick} />
      <span style={packed ? { textDecoration: 'line-through' } : {}}>
        {quantity} {description}
      </span>
      <button type='button' onClick={handleCrossClick}>
        ❌
      </button>
    </li>
  );
};
