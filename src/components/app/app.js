import {Logo} from "../logo/logo";
import {Form} from "../form/form";
import {PackingList} from "../packing-list/packing-list";
import {Stats} from "../stats/stats";
import {useState} from "react";

const initialItems = [
    {id: 1, description: "Passports", quantity: 2, packed: false},
    {id: 2, description: "Socks", quantity: 12, packed: false},
];

export const App = () => {
    const [list, setList] = useState(initialItems);

    return (
        <div className='app'>
            <Logo />
            <Form setList={setList}/>
            <PackingList list={list}/>
            <Stats />
        </div>);
}
