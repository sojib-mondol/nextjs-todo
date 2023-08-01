import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import useSWR from 'swr';
import DeleteModal from '../deleteModal/DeleteModal';


// const fetcher = async (url: string) => {
//     const response = await axios.get(url);
//     return response.data;
// };

const DataFetchAndShow = ({ apiUrl }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const [singleUser, setSingleUser] = useState([]);

    //modal
    const [modal, setModal] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => setData(data))
        setLoading(false);
    }, [data])


    // for delete
    const handleDelete = (_id: any) => {
        fetch(`http://localhost:5000/todo/${_id}`, {
            method: "DELETE",
            headers: {
            },
        })
            .then((res) => res.json())
            .then((data) => {

                toast.success(`Deleted successfully`);
                setModal(false);

            });
    };



    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>




            <div className="overflow-x-auto">
                <table className="table">

                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>My todos</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data.map((item: any, i) => (
                            <tr key={i} >
                                <th>{i + 1}</th>
                                <td>{item.todoName}</td>
                                <button
                                    onClick={() => setModal(true)}
                                    className="ml-[20px] mt-[10px] btn-secondary  text-white px-[20px] text-[16px] py-[2px] rounded-[4px]">
                                    Delete
                                </button>
                                {modal && (
                                    <DeleteModal handleDelete={handleDelete} setModal={setModal} _id={item?._id} />
                                )}
                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default DataFetchAndShow;