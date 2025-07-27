"use client";

import { useState } from "react";
import '../globals.css';

interface CreateSubscriptionFormProps {
    onSuccess: (newSub: any) => void;
}


export default function CreateSubscriptionForm({ onSuccess }: CreateSubscriptionFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        currency: "INR",
        frequency: "monthly",
        category: "entertainment",
        startdate: "",
        paymentmethod: "UPI",
    });

    const [responseMsg, setResponseMsg] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const token = localStorage.getItem("token");

        try {
            const res = await fetch("https://subscription-tracker-api-yf9b.onrender.com/api/v1/subscriptions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message || "Succesfully created subscription, working on setteing up your reminder workflow");
            setResponseMsg("Subscription created successfully!");
        } catch (error: any) {
            setResponseMsg(error.message || "Something went wrong");
        }
    };

    return (
        //<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        //    <div className="max-w-md w-full space-y-8 bg-white p-8 shadow-lg rounded-md">
        //        <h2 className="text-2xl font-bold text-gray-800 text-center">Create Subscription</h2>
        //        {responseMsg && <div className="text-center text-indigo-600 font-medium">{responseMsg}</div>}
        //        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
        //            <input name="name" value={formData.name} onChange={handleChange} placeholder="Service Name (e.g. Amazon)" required className="w-full p-2 border rounded" />
        //            <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Price" required className="w-full p-2 border rounded" />

        //            <select name="currency" value={formData.currency} onChange={handleChange} className="w-full p-2 border rounded">
        //                <option value="INR">INR</option>
        //                <option value="USD">USD</option>
        //                <option value="EUR">EUR</option>
        //            </select>

        //            <select name="frequency" value={formData.frequency} onChange={handleChange} className="w-full p-2 border rounded">
        //                <option value="monthly">Monthly</option>
        //                <option value="yearly">Yearly</option>
        //                <option value="weekly">Weekly</option>
        //            </select>

        //            <input name="category" value={formData.category} onChange={handleChange} placeholder="Category (e.g. entertainment)" required className="w-full p-2 border rounded" />

        //            <input name="startdate" type="date" value={formData.startdate} onChange={handleChange} required className="w-full p-2 border rounded" />

        //            <select name="paymentmethod" value={formData.paymentmethod} onChange={handleChange} className="w-full p-2 border rounded">
        //                <option value="UPI">UPI</option>
        //                <option value="Credit Card">Credit Card</option>
        //                <option value="Debit Card">Debit Card</option>
        //                <option value="Net Banking">Net Banking</option>
        //            </select>

        //            <button
        //                type="submit"
        //                className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition"
        //            >
        //                Submit
        //            </button>
        //        </form>
        //    </div>
        //</div>

        <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 shadow-xl rounded-lg border border-gray-700">
                <h2 className="text-2xl font-bold text-white text-center">Create Subscription</h2>

                {responseMsg && (
                    <div className="text-center text-green-400 font-medium">{responseMsg}</div>
                )}

                <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Service Name (e.g. Amazon)"
                        required
                        className="w-full p-2 bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    <input
                        name="price"
                        type="number"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Price"
                        required
                        className="w-full p-2 bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    <select
                        name="currency"
                        value={formData.currency}
                        onChange={handleChange}
                        className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <option value="INR">INR</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                    </select>

                    <select
                        name="frequency"
                        value={formData.frequency}
                        onChange={handleChange}
                        className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                        <option value="weekly">Weekly</option>
                    </select>

                    <input
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        placeholder="Category (e.g. entertainment)"
                        required
                        className="w-full p-2 bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    <input
                        name="startdate"
                        type="date"
                        value={formData.startdate}
                        onChange={handleChange}
                        required
                        className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    <select
                        name="paymentmethod"
                        value={formData.paymentmethod}
                        onChange={handleChange}
                        className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <option value="UPI">UPI</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Debit Card">Debit Card</option>
                        <option value="Net Banking">Net Banking</option>
                    </select>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>

    );
}
