

const Navbar = ({setCategory}) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">News App</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        
                        <li className="nav-item" onClick={()=> setCategory("technology")}>
                            <div className="nav-link" >Technology</div>
                        </li>
                        <li className="nav-item" onClick={()=> setCategory("busoness")}>
                            <div className="nav-link" >Business</div>
                        </li>
                        <li className="nav-item" onClick={()=> setCategory("health")}>
                            <div className="nav-link" >Health</div>
                        </li>
                        <li className="nav-item" onClick={()=> setCategory("sports")}>
                            <div className="nav-link" >Sports</div>
                        </li>
                        <li className="nav-item" onClick={()=> setCategory("entertainment")}>
                            <div className="nav-link" >Entertainment</div>
                        </li>
                      
                      
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar;