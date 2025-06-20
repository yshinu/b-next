import CategoriesClient from "./categories-client";
import  getCategoriesData  from "@/app/(app-page)/data/getCategoriesData";

export default async function CategoriesContent() {
  const categories = await getCategoriesData();
  
  return <CategoriesClient categories={categories} />;
}