

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import '../globals.css';
import { useRouter } from "next/navigation";
import CreateSubscriptionForm from "../components/create-subscription.tsx";

interface Subscription {
    _id: string;
    name: string;
    price: number;
    renewalDate: string;
}

interface User {
    name: string;
    email: string;
}

export default function Dashboard() {
    const [user, setUser] = useState<User | null>(null);
    const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
    const [menuOpen, setMenuOpen] = useState<boolean>(true);
    const [showForm, setShowForm] = useState<boolean>(false);
    const [token, setToken] = useState<string | null>(null);
    const [userId, setuserId] = useState<string | null>(null);
    const [userName, setuserName] = useState<string | null>(null);
    const [userEmail, setuserEmail] = useState<string | null>(null);



    useEffect(() => {
        const t = localStorage.getItem('token');
        if (!t) {
            router.push("/login");
        }
        setToken(t);
    }, []);
    //const userName = localStorage.getItem('userName');
    //const userId = localStorage.getItem('userId');
    //const userEmail = localStorage.getItem('userEmail');
    useEffect(() => {
        const t = localStorage.getItem('userId');
        console.log(t);
        setuserId(t);
    }, []);
    useEffect(() => {
        const t = localStorage.getItem('userName');
        setuserName(t);
    }, []);
    useEffect(() => {
        const t = localStorage.getItem('userEmail');
        setuserEmail(t);
    }, []);


    const router = useRouter();



    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(userId);
                console.log(token);
                const res = await fetch(`https://subscription-tracker-api-yf9b.onrender.com/api/v1/subscriptions/user/${localStorage.getItem('userId') }`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem('token') }`,
                    }
                });

                const subData = await res.json();
                setSubscriptions(subData.data || []);
            } catch (err) {
                console.error("Error fetching dashboard data:", err);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="min-h-screen flex">
            <div className={`w-64 bg-indigo-700 text-white p-6 ${menuOpen ? "block" : "hidden"} md:block`}>
                <a href="/dashboard"><h2 className="text-xl font-semibold mb-4">Dashboard Menu</h2></a>
                <ul className="space-y-3">
                    <li><button onClick={() => setShowForm(true)} className="hover:text-indigo-300">Add Subscription</button></li>
                    <li><a href="#" className="hover:text-indigo-300">Edit Subscription</a></li>
                    <li><a href="#" className="hover:text-indigo-300">Delete Subscription</a></li>
                </ul>
            </div>

            <div className="flex-1 bg-gray-100 p-6">
                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden mb-4 text-indigo-700 underline">
                    {menuOpen ? "Hide Menu" : "Show Menu"}
                </button>

                <div className="bg-white p-6 rounded shadow">
                    <h1 className="text-2xl font-bold mb-2">Welcome, {userName}</h1>
                    <p className="text-sm text-gray-600 mb-6">Email: {userEmail}</p>

                    {showForm && (
                        <div className="mb-8">
                            <CreateSubscriptionForm onSuccess={(newSub: Subscription) => {
                                setSubscriptions(prev => [...prev, newSub]);
                                setShowForm(false);
                            }} />
                        </div>
                    )}

                    <h2 className="text-xl font-semibold mb-4">Your Subscriptions</h2>
                    {subscriptions.length === 0 ? (
                        <p>No subscriptions found.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {subscriptions.map((sub) => (
                                <div key={sub._id} className="border p-4 rounded bg-white shadow">
                                    <h3 className="font-semibold">{sub.name}</h3>
                                    <p>Price: ?{sub.price}</p>
                                    <p className="text-sm text-gray-700">Renewal: {new Date(sub.renewalDate).toLocaleDateString()}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}










//"use client";

//import { useEffect, useState } from "react";
//import '../globals.css';
//import { useRouter } from "next/navigation";
//import CreateSubscriptionForm from '../components/create-subscription.tsx';
//import Link from 'next/link'

//interface Subscription {
//    _id: string;
//    name: string;
//    price: number;
//    renewalDate: string;
//}

//export default function Dashboard() {
//    const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
//    const [menuOpen, setMenuOpen] = useState<boolean>(true);
//    const [showForm, setshowForm] = useState<boolean>(false);
//    const router = useRouter();

//    //const userName = typeof window !== "undefined" ? localStorage.getItem("userName") : "";
//    //const userEmail = typeof window !== "undefined" ? localStorage.getItem("userEmail") : "";
//    //const token = typeof window !== "undefined" ? localStorage.getItem("token") : "";
//    //const userId = typeof window !== "undefined" ? localStorage.getItem("userId") : "";

//    const [token, setToken] = useState('');
//    const [userId, setUserId] = useState('');
//    const [userName, setUserName] = useState('');
//    const [userEmail, setUserEmail] = useState('');
//    const [loaded, setLoaded] = useState(false); // NEW FLAG

//    useEffect(() => {
//        setToken(localStorage.getItem('token') || '');
//        setUserId(localStorage.getItem('userId') || '');
//        setUserName(localStorage.getItem('userName') || '');
//        setUserEmail(localStorage.getItem('userEmail') || '');
//        setLoaded(true); // DONE LOADING
//    }, []);

//    useEffect(() => {
//        if (loaded && (!token || !userId)) {
//            router.push("/login");
//        }
//    }, [loaded, token, userId]);


//        const fetchSubscriptions = async () => {
//            try {
//                //const res = await fetch(`https://subscription-tracker-api-yf9b.onrender.com/api/v1/users/${userId}`, {
//                //    method: "POST",
//                //    headers: {
//                //        "Content-Type": "application/json",
//                //        Authorization: `Bearer ${token}`,
//                //    },
//                //    //body: JSON.stringify({ userId }),
//                //});
//                const res = await fetch(`https://subscription-tracker-api-yf9b.onrender.com/api/v1/subscriptions/user/${userId}`, {
//                    method: "GET",
//                    headers: {
//                        "Content-Type": "application/json",
//                        "Authorization": `Bearer ${token}`,
//                    },
//                });


//                const data = await res.json();
//                setSubscriptions(data.subscriptions || []);
//            } catch (error) {
//                console.error("Failed to fetch subscriptions", error);
//            }
//        };

//        fetchSubscriptions();
//    }, []);

//    return (

//        //style 1

//        <div className="min-h-screen flex font-sans bg-gray-50">
//            {/* Sidebar */}
//            <div className={`w-64 bg-indigo-800 text-black px-6 py-8 shadow-md transition-all duration-300 ease-in-out ${menuOpen ? "block" : "hidden"} md:block`}>
//                <a href="/dashboard"><h2 className="text-2xl font-bold mb-8">Dashboard</h2></a>
//                <ul className="space-y-4">
//                    <li>
//                        <button onClick={() => setshowForm(true)} className="hover:text-indigo-300">Add Subscription</button>
//                    </li>
//                    <li>
//                        <a href="#" className="block py-2 px-3 rounded-md hover:bg-indigo-700 transition duration-200">
//                            ?? Edit Subscription
//                        </a>
//                    </li>
//                    <li>
//                        <a href="#" className="block py-2 px-3 rounded-md hover:bg-indigo-700 transition duration-200">
//                            ? Delete Subscription
//                        </a>
//                    </li>
//                </ul>
//            </div>

//            {/* Main Content */}
//            <div className="flex-1 p-6">
//                <button
//                    onClick={() => setMenuOpen(!menuOpen)}
//                    className="md:hidden mb-6 text-indigo-700 underline focus:outline-none"
//                >
//                    {menuOpen ? "Hide Menu" : "Show Menu"}
//                </button>



//                <div className="bg-white p-8 rounded-lg shadow-md">
//                    <div className="mb-6">
//                        <h1 className="text-3xl font-bold text-indigo-800">Welcome, {userName}</h1>
//                        <p className="text-gray-500 mt-1 text-sm">?? {userEmail}</p>
//                    </div>

//                    {showForm && (
//                        <div className="mb-8">
//                            <CreateSubscriptionForm onSuccess={(newSub) => {
//                                setSubscriptions(prev => [...prev, newSub]);
//                                setshowForm(false);
//                            }} />
//                        </div>
//                    )}

//                    <h2 className="text-xl font-semibold text-gray-800 mb-4">?? Your Subscriptions</h2>

//                    {subscriptions.length === 0 ? (
//                        <div className="text-center text-gray-500">No subscriptions found.</div>
//                    ) : (
//                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                            {subscriptions.map((sub) => (
//                                <div
//                                    key={sub._id}
//                                    className="bg-gradient-to-br from-indigo-100 to-white border border-indigo-200 p-5 rounded-lg shadow hover:shadow-lg transition duration-300"
//                                >
//                                    <h3 className="text-lg font-semibold text-indigo-900 mb-1">{sub.name}</h3>
//                                    <p className="text-sm text-gray-700">?? Price: ?{sub.price}</p>
//                                    <p className="text-sm text-gray-700">?? Renewal: {new Date(sub.renewalDate).toLocaleDateString()}</p>
//                                </div>
//                            ))}
//                        </div>
//                    )}
//                </div>
//            </div>
//        </div>

//        //style 2

//        //<div className="min-h-screen flex font-sans bg-gray-50">
//        //    {/* Sidebar */}
//        //    <div className={`fixed md:static z-20 top-0 left-0 h-full w-64 bg-indigo-800 text-white px-6 py-8 shadow-md transition-transform transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
//        //        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
//        //        <ul className="space-y-4">
//        //            <li>
//        //                <button onClick={() => setshowForm(true)} className="hover:text-indigo-300">
//        //                     Add Subscription
//        //                </button>
//        //            </li>
//        //            <li>
//        //                <a href="#" className="block py-2 px-3 rounded-md hover:bg-indigo-700 transition duration-200">
//        //                     Edit Subscription
//        //                </a>
//        //            </li>
//        //            <li>
//        //                <a href="#" className="block py-2 px-3 rounded-md hover:bg-indigo-700 transition duration-200">
//        //                     Delete Subscription
//        //                </a>
//        //            </li>
//        //        </ul>
//        //    </div>

//        //    {/* Main Content */}
//        //    <div className="flex-1 p-6 ml-0 md:ml-64 transition-all duration-300">
//        //        {/* Toggle Button */}
//        //        <div className="md:hidden flex justify-between items-center mb-4">
//        //            <button
//        //                onClick={() => setMenuOpen(!menuOpen)}
//        //                className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700"
//        //            >
//        //                {menuOpen ? "Close Menu" : "Open Menu"}
//        //            </button>
//        //        </div>

//        //        <div className="bg-white p-8 rounded-lg shadow-md">
//        //            <div className="mb-6">
//        //                <h1 className="text-3xl font-bold text-indigo-800">Welcome, {userName}</h1>
//        //                <p className="text-gray-500 mt-1 text-sm"> {userEmail}</p>
//        //            </div>

//        //            {showForm && (
//        //                <div className="mb-8">
//        //                    <CreateSubscriptionForm
//        //                        onSuccess={(newSub) => {
//        //                            setSubscriptions((prev) => [...prev, newSub]);
//        //                            setshowForm(false);
//        //                        }}
//        //                    />
//        //                </div>
//        //            )}

//        //            <h2 className="text-xl font-semibold text-gray-800 mb-4"> Your Subscriptions</h2>

//        //            {subscriptions.length === 0 ? (
//        //                <div className="text-center text-gray-500">No subscriptions found.</div>
//        //            ) : (
//        //                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//        //                    {subscriptions.map((sub) => (
//        //                        <div
//        //                            key={sub._id}
//        //                            className="bg-gradient-to-br from-indigo-100 to-white border border-indigo-200 p-5 rounded-lg shadow hover:shadow-lg transition duration-300"
//        //                        >
//        //                            <h3 className="text-lg font-semibold text-indigo-900 mb-1">{sub.name}</h3>
//        //                            <p className="text-sm text-gray-700"> Price: ?{sub.price}</p>
//        //                            <p className="text-sm text-gray-700"> Renewal: {new Date(sub.renewalDate).toLocaleDateString()}</p>
//        //                        </div>
//        //                    ))}
//        //                </div>
//        //            )}
//        //        </div>
//        //    </div>
//        //</div>


//        ////stlye 3
//        //<div className="min-h-screen flex font-sans bg-gray-50 dark:bg-neutral-900 transition-all duration-300">
//        //    {/* Sidebar */}
//        //    <div className={`fixed md:static z-20 top-0 left-0 h-full w-64 bg-white border-e border-gray-200 dark:bg-neutral-800 dark:border-neutral-700 px-6 py-8 shadow-md transition-transform transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
//        //        <h2 className="text-2xl font-bold text-indigo-600 dark:text-white mb-8">Dashboard</h2>
//        //        <ul className="space-y-4">
//        //            <li>
//        //                <button onClick={() => setshowForm(true)} className="text-sm text-gray-800 dark:text-neutral-200 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
//        //                    Add Subscription
//        //                </button>
//        //            </li>
//        //            <li>
//        //                <a href="#" className="block py-2 px-3 rounded-md text-sm text-gray-800 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-700 transition duration-200">
//        //                    Edit Subscription
//        //                </a>
//        //            </li>
//        //            <li>
//        //                <a href="#" className="block py-2 px-3 rounded-md text-sm text-gray-800 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-700 transition duration-200">
//        //                    Delete Subscription
//        //                </a>
//        //            </li>
//        //        </ul>
//        //    </div>

//        //    {/* Main Content */}
//        //    <div className="flex-1 p-6 ml-0 md:ml-64 transition-all duration-300">
//        //        {/* Toggle Button */}
//        //        <div className="md:hidden flex justify-between items-center mb-4">
//        //            <button
//        //                onClick={() => setMenuOpen(!menuOpen)}
//        //                className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700"
//        //            >
//        //                {menuOpen ? "Close Menu" : "Open Menu"}
//        //            </button>
//        //        </div>

//        //        <div className="bg-white dark:bg-neutral-800 p-8 rounded-lg shadow-md">
//        //            <div className="mb-6">
//        //                <h1 className="text-3xl font-bold text-indigo-800 dark:text-white">Welcome, {userName}</h1>
//        //                <p className="text-gray-500 dark:text-neutral-400 mt-1 text-sm">{userEmail}</p>
//        //            </div>

//        //            {showForm && (
//        //                <div className="mb-8">
//        //                    <CreateSubscriptionForm
//        //                        onSuccess={(newSub) => {
//        //                            setSubscriptions((prev) => [...prev, newSub]);
//        //                            setshowForm(false);
//        //                        }}
//        //                    />
//        //                </div>
//        //            )}

//        //            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Your Subscriptions</h2>

//        //            {subscriptions.length === 0 ? (
//        //                <div className="text-center text-gray-500 dark:text-neutral-400">No subscriptions found.</div>
//        //            ) : (
//        //                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//        //                    {subscriptions.map((sub) => (
//        //                        <div
//        //                            key={sub._id}
//        //                            className="bg-gradient-to-br from-indigo-100 to-white dark:from-neutral-700 dark:to-neutral-800 border border-indigo-200 dark:border-neutral-700 p-5 rounded-lg shadow hover:shadow-lg transition duration-300"
//        //                        >
//        //                            <h3 className="text-lg font-semibold text-indigo-900 dark:text-white mb-1">{sub.name}</h3>
//        //                            <p className="text-sm text-gray-700 dark:text-neutral-300">Price: ?{sub.price}</p>
//        //                            <p className="text-sm text-gray-700 dark:text-neutral-300">Renewal: {new Date(sub.renewalDate).toLocaleDateString()}</p>
//        //                        </div>
//        //                    ))}
//        //                </div>
//        //            )}
//        //        </div>
//        //    </div>
//        //</div>



//    );
//}



//dashboard 2


