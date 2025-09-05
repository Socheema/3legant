import React from "react";
import Image from "next/image";

function ShopNow({text, fontSize = "xs"}) {
  return (
    <div className="flex items-center gap-1 py-1 border-b">
      <p className={`text-${fontSize}`}>{text}</p>
      <Image src="/black-arrow-right.png" alt="arrow" width={16} height={16} />
    </div>
  );
}

export default ShopNow;

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// function LinkButton({ text, fontSize = "lg", href = "#", color = "neutral-07" }) {
//   return (
//     <Link href={href}>
//       <div className="flex items-center gap-1 py-1 border-b">
//         <p className={`text-${fontSize} text-${color}`}>{text}</p>
//         <Image src="/black-arrow-right.png" alt="arrow" width={16} height={16} />
//       </div>
//     </Link>
//   );
// }

// export default LinkButton;
