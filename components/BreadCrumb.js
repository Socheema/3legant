import Link from 'next/link';

function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center space-x-2 text-sm" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <span className="text-gray-400 mx-2">/</span>}
          {item.href ? (
            <Link href={item.href} className="text-gray-600 hover:text-gray-800 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-800 font-medium" aria-current="page">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}

export default Breadcrumb;
