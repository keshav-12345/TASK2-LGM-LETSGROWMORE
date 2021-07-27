import './Navbar.css'
function Navbar({clickedInNav}) {
    
    
    const handleClick = ()=>{
        
        clickedInNav(true);
        
    }
    return (
        <div className="navbar">
            
                <h2 >LetsGrowMore</h2>
                <button onClick={handleClick}>Get Users</button>
                
            
        </div>
    )
}

export default Navbar