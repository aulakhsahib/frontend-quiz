/* eslint-disable react/prop-types */
import './Navbar.css';
export default function Navbar({ quizToShow }) {
    let iconToShow, quizName, iconContainer;
    if (quizToShow) {
        iconToShow = quizToShow.icon;
        quizName = quizToShow.title;
        iconContainer = (
            <div className="navbar-icon-container">
                <span className="navbar-icon"><img src={iconToShow} /></span>
                <p className="navbar-label">{quizName}</p>
            </div>
        );
    }


    return (
        <nav className="navbar">
            {quizToShow ? iconContainer : <div className="placeholder-navbar-container"></div>}
            {/* <div className="placeholder-navbar-container"></div> */}
            <div className="navbar-theme-toggle-container">
                <input type="checkbox" name="color-theme-toggle" id="color-theme-toggle" className="color-theme-toggle" />
                <label htmlFor="color-theme-toggle"></label>
            </div>
        </nav>
    );
}


{/*

<nav className="navbar">
    <div className="navbar-icon-container">
            <span className="navbar-icon"><img /></span>
            <p className="navbar-label"></p>
    </div>
    <div className="navbar-theme-toggle-container">
        <input type="checkbox" name="color-theme-toggle" id="color-theme-toggle" className="color-theme-toggle" />
        <label htmlFor="color-theme-toggle">Dark Mode</label>
    </div>
</nav>


<nav>
    <div className="placeholder-navbar-container"></div>
    <div>
        <input type="checkbox" name="color-theme-toggle" id="color-theme-toggle" className="color-theme-toggle" />
        <label htmlFor="color-theme-toggle">Dark Mode</label>
    </div>
</nav>

*/}