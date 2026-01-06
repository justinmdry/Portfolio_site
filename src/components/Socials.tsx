function Socials(){
    return( 
        <div  className="d-flex gap-3 align-items-center ">
            <span className="position-relative d-flex flex-shrink-0 overflow-hidden rounded-circle border border-dark float-start" style={{ height: '60px', width: '60px' }}>
                <a href="mailto:justinjmcke@yahoo.com">
                    <img src="assets\email.png" className="img-fluid w-100 h-100" alt="email" />
                </a>
            </span>
            <span className="position-relative d-flex flex-shrink-0 overflow-hidden rounded-circle border border-dark float-start" style={{ height: '60px', width: '60px' }}>
                <a href="https://github.com/justinmdry">
                    <img src="assets\gHub.png" className="img-fluid w-100 h-100" alt="gHub" />
                </a>
            </span>
            <span className="position-relative d-flex flex-shrink-0 overflow-hidden rounded-circle border border-dark float-start" style={{ height: '60px', width: '60px' }}>
                <a href="https://www.linkedin.com/in/justinjmcke">
                    <img src="assets\linkedIn.png" className="img-fluid w-100 h-100" alt="LI" />
                </a>
            </span>
        </div>
    );
}

export default Socials;