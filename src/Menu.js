import React from 'react'

function Menu(props){
    
    const listLinks = props.links.map(links => <li>{links}</li>)
    
    return(
    <ul className='menu'>
         {listLinks}
    </ul>)
}

export default Menu;