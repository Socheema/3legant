import Link from "next/link";

function CartBreadcrumb({ items }) {
  return (
    <nav
      className="flex items-center justify-between space-x-4 text-lg w-full overflow-x-auto "
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => (
        <div key={index} className="flex items-center min-w-max">
          {item.href ? (
            <Link
              href={item.href}
              className="text-[#343839] text-lg flex p-2 gap-2 items-center flex-1 cursor-pointer w-full  "
            >
              <span className="flex items-center justify-center h-10 w-10 rounded-full bg-[#6C7275] text-[#F3F5F7]">
                {index + 1}
              </span>
              {item.label}
            </Link>
          ) : (
            <span
              className=" flex text-lg items-center font-medium text-[#141718] flex-1 p-2 border-b gap-2 cursor-pointer w-full "
              aria-current="page"
            >
              <span className="flex items-center justify-center h-10 w-10 rounded-full bg-[#141718] text-[#F3F5F7]">
                {index + 1}
              </span>
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}

export default CartBreadcrumb;
