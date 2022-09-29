import React from 'react'
import Item from './Item';

function ItemList(props) {
    return (
        <div>
            {props.data.map( (item) => {
                    console.log(item);
                    return (
                        <Item
                            key={item.id}
                            price={item.price}
                            title={item.title}
                            img={item.img}
                            detail={item.detail}
                        />
                        );    
                    })
                }
        </div>
    )
}

export default ItemList
