import React from 'react';

const SellBooks = () => {
  return (
    <section className="max-w-[1280px] px-5 mx-auto mt-[30px] bg-gray-100">  
      <form className="max-w-[620px] ">
        <div className="mb-5 flex items-center ">
          <label htmlFor="bookTitle" className="w-[200px] text-base font-medium text-dark-blue dark:text-white ">Book Title</label>
          <input type="text" id="bookTitle" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-5" required />
        </div>
        <div className="mb-5 flex items-center">
          <label htmlFor="isbn" className="w-[200px] text-base font-medium text-dark-blue dark:text-white">ISBN</label>
          <input type="text" id="isbn" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        <div className="mb-5 flex items-center">
          <label htmlFor="mainAuthor" className="w-[200px] text-base font-medium text-dark-blue dark:text-white">Main Author</label>
          <input type="text" id="mainAuthor" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        <div className="mb-5 flex items-center">
          <label htmlFor="description" className="w-[200px] text-base font-medium text-dark-blue dark:text-white">Description</label>
          <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
        </div>
        <div className="mb-5 flex items-center">
          <label htmlFor="publishDate" className="w-[200px] text-base font-medium text-dark-blue dark:text-white">Publish Date</label>
          <input type="date" id="publishDate" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="publishDate" />
        </div>
        <div className="mb-5 flex items-center">
          <label htmlFor="publication" className="w-[200px] text-base font-medium text-dark-blue dark:text-white">Publication</label>
          <select id="publication" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>Publication</option>
            <option value="F+W">F+W Media</option>
            <option value="Hachette">Hachette Digital</option>
            <option value="Ace">Ace Books</option>
            <option value="Acropolis">Acropolis Books</option>
            <option value="Adams">Adams Media</option>
            <option value="Addison">Addison Wesley</option>
            <option value="Adler">Adler & Adler</option>
            <option value="Aegypan">Aegypan</option>
            <option value="Aerie">Aerie</option>
            <option value="Afton">Afton Historical Society Press</option>
            <option value="Aladdin">Aladdin</option>
            <option value="Aladdin">Aladdin Paperbacks</option>
            <option value="Alaska">Alaska Northwest Books</option>
            <option value="Alba">Alba House</option>
            <option value="Albion">Albion Publishing</option>
            <option value="Other">Other</option>
            {/* Add more options */}
          </select>
        </div>
        <div className="mb-5 flex items-center">
          <label htmlFor="Condition" className="w-[200px] text-base font-medium text-dark-blue dark:text-white">Condition</label>
          <select id="Condition" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>Condition</option>
            <option>Like new</option>
            <option>Good</option>
            <option>Fair</option>
            <option>Poor</option>
          </select>
        </div>
        <div className="mb-5 flex items-center">
          <label htmlFor="Category" className="w-[200px] text-base font-medium text-dark-blue dark:text-white">Category</label>
          <select id="Category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>-Select Category-</option>
            <option>Primary&Secondary</option>
            <option>Matric</option>
            <option>Inter</option>
            <option>Graduation</option>
            <option>Mphil</option>
            <option>Phd</option>
          </select>
        </div>
        <div className="mb-5 flex items-center">
          <label htmlFor="number" className="w-[200px] text-base font-medium text-dark-blue dark:text-white">No. of Copies</label>
          <input type="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        <div className="mb-5 flex items-center">
          <label htmlFor="sellerComments" className="w-[200px] text-base font-medium text-dark-blue dark:text-white">Seller Comments</label>
          <textarea id="sellerComments" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
        </div>
        <div className="mb-5 flex items-center">
          <label htmlFor="file" className="w-[200px] text-base font-medium text-dark-blue dark:text-white">Book Image</label>
          <input type="file" id="file" name="filename" />
        </div>
        <div className="mb-5 flex items-center">
          <label htmlFor="sellPrice" className="w-[200px] text-base font-medium text-dark-blue dark:text-white">Sell Price</label>
          <input type="text" id="sellPrice" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        <div className="mb-5 flex items-center">
          <label htmlFor="referenceCode" className="w-[200px] text-base font-medium text-dark-blue dark:text-white">Reference Code</label>
          <input type="text" id="referenceCode" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        <div className="max-w-[200px] mx-auto">
          <button className="bg-purple-700 hover:bg-purple-950 rounded w-[100px] mx-auto h-[35px] text-white hover:text-light-blue text-sm font-medium">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default SellBooks;
