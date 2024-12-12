import React from 'react';

const Light = () => {
    return (
        <>
            <div className="bodymode">
                <input type="checkbox" id="toggle" className="toggle--checkbox1" />
                <label htmlFor="toggle" className="toggle--label">
                    <span className="toggle--label-background"></span>
                </label>
                <h1>hi</h1>
                <div className="background"></div>
            </div>
        </>
    );
}

export default Light;
