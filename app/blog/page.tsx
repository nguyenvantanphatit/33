"use client"
import { useEffect, useState } from "react";
import axios from "axios";

export default function Blog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://64e31273bac46e480e782010.mockapi.io/api/CURD');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log("data", data)
  const handleChange = (id: any) => {
    console.log("handleChange", id)
  }
  return (
    <>
      <div>
        <h2>Table</h2>
        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Color
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: any, index: any) => (
                  <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.tittle}
                    </th>
                    <td className="px-6 py-4">
                      {item.desc}
                    </td>
                    <td className="px-6 py-4">
                      {item.note}
                    </td>
                    <td className="px-6 py-4">
                      {item.img}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => handleChange(item.id)}>Edit</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </>
  );
}
