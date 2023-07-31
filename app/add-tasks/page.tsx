import Link from 'next/link';
import React from 'react';

const AddTasks = () => {
    return (
        <div>
            <p>This is my add tasks</p>
            <Link href='/'><button className=''>home</button></Link>
        </div>
    );
};

export default AddTasks;