function Intro(){
    return( 
        <div style={{ gridTemplateColumns: '80px 1fr' }} className="d-grid align-items-center ">
             <span className="position-relative d-flex flex-shrink-0 overflow-hidden rounded-circle border border-dark float-start" style={{ height: '60px', width: '60px' }}>
                <img src="assets/selfie.jpeg" className="img-fluid w-100 h-100" alt="Selfie" />
            </span>
            <div>
                <h1 className="fs-5 mt-3">Justin J McKendry</h1>
                <p className="fs-6">Software Developer</p>
            </div>
        </div>    
    );
}

export default Intro;