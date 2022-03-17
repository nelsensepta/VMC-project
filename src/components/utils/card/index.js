import React from "react";
import Image from "next/image";

export function BigCard({ url, alt }) {
  return (
    <div className="col-span-1">
      <Image
        src={url}
        width={320}
        height={406}
        alt={alt}
        placeholder="blur"
        blurDataURL={url}
      />
    </div>
  );
}

export function MediumCard({ url, alt }) {
  return (
    <div className="col-span-1">
      <Image
        src={url}
        width={320}
        height={299}
        alt={alt}
        placeholder="blur"
        blurDataURL={url}
      />
    </div>
  );
}

export function SmallCard({ url, alt }) {
  return (
    <div className="col-span-1 row-span-1">
      <Image
        src={url}
        width={320}
        height={193}
        alt={alt}
        placeholder="blur"
        blurDataURL={url}
      />
    </div>
  );
}

// export function BigCard({ url }) {
//   return <Image src={url} width={400} height={600} alt="smallimage" />;
// }

// export function MediumCard({ url }) {
//   return <Image src={url} width={400} height={500} alt="mediumimage" />;
// }

// export function SmallCard({ url }) {
//   return <Image src={url} width={400} height={300} alt="bigimage" />;
// }
