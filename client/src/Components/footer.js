function Footer()
{
    return(
        <>
            <footer>
                <span>
                © 2023 Zomato™ Ltd.
                </span>
                <div className="socials">
                    <a href={"https://www.linkedin.com/company/zomato?originalSubdomain=in"} target={"_blank"} rel="noopener noreferrer">
                    <img src={process.env.PUBLIC_URL+"Images/Footer/linkdin.png"} alt="loading" />
                    </a>
                    <a href={"https://www.instagram.com/zomato/"} target={"_blank"} rel="noopener noreferrer">
                    <img src={process.env.PUBLIC_URL+"Images/Footer/insta.png"} alt="loading" />
                    </a>
                    <a href={"https://twitter.com/zomato"} target={"_blank"} rel="noopener noreferrer">
                    <img src={process.env.PUBLIC_URL+"Images/Footer/twitter.png"} alt="loading" />
                    </a>
                    <a href={"https://www.youtube.com/zomato"} target={"_blank"} rel="noopener noreferrer">
                    <img src={process.env.PUBLIC_URL+"Images/Footer/yt.png"} alt="loading" />
                    </a>
                    <a href={"https://www.facebook.com/zomato"} target={"_blank"} rel="noopener noreferrer">
                    <img src={process.env.PUBLIC_URL+"Images/Footer/fb.png"} id="fb" alt="loading" />
                    </a>
                </div>
            </footer>
        </>
    );
}

export default Footer;