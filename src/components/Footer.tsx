function Footer(){
    return(
        <div className="py-5 text-center font-monospace ">
            <div className="max-w-screen-lg mx-auto ">
                <p> 
                    <a href="assets\JustinJMckendry_resume.pdf" download={"assets\JustinJMckendry_resume.pdf"} className="text-decoration-none text-white fst-italic"> 
                        Download my resume 
                    </a>
                    <br></br>Justin J McKendry &copy; {new Date().getFullYear()}.
                </p>
            </div>
        </div>
    );
}

export default Footer;