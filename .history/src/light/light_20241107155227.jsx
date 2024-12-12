import React from 'react';

const Light = () => {
    return (
        <>
            <input type="checkbox" id="toggle" className="toggle--checkbox" />
            <label htmlFor="toggle" className="toggle--label">
                <span className="toggle--label-background"></span>
            </label>
            <div className="background"></div>
        </>
    );
}

export default Light;
