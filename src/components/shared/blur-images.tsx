import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";

const images = Array.from({ length: 5 }, (_, i) => {
  return `/img${i + 1}.jpg`;
});

export function BlurImages() {
  return (
    <section id="photos" className="">
      <div className="columns-1 gap-4 sm:columns-3">
        {images.map((imageUrl, idx) => (
          <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
            <Image
              className="mb-4 size-full rounded-lg object-contain"
              src={imageUrl}
              alt={`Random stock image ${idx + 1}`}
              height={500}
              width={400}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
