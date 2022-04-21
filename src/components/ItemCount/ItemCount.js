import React,{useState} from 'react'
import Button from '@mui/material/Button';

const ItemCount = ({stock}) => {
    const [count, setCount] = useState(1)

    const onAdd = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }
    return(
        <>
            <Button className="btn-custom">-</Button>
            <p>{count}</p>
            <Button className="btn-custom" onClick={onAdd}>+</Button>
        </>
    )
}

export default ItemCount