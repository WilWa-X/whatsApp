import React from "react";
import './Main-page.css'
// import account from "../account/account";"../account/account.js";

function MainPage() {

    return (
        <body>
            <section id={"main-section"}>
                <div className={"main-link"}>
                    <li id={"logo"}><a href={"main-page.js"}> SpaceTube</a></li>
                    <li className={"link"}><a href={"/"}>Blogs</a></li>
                    <li className={"link"}><a href={"/"}>About Us</a></li>
                    <li className={"link"}><a href={"/"}>Services</a></li>
                    <li className={"link"}><a href={"/"}>Contact Us</a></li>
                    <li className={"link"}><a href={"/"}>FAQs</a></li>
                    <li className={"account-link"}><a href={"/"}>Account</a></li>
                </div>


                <div className={"main-content"}>
                    <h1>What if we told you, </h1>
                    <h1>you can now <span>watch</span> every fun and </h1>
                    <h1>documentation of the <span>solar system</span> here..</h1>
                    <p>Maximum flexibility in production. Relief of employees</p>
                    <p>by performing ergonomically unfavourable work steps</p>
                    <p>that could not previously automate.</p><br/>
                    <button type={"submit"} className={"btn"}>
                        <li><a href={"/"}>Get Started here!</a></li>
                    </button>
                </div>
            </section>

            <section id={"second-section"}>
                <h1>Space <span>News</span></h1>
                <p className={"news-title"}>Human-robot</p>
                <br/>
                <p>Floating farms, brain wave passwords, and coffee-powered cars </p>
                <p>are just some incredible inventions and</p>
                <p>innovations that will shape our future!</p>

                <br/>
                <br/>

                <p>In human-robot collaboration, the robot assists the</p>
                <p>humans operator.This means: The machine does not</p>
                <p>replace the human, but complements his capabilities</p>
                <p>and relieves him of arduous tasks.These can include</p>
                <p>overhead work, for example, or the lifting of heavy loads.</p>
                <p>Autonomous, collaborative robots are also used to</p>
                <p>supply production workshops.</p>

                <button type={"submit"} className={"btn learn-more"}>
                    <li><a href={"/"}>Learn More Here!</a></li>
                </button>
            </section>
        </body>
    )
}
export default MainPage;