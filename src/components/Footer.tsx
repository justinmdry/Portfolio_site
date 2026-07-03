function Footer(){
    return(
        <div className="py-5 text-center font-monospace ">
            <div className="max-w-screen-lg mx-auto ">
                <p> 
                    <a href="assets\JustinMcKendry_QAE_Jul2026.pdf" download={"JustinMcKendry_QAE_Jul2026.pdf"} className="text-decoration-none text-white fst-italic"> 
                        Click here to Download my resume 
                    </a>
                    <br></br>Justin J McKendry &copy; {new Date().getFullYear()}.
                </p>
            </div>
        </div>
    );
}

export default Footer;