import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Header from "$store/components/ui/SectionHeader.tsx";

export interface Props {
  title?: string;
  description?: string;
  benefits?: Array<{
    label: string;
    icon: AvailableIcons;
    description: string;
  }>;
  layout?: {
    variation?: "Simple" | "With border" | "Color reverse";
    headerAlignment?: "center" | "left";
  };
}

export default function Benefits(
  props: Props,
) {
  const {
    title = "",
    description = "",
    benefits = [{
      icon: "Truck",
      label: "Entrega em todo Brasil",
      description: "Consulte o prazo no fechamento da compra.",
    }, {
      icon: "Discount",
      label: "15% na primeira compra",
      description: "Aplicado direto na sacola de compras.",
    }, {
      icon: "ArrowsPointingOut",
      label: "Devolução grátis",
      description: "Veja as condições para devolver seu produto.",
    }],
    layout,
  } = props;

  const listOfBenefits = benefits.map((benefit, index) => {
    const showDivider = index < benefits.length - 1;
    const reverse = layout?.variation === "Color reverse";
    const benefitLayout = !layout?.variation || layout?.variation === "Simple"
      ? "tiled"
      : "piledup";

    return (
      <div
        class={`${
          reverse ? "bg-neutral-300 text-neutral-900 p-4 lg:px-8 lg:py-4" : ""
        } flex gap-4 flex-col items-center text-center ${
          showDivider && benefitLayout !== "tiled"
            ? "pb-4 lg:pr-8 lg:border-r lg:border-b-0"
            : ""
        } ${showDivider && !reverse ? "lg:pb-0" : ""}`}
      >
        <div
          class={`flex-none ${
            benefitLayout === "tiled"
              ? "rounded-full p-[6px] bg-black border-[5px] border-neutral-600"
              : ""
          }`}
        >
          <Icon
            id={benefit.icon}
            class={reverse ? "text-neutral-900" : "text-white"}
            width={36}
            height={36}
            strokeWidth={0.01}
            fill="currentColor"
            stroke="currentColor"
          />
        </div>
        <div class="flex-auto flex flex-col gap-1 lg:gap-2">
          <div
            class={`text-base lg:text-xl leading-7 ${
              reverse ? "text-neutral-900" : "text-white"
            }`}
          >
            {benefit.label}
          </div>
          <p
            class={`text-sm leading-5 ${
              reverse ? "text-neutral-900" : "text-neutral-400"
            } ${benefitLayout == "piledup" ? "hidden lg:block" : ""}`}
          >
            {benefit.description}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div class="bg-neutral-900">
      {!layout?.variation || layout?.variation === "Simple"
        ? (
          <div class="w-full container px-4 py-12 flex flex-col gap-8 lg:gap-10 lg:py-10 lg:px-0">
            <Header
              title={title}
              description={description}
              alignment={layout?.headerAlignment || "center"}
            />
            <div class="w-full flex justify-center">
              <div class="flex flex-col gap-4 lg:gap-8 w-full lg:grid grid-flow-col auto-cols-fr">
                {listOfBenefits}
              </div>
            </div>
          </div>
        )
        : ""}
      {layout?.variation === "With border" && (
        <div class="w-full container flex flex-col px-4 py-8 gap-8 lg:gap-10 lg:py-10 lg:px-0">
          <Header
            title={title}
            description={description}
            alignment={layout?.headerAlignment || "center"}
          />
          <div class="w-full flex justify-center">
            <div class="grid grid-cols-2 gap-4 w-full py-6 px-4 border border-base-300 lg:gap-8 lg:grid-flow-col lg:auto-cols-fr lg:p-10">
              {listOfBenefits}
            </div>
          </div>
        </div>
      )}
      {layout?.variation === "Color reverse" && (
        <div class="w-full container flex flex-col px-4 py-8 gap-8 lg:gap-10 lg:py-10 lg:px-0">
          <Header
            title={title}
            description={description}
            alignment={layout?.headerAlignment || "center"}
          />
          <div class="w-full flex justify-center">
            <div class="grid grid-cols-2 gap-4 w-full lg:gap-8 lg:grid-flow-col lg:auto-cols-fr">
              {listOfBenefits}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
