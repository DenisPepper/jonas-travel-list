import { useState } from 'react';

const Sort = {
  input: 'input',
  description: 'description',
  packed: 'packed',
};

const DEFAULT_SORT = Sort.input;

export const PackingList = (props) => {
  const { list, handleDeleteItem, handleToggleItem } = props;
  const [sort, setSort] = useState(DEFAULT_SORT);

  let items = [];
  sort === Sort.input && (items = list);
  sort === Sort.description && (items = list.slice().sort((a, b) => a.description.localeCompare(b.description)));
  sort === Sort.packed && (items = list.slice().sort((a, b) => a.packed && !b.packed ? 1 : -1));

  return (
    <div className={'list'}>
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            handleDeleteItem={handleDeleteItem}
            handleToggleItem={handleToggleItem}
          />
        ))}
      </ul>
      <div className='actions'>
        <select value={sort} onChange={(evt) => setSort(evt.target.value)}>
          <option value={Sort.input}>Sort by input order</option>
          <option value={Sort.description}>Sort by description</option>
          <option value={Sort.packed}>Sort by packed status</option>
        </select>
      </div>
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
