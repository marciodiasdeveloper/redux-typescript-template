import React from 'react';

import { useSelector } from 'react-redux';

const Catalog: React.FC = () => {
    const store = useSelector();

    return (
        <h1>Catalog</h1>
    )
}