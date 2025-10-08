import { useEffect, useState } from 'react'
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../config/firebaseConfig';
import { storage, db } from "../../config/firebaseConfig";
import { useSelector, useDispatch } from 'react-redux'
import { showCaseProduct, ShowCaseProductSlice } from '../../features/ShowCaseProductSlice';
import PostShowcaseProduct from './PostShowcaseProduct';



const AdminDashBoard = () => {
    const dispatch = useDispatch();
    const app = initializeApp(firebaseConfig);
    // const db = getFirestore(app);
    // const storage = getStorage(app);

    const [allInput, setAllInput] = useState({
        name: "",
        title: "",
        shortDesc: "",
        desc: "",
        category: "",
        image: null,
    });
    const [imgUrl, setImgUrl] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleInput = (e) => {
        const { name, value, files } = e.target;

        setAllInput((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        let imageUrlToSave = null;
        let deleteUrlToSave = null;


        try {
            if (allInput.image) {
                const formData = new FormData();
                formData.append('image', allInput.image);
                formData.append('key', import.meta.env.VITE_IMAGE_BB_API);

                const response = await fetch('https://api.imgbb.com/1/upload', {
                    method: 'POST',
                    body: formData,
                });
                const data = await response.json();

                if (data.success) {

                    imageUrlToSave = data.data.url;
                    deleteUrlToSave = data.data.delete_url;
                    setImgUrl(imageUrlToSave);
                } else {
                    throw new Error('ImageBB upload failed: ' + data.error.message);
                }
            }


            // Store form data in Firestore, including the deleteUrlToSave
            await addDoc(collection(db, 'adminDashboardData'), {
                name: allInput.name,
                title: allInput.title,
                shortDesc: allInput.shortDesc,
                desc: allInput.desc,
                category: allInput.category,
                imageUrl: imageUrlToSave,
                deleteUrl: deleteUrlToSave,
                createdAt: new Date(),
            });

            alert('Data submitted successfully!');
            setAllInput({
                name: "",
                title: "",
                shortDesc: "",
                desc: "",
                category: "",
                image: null,
            });
            setImgUrl('');
        } catch (error) {
            console.error('Error submitting data:', error);
            alert('Error submitting data: ' + error.message);
        }
    };
    // Asynchronous function to fetch data from Firestore
    const fetchData = async () => {
        setLoading(true); 
        try {
            const querySnapshot = await getDocs(collection(db, 'adminDashboardData'));
            const fetchedData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setData(fetchedData);
            dispatch(showCaseProduct(data));

        } catch (error) {
            console.error('Error fetching documents: ', error);
        } finally {
            setLoading(false);
        }
    };




    // New handleDelete function
    const handleDelete = async (id, deleteUrl) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            try {
                await deleteDoc(doc(db, 'adminDashboardData', id));
                if (deleteUrl) {
                    const deleteKey = deleteUrl.split('/').pop();
                    // Construct the correct ImageBB delete API endpoint
                    const imgbbDeleteEndpoint = `https://api.imgbb.com/1/delete?key=${import.meta.env.VITE_IMAGE_BB_API}&delete=${deleteKey}`;
                    const response = await fetch(imgbbDeleteEndpoint, {
                        method: 'POST',
                    });
                    const result = await response.json();

                    if (result.success) {
                        console.log('Image deleted from ImageBB successfully!');
                    } else {
                        console.error('Failed to delete image from ImageBB:', result.error.message);
                    }
                }

                alert("Document and image successfully deleted!");
                fetchData();
            } catch (error) {
                console.error("Error removing document and/or image: ", error);
                alert("Error deleting the document.");
            }
        }
    };

    useEffect(() => {
        fetchData();
    }, []);







    return (
        <>
            <div>
                <div className='py-32 p-10'>
                    {/* Ensure your form is submitting via a button inside the form, or explicitly call handleSubmit */}
                    <form className='flex flex-col gap-4 [&>div]:flex [&>div]:gap-5 [&_input]:border' onSubmit={handleSubmit}>
                        {/* ====Name==== */}
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" name='name' id='name' value={allInput.name} onChange={handleInput} />
                        </div>
                        <div>
                            <label htmlFor="title">title</label>
                            <input type="text" name='title' id='title' value={allInput.title} onChange={handleInput} />
                        </div>
                        <div>
                            <label htmlFor="shortDesc">Short description</label>
                            <input type="text" name='shortDesc' id='shortDesc' value={allInput.shortDesc} onChange={handleInput} />
                        </div>
                        <div>
                            <label htmlFor="desc">Description</label>
                            <input type="text" name='desc' id='desc' value={allInput.desc} onChange={handleInput} />
                        </div>
                        <div>
                            <label htmlFor="category">Category</label>
                            <input type="text" name='category' id='category' value={allInput.category} onChange={handleInput} />
                        </div>
                        <div>
                            <label htmlFor="image">image</label>
                            {/* Important: For file inputs, the `value` attribute should not be set
                            or should be an empty string for controlled components. */}
                            <input type="file" name='image' id='image' onChange={handleInput} />
                        </div>
                        <button type="submit" className='border px-4 py-2'>submit</button>
                    </form>
                </div>
                <PostShowcaseProduct/>



                {/* Load the data from firebase */}

                <div className='p-10'>
                    <h2>All Data Come from Firebase</h2>
                    {loading ? (
                        <p>Loading data...</p>
                    ) : data.length > 0 ? (
                        <table className='w-full border-collapse border border-gray-400'>
                            <thead>
                                <tr className='bg-gray-200'>
                                    <th className='border border-gray-400 p-2'>ID</th>
                                    <th className='border border-gray-400 p-2'>Name</th>
                                    <th className='border border-gray-400 p-2'>Title</th>
                                    <th className='border border-gray-400 p-2'>Category</th>
                                    <th className='border border-gray-400 p-2'>Image</th>
                                    <th className='border border-gray-400 p-2'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr key={item.id} className='text-center'>
                                        <td className='border border-gray-400 p-2'>{item.id}</td>
                                        <td className='border border-gray-400 p-2'>{item.name}</td>
                                        <td className='border border-gray-400 p-2'>{item.title}</td>
                                        <td className='border border-gray-400 p-2'>{item.category}</td>
                                        <td className='border border-gray-400 p-2'>
                                            {item.imageUrl && <img src={item.imageUrl} alt={item.name} className='w-16 h-16 object-cover mx-auto' />}
                                        </td>
                                        <td
                                            className='border border-gray-400 p-2'>
                                            <button
                                                className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                                                onClick={() => handleDelete(item.id, item.deleteUrl)

                                                }>Delete
                                            </button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No data available.</p>
                    )}
                    
                </div>




            </div>
        </>
    )
}

export default AdminDashBoard;
