//import liraries
import React, { Component } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LoggerSearchScreen } from '../screens/loggerSearch/loggerSearch.screen';


// create a component
export const Navigator = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route
                    path="*"
                    element={<Navigate to="/**Router name**" replace />}
                /> */}
                <Route path="/" element={<LoggerSearchScreen />} />
            </Routes>
        </BrowserRouter>

    );
};

;
