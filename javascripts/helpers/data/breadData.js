const breads = [
    {
        type: 'wheat',
        color: 'brown',
        price: 14.95,
        id: `bread1`
    },
    {
        type: 'white',
        color: 'white',
        price: 13.95,
        id: `bread2`
    },
    {
        type: 'rye',
        color: 'off-white',
        price: 15.95,
        id: `bread3`
    }
];

const getBreads = () => {
    return breads;
}

export default { getBreads };