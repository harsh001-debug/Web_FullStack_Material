function Header(){
    return(
        <div className="heading">
            <img className = "images" src="https://livewire.thewire.in/wp-content/uploads/2021/02/myntra.png" height="80px" width="80px"/>
            <div className="option">
                <button className="but">Men</button>
                <button className="but">Women</button>
                <button className="but">Kids</button>
                <button className="but">Home and Living</button>
                <button className="but">Beauty</button>
                <button className="but">Studio</button>
                
            </div>
            <input className="searchbar" placeholder="Search for Products"></input>
            <div className="profile">
                <button className="pro">Profiles</button>
                <button className="pro">Wishlist</button>
                <button className="pro">Profiles</button>
            </div>
        </div>
    )
}

export default Header;