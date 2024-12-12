import React from 'react';

const Oqqora = () => {
    return (
        <>
            <div className="bodyoq">
                <input type="checkbox" id="toggle" className="toggle--checkbox" />
                <label htmlFor="toggle" className="toggle--label">
                    <span className="toggle--label-background"></span>
                </label>
                <div className="background"></div>
            </div>
        </>
    );
};

export default Oqqora;
