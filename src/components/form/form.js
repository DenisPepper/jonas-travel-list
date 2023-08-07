import { useState } from 'react';

export const Form = (props) => {
  const [item, setItem] = useState('');
  const [count, setCount] = useState(1);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!item) return;
    const newItem = {id: Date.now(), description: item, quantity: count, packed: false};
  };

  return (
    <form className={'add-form'} onSubmit={handleSubmit}>
      <h3>What do you need for your 😊 trip?</h3>

      <select name='count' value={count} onChange={(evt) => setCount(evt.target.value)}>
        {Array.from({ length: 20 }, (_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>

      <input
        type='text'
        name='item'
        placeholder='Item...'
        value={item}
        onChange={(evt) => setItem(evt.target.value)}
      />

      <button>Add</button>
    </form>
  );
};
