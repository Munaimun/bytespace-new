import Image from "next/image";
import Link from "next/link";

type CourseCardProps = {
  title: string;
  image: string;
  creator: string;
  price: string;
};

const avatars = ["#b98569", "#3b302e", "#d7a67c", "#5d7791", "#1c2730"];

export default function CourseCard({
  title,
  image,
  creator,
  price,
}: CourseCardProps) {
  return (
    <Link
      className="group block rounded-[14px] border border-[#dfe1e5] bg-white p-2.5 transition-shadow hover:shadow-[0_10px_30px_rgba(18,31,64,0.12)]"
      href={`/courses/${title.toLowerCase().replaceAll(" ", "-")}`}
    >
      <div className="relative aspect-[1.85/1] overflow-hidden rounded-[9px] bg-[#e9ebef]">
        <Image
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          src={image}
          alt=""
          fill
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 30vw"
          unoptimized
        />
        <div className="absolute inset-x-2 bottom-2 flex justify-between gap-1 text-[8px] text-[#4d5057]">
          <span className="rounded-full bg-white/75 px-2 py-1 backdrop-blur-sm">
            17 Lessons
          </span>
          <span className="rounded-full bg-white/75 px-2 py-1 backdrop-blur-sm">
            2 hours 16 mins
          </span>
          <span className="rounded-full bg-white/75 px-2 py-1 backdrop-blur-sm">
            59 Comments
          </span>
        </div>
      </div>
      <div className="px-0.5 pt-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="truncate text-[13px] font-bold leading-[1.1] text-[#111421]">
            {title}
          </h3>
          <span className="shrink-0 text-[11px] text-[#727780]">
            4.5 <span className="text-[#c9cbd0]">★</span>
          </span>
        </div>
        <p className="mt-0.5 text-[8px]">
          by <span className="text-[10px] text-[#1556e8]"> {creator}</span>
        </p>
        <div className="mt-2 flex items-center justify-between gap-2">
          <span className="rounded-full bg-[#f4f5f6] px-2 py-1 text-[8px] text-[#555861]">
            ▥ &nbsp; Beginner
          </span>
          <div className="flex items-center">
            {avatars.map((color, index) => (
              <i
                className="-ml-1.5 block h-5 w-5 rounded-full border border-white"
                key={color}
                style={{
                  backgroundColor: color,
                  zIndex: avatars.length - index,
                }}
              />
            ))}
            <b className="-ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#baff00] text-[7px] font-normal text-[#304500]">
              26+
            </b>
          </div>
        </div>
        <p className="mt-2 text-[12px] font-bold text-[#1556e8]">
          {price}
          <span className="ml-0.5 text-[8px] font-normal text-[#8b8f97]">
            /lifetime
          </span>
        </p>
      </div>
    </Link>
  );
}
