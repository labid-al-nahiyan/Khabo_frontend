import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_container">
                <p>&copy; {new Date().getFullYear()} Khabo</p>
            </div>
        </div>
    );
};

export default Footer;