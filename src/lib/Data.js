// const catagoryId = "01"
export async function getCategories() {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data;
}

export const newsInCategory = async(catagoryId) =>{
    const res = await fetch (`https://openapi.programming-hero.com/api/news/category/${catagoryId}`);
    const data = await res.json();
    return data.data;
}