interface Props {
  title?: string;
  fontSize?: "Normal" | "Large";
  description?: string;
  alignment: "center" | "left";
  colorReverse?: boolean;
}

function Header(props: Props) {
  return (
    <>
      {props.title || props.description
        ? (
          <div
            class={`flex flex-col gap-2 ${
              props.alignment === "left" ? "text-left" : "text-center"
            }`}
          >
            {props.title &&
              (
                <h1
                  class={`text-xs font-semibold text-red-500 leading-8 lg:leading-10
                  ${
                    props.colorReverse
                      ? "text-primary-content"
                      : "text-base-content"
                  }
                  ${props.fontSize === "Normal" ? "lg:text-base" : "lg:text-2xl"}
                `}
                >
                  {props.title}
                </h1>
              )}
            {props.description &&
              (
                <p
                  class={`
                  leading-6 lg:leading-8 text-white font-semibold
                  ${
                    props.colorReverse ? "text-primary-content" : "text-neutral"
                  }
                  ${props.fontSize === "Normal" ? "text-xl lg:text-4xl" : "text-2xl lg:text-5xl"}
                `}
                >
                  {props.description}
                </p>
              )}
          </div>
        )
        : null}
    </>
  );
}

export default Header;
