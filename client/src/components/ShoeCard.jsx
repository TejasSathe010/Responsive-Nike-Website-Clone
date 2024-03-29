const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    const handleClick = () => {
      if (bigShoeImg !== imgURL.bigShoe) {
        changeBigShoeImage(imgURL.bigShoe)
      }
    }
  
    return <>
      <div 
        onClick={handleClick}
        className={`border-2 rounded-xl z-40
            ${bigShoeImg === imgURL.bigShoe ?
            'border-coral-blue'
            : 'border-transparent'
            } cursor-pointer max-sm:flex-1 
            `}
      >
        <div className="flex justify-center items-center bg-gradient-to-b from-red-100 to-teal-100 bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
          <img src={imgURL.thumbnail} alt="shoe" width={127} height={103} className="object-contain" fill="true" />
        </div>
      </div>
    </>
  }
  
  export default ShoeCard;