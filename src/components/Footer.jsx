import React from "react";

function Footer (){
    const currentYear = new Date().getFullYear();
    return (
    <footer>
        <p>Copyright © {currentYear} <br></br><b>Granollers 🐒 MonaEdicions</b></p>
    </footer>
    )
}

export default Footer;