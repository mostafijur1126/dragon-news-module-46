import Link from 'next/link';
import React from 'react';

const Leftside = ({ categories,isActive }) => {
  // console.log(isActive);
  return (
    <div className=" col-span-3">
      <h2 className="font-bold text-xl">All categories</h2>

      <ul className="flex flex-col gap-3 mt-6">
        {
          categories.news_category.map(categorie => {
            return <li
              key={categorie.category_id}
              className={`${isActive === categorie.category_id ? "bg-amber-300" : ""}
                p-2 rounded-md font bold text-center text-xl`}>
              <Link className='block bg-slate-100 py-2' href={`/category/${categorie.category_id}`}>{categorie.category_name}</Link>
            </li>
          })
        }

      </ul>
    </div>
  );
};

export default Leftside;