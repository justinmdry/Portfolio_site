function TimeLine(){
    return(
        <div className="d-flex flex-column space-y-3 mt-2">
            <h2 className="fs-5 font-monospace fw-bold fst-italic">
                Timeline: 
            </h2>
            <ul className="fs-5 font-monospace space-y-1 list-disc pl-5">
                <li className="border-start">
                    <div className="d-flex justify-content-between align-items-center px-1">
                        <p>Currently</p>
                        <p className="fs-6">Present</p>
                    </div>
                    <p className=" px-3 fs-6 font-monospace text-secondary">
                        I am currently looking for a full time position as a software developer!
                        If you would like to contact me please reach out to me on LinkedIn or via email.
                        Additionally you can download my resume from the link below.
                    </p>
                </li>
                <li className="border-start">
                    <div className="d-flex justify-content-between align-items-center px-1">
                        <p>Bachelor's degree in Computer Science</p>
                        <p className="fs-6">2024</p>
                    </div>
                    <p className=" px-3 fs-6 font-monospace text-secondary ">
                        I pursued a Bachelor's degree in Computer Science from the University of British Columbia.
                        During my studies, I learned about computer science theory, computer architecture, human computer interaction
                        and even dabbled in some artificial intelligence.
                    </p>
                </li>
                <li className="border-start">
                    <div className="d-flex justify-content-between align-items-center px-1">
                        <p>The beginning</p>
                        <p className="fs-6">2018</p>
                    </div>
                    <p className=" px-3 fs-6 font-monospace text-secondary">
                        I began programming in Grade 10 when I took an introduction to computer science course.
                        My great teacher at the time made it fun and interesting, giving us projects that made learning
                        Object Orientated programming natural and easy to understand. I was immediately hooked! 
                    </p>
                </li>
            </ul>
        </div>
    );
}

export default TimeLine;