import type { FC } from "react";
import Accordion from "./components/Accordion";

const DEFAULT_ENTRIES = [
  {
    title: "HTML",
    content:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    title: "CSS",
    content:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
  },
  {
    title: "JavaScript",
    content:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
];

type Entrys = {
  title: string;
  content: string;
};

interface Props {
  entrys?: Entrys[];
}

const AccordionPage: FC<Props> = ({ entrys = DEFAULT_ENTRIES }) => (
  <div className="w-200 mx-auto">
    {entrys.map((entry) => (
      <Accordion
        key={entry.title}
        title={entry.title}
        content={entry.content}
      />
    ))}
  </div>
);

export default AccordionPage;
