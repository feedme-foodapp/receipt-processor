/* React */
import React, { useEffect } from 'react';

/* React-Redux */
import {
    useDispatch
} from 'react-redux';

import {
    hide
} from 'src/redux/features/splitPaneSlice';

const HomePage: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(hide());
    }, [dispatch]);

    return (
        <div></div>
    );
};

export default HomePage;