import React from 'react';
import ListItem from './ListItem.jsx'

const List = (props) => {
  return (
    <div className="list-div">
      <table>
        <tr>
          <th>Date</th>
          <th>Description</th> 
          <th>Info</th>
          <th>Data</th>
          <th>Lang</th>
          <th>Detail</th>
        </tr>
        {props.data.map(item => <ListItem item={item}/>)}
      </table>
    </div>
  )
}


export default List;