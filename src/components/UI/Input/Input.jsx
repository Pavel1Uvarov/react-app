import React from 'react';

const MyComponent = React.forwardRef((props, ref) => {
    return (
        <input {...props} ref={ref} />
    );
});

export default MyComponent;
