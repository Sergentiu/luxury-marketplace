import { CategoryPage } from "@/components/category/category-page";
import { ProductCategory } from "@/types";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
  searchParams: Promise<{
    brand?: string;
    condition?: string;
    price_min?: string;
    price_max?: string;
    sort?: string;
    page?: string;
  }>;
}

export default async function Category({ params, searchParams }: CategoryPageProps) {
  const { category: categoryParam } = await params;
  const searchParamsResolved = await searchParams;
  const category = categoryParam as ProductCategory;
  
  return (
    <CategoryPage 
      category={category}
      searchParams={searchParamsResolved}
    />
  );
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const title = category.charAt(0).toUpperCase() + category.slice(1);
  
  return {
    title: `${title} | Luxury Marketplace`,
    description: `Shop authentic luxury ${category} from top designer brands. Premium pre-owned ${category} with authenticity guarantee.`,
  };
}
