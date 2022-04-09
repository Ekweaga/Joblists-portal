import React from 'react'
import x from './x.png'

const Header = ({keyword,removekeyword}) => {
  return (
    <div>
      <ul style={{listStyle:'none',display:'flex'}}>
    {

      keyword.map((key,id)=>{
        return <li key={id} style={{listStyle:'none',display:'flex'}}>{key}
        <img src={x} style={{width:'10px',height:'10px'}} onClick={()=>removekeyword(key)}/>

        
        </li>
      })
    
    }
    </ul>
    </div>
  )
}

export default Header;