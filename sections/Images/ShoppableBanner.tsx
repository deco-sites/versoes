import { Picture, Source } from "apps/website/components/Picture.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  image: {
    mobile: ImageWidget;
    desktop?: ImageWidget;
    altText: string;
  };

  pins: Pin[];

  text?: string;
  title?: string;
  link?: {
    text: string;
    href: string;
  };
}

export interface Pin {
  mobile: {
    x: number;
    y: number;
  };
  desktop?: {
    x: number;
    y: number;
  };
  link: string;
  label: string;
}

const DEFAULT_PROPS: Props = {
  link: {
    href: "#",
    text: "Ver agora",
  },
  pins: [],
  image: {
    mobile:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/cac2dc1c-48ac-4274-ad42-4016b0bbe947",
    altText: "Fashion",
  },
};

export default function ShoppableBanner(props: Props) {
  const { link, text, title, image, pins } = { ...DEFAULT_PROPS, ...props };

  return (
    <div class="bg-neutral-900">
      <div class="container bg-neutral-900 px-4 md:px-0">
        <div class="flex relative rounded h-[300px] lg:h-[500px]">
          <div class="absolute py-20 top-0 left-0 h-full max-w-[50%] lg:max-w-xl">
            <div class="flex flex-col justify-evenly h-full">
              <h2 class="text-neutral-50 text-xs lg:text-base leading-tight font-light">
                {title}
              </h2>
              <p class="text-xl lg:text-5xl text-neutral-50 font-semibold tracking-widest leading-relaxed">
                {text}
              </p>
              <div class="card-actions justify-start">
                <a
                  class="btn bg-red-500 text-white uppercase border-none"
                  href={link?.href}
                >
                  {link?.text}
                </a>
              </div>
            </div>
          </div>

          <figure class="relative w-full h-full">
            <Picture>
              <Source
                media="(max-width: 767px)"
                src={image?.mobile}
                width={150}
                height={150}
              />
              <Source
                media="(min-width: 768px)"
                src={image?.desktop ? image?.desktop : image?.mobile}
                width={384}
                height={227}
              />
              <img
                class="w-full h-full object-scale-down object-right-top"
                sizes="(max-width: 640px) 100vw, 30vw"
                src={image?.mobile}
                alt={image?.altText}
                decoding="async"
                loading="lazy"
              />
            </Picture>
            {pins.map(({ mobile, desktop, link, label }) => (
              <>
                <a
                  href={link}
                  class="absolute w-min btn border-red-500 bg-transparent rounded-full hover:rounded text-red-500 no-animation md:scale-[70%] md:-translate-x-[15%] sm:hidden"
                  style={{
                    left: `${mobile.x}%`,
                    top: `${mobile.y}%`,
                  }}
                >
                  <span>{label}</span>
                </a>
                <a
                  href={link}
                  class="absolute w-min btn border-red-500 bg-transparent rounded-full hover:rounded text-red-500 no-animation md:scale-[70%] md:-translate-x-[15%] hidden sm:inline-flex"
                  style={{
                    left: `${desktop?.x ?? mobile.x}%`,
                    top: `${desktop?.y ?? mobile.y}%`,
                  }}
                >
                  <span>{label}</span>
                </a>
              </>
            ))}
          </figure>
        </div>
      </div>
    </div>
  );
}
