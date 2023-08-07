export const PackingList = (props) => {
    const {list} = props;

    return (
        <div className={'list'}>
            <ul>
                {list.map((item) => <Item key={item.id} item={item}/>)}
            </ul>
        </div>
    );
}

const Item = (props) => {
    const {item: {id, description, quantity, packed}} = props;
    return (
        <li>
            <span style={packed ? {textDecoration: 'line-through'} : {}}>
                {quantity} {description}
            </span>
            <button type='button'>
                ❌
            </button>
        </li>
    );
}
