
const Menus = () => {
  return (
    <div className='w-screen h-36 sm:h-10 bg-gray-800 text-white'>
      <div className='flex flex-col sm:flex sm:flex-row sm:justify-between items-center' >
        <div className='sm:ml-14'>
          <h1 className='pt-2 p-1 hover:bg-slate-600 hover:cursor-pointer'> E Сургалт сан</h1>
        </div>
        <div className='  sm:flex sm:flex-row sm:mr-10 lg:mr-24 lg:justify-around lg:w-1/2'>
          <h1 className='p-1 hover:bg-slate-600 hover:cursor-pointer'>Бидний тухай</h1>
          <h1 className='p-1 hover:bg-slate-600 hover:cursor-pointer'>Ашиглах заавар</h1>
          <h1 className='p-1 hover:bg-slate-600 hover:cursor-pointer'>Хамтран ажиллах</h1>        </div>

      </div>
    </div>
  );
}

export default Menus;

