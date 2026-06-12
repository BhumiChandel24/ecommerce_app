import React , { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products , search , showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = React.useState(false);
  const [filterProducts, setFilterProducts] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  const [subCategory, setSubcategory] = React.useState([]);
  const [sortType, setSortType] = React.useState('relavent');


  const toggleCategory = (e) => {
    if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item => item !== e.target.value));
    }
    else{
      setCategory(prev => [...prev, e.target.value]);
    }
  }

  const toggleSubcategory = (e) => {
    if(subCategory.includes(e.target.value)){
      setSubcategory(prev=> prev.filter(item => item !== e.target.value));  
    }
    else{
      setSubcategory(prev => [...prev, e.target.value]);
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy)
  }

  const sortProduct = (e) => {
    let fpCopy = filterProducts.slice();
    
    switch(sortType){

      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  }


  useEffect(() => {
    applyFilter();  
  },[category, subCategory , search , showSearch, products])


  useEffect(()=>{
    sortProduct();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* filter options */}

      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt=""/>
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='text-sm font-medium mb-3'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox"  className='w-3' value={'Men'} onChange={toggleCategory}/>Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox"  className='w-3' value={'Women'} onChange={toggleCategory}/>Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox"  className='w-3' value={'Kids'} onChange={toggleCategory}/>Kids
            </p>
          </div>
        </div>

        {/**  Subcategory filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='text-sm font-medium mb-3'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox"  className='w-3' value={'Topwear'}  onChange={toggleSubcategory}/>Topwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox"  className='w-3' value={'Bottomwear'} onChange={toggleSubcategory}/>Bottomwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox"  className='w-3' value={'Winterwear'} onChange={toggleSubcategory}/>Winterwear
            </p>
          </div>
        </div>
      </div>


      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>
          {/* Product Sort */}
          <select onChange={(e) => setSortType(e.target.value)}  className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Price - Low to High</option>
            <option value="high-low">Sort by: Price - High to Low</option>
          </select>

        </div>

        {/* Map Products  */}

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {
          filterProducts.map((item , index) => (
            <ProductItem key={index} name={item.name} id={item._id} image={item.image} price={item.price}/>
          ))
        }

        </div>
      </div>

    </div>
  )
}

export default Collection
