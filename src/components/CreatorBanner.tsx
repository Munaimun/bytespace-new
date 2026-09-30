import Image from "next/image";

export default function CreatorBanner() {
  return (
    <section
      className="creator-banner"
      id="creators"
      aria-labelledby="creator-banner-title"
    >
      <Image
        className="creator-decoration creator-lime-squiggle"
        src="/assets/lime-squiggle.png"
        alt=""
        width={387}
        height={387}
      />
      <Image
        className="creator-decoration creator-lime-square -right-1! w-30!"
        src="/assets/white-square.png"
        alt=""
        width={104}
        height={154}
      />
      <Image
        className="creator-decoration creator-left-white"
        src="/assets/white-squiggle.png"
        alt=""
        width={77}
        height={93}
      />
      <Image
        className="creator-decoration creator-right-white top-40 w-50!"
        src="/assets/green-squiggle.png"
        alt=""
        width={100}
        height={110}
      />
      <Image
        className="creator-decoration creator-ring top-50"
        src="/assets/green-ring.png"
        alt=""
        width={104}
        height={96}
      />
      <Image
        className="creator-decoration creator-triangle left-2 w-30!"
        src="/assets/triangle.png"
        alt=""
        width={58}
        height={59}
      />
      <div className="creator-banner-copy">
        <h2 id="creator-banner-title">
          Unlock Your Potential as a<br />
          Creator with ByteSpace
        </h2>
        <p>
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          covering over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <a className="w-34 h-9! text-[12px]! justify-center" href="signup">
          Join as Creator
        </a>
      </div>
    </section>
  );
}
