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
                        Developed and deployed a twin stick rouge-like using the Unity Game Engine and C# which was presented to industry professionals
                        and has been seen over 375 times on itch.io!
                    </p>
                </li>
                <li>
                    <p className="fw-semibold px-1 d-flex">
                        JustBuzzing
                    </p>
                    <p className=" d-flex px-3 fs-6 font-monospace text-secondary">
                        Managed and developed a message board based social media platform using PHP, Javascript, MYSQL and AJAX 
                        to allow for asynchronous updates. All the styling was done using Bootstrap.
                    </p>
                </li>
                <li>
                    <p className="d-flex fw-semibold px-1">
                        Hikr
                    </p>
                    <p className=" d-flex px-3 fs-6 font-monospace text-secondary">
                        Developed a hiking database app using the Android Studio IDE, Java as the programming language and Junit for testing.
                    </p>
                </li>
            </ul>
        </div>
    );
}

export default Portfolio;