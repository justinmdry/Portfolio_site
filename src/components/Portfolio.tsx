function Portfolio(){
    return(
        <div className="d-flex flex-column space-y-3 mt-2">
            <h2 className="fs-5 font-monospace fw-bold fst-italic">
                Portfolio: 
            </h2>
            <ul className="fs-5 font-monospace space-y-1 list-disc pl-5">
                <li>
                    <a href="https://magemadness.itch.io/mage-madness" className=" d-flex fw-semibold fst-italic text-decoration-underline text-white link-underline-hover px-1"><p>Mage Madness</p></a>
                    <p className="d-flex px-3 fs-6 font-monospace text-secondary">
                        Mage Madness is a top down twin stick rouge-like game that was created using the Unity Game engine,
                        developed in C# and featured unit testing through the Unity Test Framework. Its unique focus on physics
                        and speedrunning based gameplay was presented to over 30 industry professionals who voted it the
                        category winner and has achieved over 350 unique players.
                    </p>
                </li>
                <li>
                    <p className="fw-semibold px-1 d-flex">
                        JustBuzzing
                    </p>
                    <p className=" d-flex px-3 fs-6 font-monospace text-secondary">
                        Just Buzzin is a discussion board based social media platform developed using Docker for containers,
                        MySQL as the DBMS combined with PHP, JavaScript and AJAX to allow asynchronous updates of 
                        discussion boards. This project contained over 500 unique accounts and 2,000 unique posts which 
                        provided challenges that gave me a greater insight into modern web applications and their large data sets.
                    </p>
                </li>
                <li>
                    <p className="d-flex fw-semibold px-1">
                        Hikr
                    </p>
                    <p className=" d-flex px-3 fs-6 font-monospace text-secondary">
                        Hikr is a hiking trail database app which catalogs trails across Canada and allows users to add new trails,
                        rate and provide feedback on trails and highlight a collection of their favourite trails. It was developed 
                        using Java, SQLite and Android Studio and unit tested through JUnit.
                    </p>
                </li>
            </ul>
        </div>
    );
}

export default Portfolio;