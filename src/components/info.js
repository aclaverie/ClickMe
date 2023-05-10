import React from 'react';

function Info(){
    return (
        <div className="info">
            <div className='info-head'>Click Speed Test Clone - CPS Test</div>
            <div className='info-p'>
                CPS Test Online. Challenge yourself to measure Clicks Per Second.
                In seconds, our simple CPS Tester will estimate your clicking test.
                Clicks in 5 Seconds.<br />           
                How fast can you click in 5 seconds? Start the game by clicking on the gray plus or minus.
                Note: Clock starts ticking with the first click.
            </div>
            <div className='info-head'>Your CPS Test Score: <span className='score'>0</span></div>
            <br />
            <div className="info-time">00:00:00</div>
        </div>
    );
}

export default Info;