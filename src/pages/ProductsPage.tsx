import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SlidersHorizontal, GridIcon, ListIcon } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageBanner from '../components/PageBanner';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import { getProductsByCategory } from '../data/products';
import { Product, Category } from '../types';

const ProductsPage: React.FC = () => {
  const { category = 'all' } = useParams<{ category: Category }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    // Fetch products based on category
    const fetchedProducts = getProductsByCategory(category);
    setProducts(fetchedProducts);
  }, [category]);

  const toggleFilterSidebar = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleCategoryChange = (newCategory: string) => {
    // In a real app, this would navigate to the new category
    console.log(`Changing to category: ${newCategory}`);
  };

  const sortProducts = (products: Product[], sortOption: string) => {
    const sortedProducts = [...products];
    
    switch (sortOption) {
      case 'price-low-high':
        return sortedProducts.sort((a, b) => a.price - b.price);
      case 'price-high-low':
        return sortedProducts.sort((a, b) => b.price - a.price);
      case 'newest':
        return sortedProducts.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      case 'featured':
      default:
        return sortedProducts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
  };

  const sortedProducts = sortProducts(products, sortBy);

  // Get the category title
  const getCategoryTitle = () => {
    switch (category) {
      case 'men':
        return 'Men\'s Collection';
      case 'women':
        return 'Women\'s Collection';
      case 'accessories':
        return 'Accessories';
      case 'all':
      default:
        return 'All Products';
    }
  };

  return (
    <>
      <Header />
      <main>
        <PageBanner 
          title={getCategoryTitle()} 
          subtitle={`Discover our curated selection of ${category === 'all' ? 'products' : category}`}
        />
        
        <div className="container mx-auto px-4 md:px-8 py-12">
          {/* Filters and sorting */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <button
              onClick={toggleFilterSidebar}
              className="flex items-center text-gray-900 hover:text-gray-700 transition-colors"
            >
              <SlidersHorizontal size={18} className="mr-2" />
              Filter & Sort
            </button>
            
            <div className="flex items-center space-x-4">
              <div>
                <label htmlFor="sort-by" className="sr-only">Sort by</label>
                <select
                  id="sort-by"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1 ${viewMode === 'grid' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-700'}`}
                  aria-label="Grid view"
                >
                  <GridIcon size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1 ${viewMode === 'list' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-700'}`}
                  aria-label="List view"
                >
                  <ListIcon size={20} />
                </button>
              </div>
            </div>
          </div>
          
          {/* Products count */}
          <p className="text-gray-600 mb-6">
            Showing {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'}
          </p>
          
          {/* Products grid */}
          <div className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10' 
              : 'space-y-8'
          }`}>
            {sortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {/* Empty state */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">
                Try adjusting your filters or search criteria to find what you're looking for.
              </p>
            </div>
          )}
        </div>
        
        {/* Filter sidebar */}
        <FilterSidebar
          isOpen={isFilterOpen}
          onClose={toggleFilterSidebar}
          activeCategory={category}
          onCategoryChange={handleCategoryChange}
        />
      </main>
      <Footer />
    </>
  );
};

export default ProductsPage;