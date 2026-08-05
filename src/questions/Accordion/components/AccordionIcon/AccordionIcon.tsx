interface Props {
  rotate?: boolean;
}

const AccordionIcon = ({ rotate }: Props) => (
  <span
    className={`inline-block h-2 w-2 border-b-2 border-r-2 border-gray-500 transition-transform duration-200 ${
      rotate ? "rotate-[225deg]" : "rotate-45"
    }`}
  />
);

export default AccordionIcon;
