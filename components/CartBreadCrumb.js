import Link from 'next/link';

function CartBreadcrumb({ items }) {
  return (
    <nav className="flex items-center space-x-2 text-lg w-full" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {item.href ? (
            <Link href={item.href} className="text-[#343839] text-lg flex p-2">
               <span className='flex flex-1 items-center justify-center h-10 w-10 rounded-full bg-[#343839] text-[#F3F5F7]'>{index + 1}</span>
              {item.label}
            </Link>
          ) : (
            <span className="text-lg font-medium text-[#141718] flex flex-3 p-2 border-b gap-4 w-full min-w-[250px] max-w-[312px]" aria-current="page">
              <span className='flex items-center justify-center h-10 w-10 rounded-full bg-[#141718] text-[#F3F5F7]'>{index + 1}</span>
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}

export default CartBreadcrumb;
