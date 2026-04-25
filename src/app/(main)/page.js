import Image from "next/image";


async function getCategories() {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const categories = await getCategories();
  console.log(categories.news_category);
  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto my-10">
      <div className=" col-span-3">
        <h2 className="font-bold text-xl">All categories</h2>
        
        <ul className="flex flex-col gap-3 mt-6">
          {
            categories.news_category.map(categorie => {
              return <li 
              key={categorie.category_id}
              className="bg-slate-100 p-2 rounded-md font bold text-center text-xl">
                {categorie.category_name}
                </li>
            })
          }

        </ul>
      </div>
      <div className="font-bold text-3xl col-span-6">
        All categories
      </div>
      <div className="font-bold text-3xl col-span-3">
        All categories
      </div>
    </div>
  );
}
