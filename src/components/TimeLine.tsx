function TimeLine(){
    return(
        <div className="d-flex flex-column space-y-3 mt-2">
            <h2 className="fs-5 font-monospace fw-bold fst-italic">
                Timeline: 
            </h2>
            <ul className="fs-5 font-monospace space-y-1 list-disc pl-5">
                <li className="border-start">
                    <div className="d-flex justify-content-between align-items-center px-1">
                        <p>FDM Group</p>
                        <p className="fs-6">Present</p>
                    </div>
                    <p className=" px-3 fs-6 font-monospace text-secondary">
                        We’re FDM, an award-winning global business and technology consultancy. For over 30 years we’ve been powering the people behind tech and innovation. We collaborate with world-leading companies to identify the expertise they need, exactly when they need it. <br/>

                        We have helped successfully launch over 25,000 careers globally to date and we are a trusted partner to 300+ companies worldwide.<br/>

                        Diversity, equity and inclusivity is at the core of everything we do. We have 2500+ employees worldwide, with over 80 nationalities working together as a team. From our origins in Brighton, UK, we now have 19 centers located across Europe, North America, and Asia-Pacific and are now on the FTSE4Good Index.

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