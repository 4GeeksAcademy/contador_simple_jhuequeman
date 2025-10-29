import React from 'react';
import { use } from 'react';
import { useState,useEffect } from 'react';

const Digital = (props) => {
    
    return (
        <div className="digital-unit"> {/* <--- ¡Añade esta clase! */}
            {props.count}
        </div>
    );
};

export default Digital;