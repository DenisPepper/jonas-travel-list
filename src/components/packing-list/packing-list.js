import { useState } from 'react';
import { Item } from './Item';

const Sort = {
  input: 'input',
  description: 'description',
  packed: 'packed',
};

const DEFAULT_SORT = Sort.input;

export const PackingList = (props) => {
  const { list, handleDeleteItem, handleToggleItem, handleRemoveItems } = props;
  const [sort, setSort] = useState(DEFAULT_SORT);

  let items = list;

  sort === Sort.description &&
    (items = list
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description)));

  sort === Sort.packed &&
    (items = list.slice().sort((a, b) => Number(a.packed) - Number(b.packed)));

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
        <button type='button' onClick={() => handleRemoveItems()}>
          Clear list
        </button>
      </div>
    </div>
  );
};
