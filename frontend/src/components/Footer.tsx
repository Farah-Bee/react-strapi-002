const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Quick Links */}
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>

                {/* Categories */}
                <div className="footer-section">
                    <h4>Categories</h4>
                    <ul>
                        <li><a href="/category/politics">Politics</a></li>
                        <li><a href="/category/technology">Technology</a></li>
                        <li><a href="/category/business">Business</a></li>
                        <li><a href="/category/sports">Sports</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <ul className="social-links">
                        <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
                        <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
                        <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
                    </ul>
                </div>

                {/* About & Contact */}
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>NewsHub is your go-to platform for the latest and trending news across various categories.</p>
                    <h4>Contact Us</h4>
                    <p>Email: contact@newshub.com</p>
                    <p>Phone: +254 72376 7890</p>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} NewsHub - All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
