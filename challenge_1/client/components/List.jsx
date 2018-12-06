import React from 'react';
import ListItem from './ListItem.jsx'

const List = (props) => {
  return (
    <div className="list-div">
        {props.data.map(item => <ListItem item={item}/>)}
    </div>
  )
}


export default List;