import React from 'react';


function Home() {
    return (
        <div>
            <div className="title">
                <h1>Chingu Dev Guide</h1>    
            </div>     
            <div className="body">
                <div className="start">
                    <button>start</button>
                </div>
                <div>
                    <ul>
                        <li><i className="fa fa-users" aria-hidden="true"></i>Community</li>
                        <li><i className="fa fa-check-circle-o" aria-hidden="true"></i>Guide</li>
                        <li><i className="fa fa-user" aria-hidden="true"></i>Mentoring</li>
                        <li><i className="fa fa-hand-rock-o" aria-hidden="true"></i>Motivating</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home;