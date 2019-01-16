import React from  'react';

const Navbar = (props: any) => {
    function handleTheme() {
        props.onClick();
    }

    return (
        <nav className={props.theme}>
            <div className="nav-left">
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="https://www.github.com/jddelia">Github</a>
            </div>
            <div className="nav-right">
                <button onClick={handleTheme}>change theme</button>
            </div>
        </nav>
    );
}

export default Navbar;