import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import leftImg1 from '@/assets/l1.png'
import leftImg2 from '@/assets/l2.png'
import leftImg3 from '@/assets/l3.png'
import { MdDateRange } from 'react-icons/md';

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
      <div>
        <div>
          <Image
          src={leftImg1}
          alt='l'
          width={200}
          height={200}
          className='w-auto h-auto'
          ></Image>
          <h3>Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
          <div className='flex items-center gap-2 text-xs'><span>Sports</span><MdDateRange /><span>Jan 4, 2022</span></div>
        </div>
        <div>
          <Image
          src={leftImg2}
          alt='l'
          width={200}
          height={200}
          className='w-auto h-auto'
          ></Image>
          <h3>Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
          <div className='flex items-center gap-2 text-xs'><span>Sports</span><MdDateRange /><span>Jan 4, 2022</span></div>
        </div>
        <div>
          <Image
          src={leftImg3}
          alt='l'
          width={200}
          height={200}
          className='w-auto h-auto'
          ></Image>
          <h3>Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
          <div className='flex items-center gap-2 text-xs'><span>Sports</span><MdDateRange /><span>Jan 4, 2022</span></div>
        </div>
      </div>
    </div>
  );
};

export default Leftside;