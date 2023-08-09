import { Logo } from '../logo/logo';
import { Form } from '../form/form';
import { PackingList } from '../packing-list/packing-list';
import { Stats } from '../stats/stats';
import { useState } from 'react';

export const App = () => {
  const [list, setList] = useState([]);

  const handleAddItem = (item) => setList((prev) => [...prev, item]);

  const handleDeleteItem = (id) =>
    setList((prev) => prev.filter((item) => item.id !== id));

  const handleToggleItem = (id) => {
    setList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className='app'>
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <PackingList
        list={list}
        handleDeleteItem={handleDeleteItem}
        handleToggleItem={handleToggleItem}
      />
      <Stats list={list}/>
    </div>
  );
};
