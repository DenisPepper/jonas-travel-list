export const PackingList = (props) => {
    const {list, handleDeleteItem} = props;

    return (
        <div className={'list'}>
            <ul>
                {list.map((item) => <Item key={item.id} item={item} handleDeleteItem={handleDeleteItem}/>)}
            </ul>
        </div>
    );
}

const Item = (props) => {
    const {item: {id, description, quantity, packed}, handleDeleteItem} = props;
    
    const handleCrossClick = (evt) => {
        handleDeleteItem(id);
    };
    
    return (
        <li>
            <span style={packed ? {textDecoration: 'line-through'} : {}}>
                {quantity} {description}
            </span>
            <button type='button' onClick={handleCrossClick}>
                ❌
            </button>
        </li>
    );
}
