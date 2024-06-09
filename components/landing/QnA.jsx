import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordionData = [
  {
    question: "What is Virtual Try-On?",
    answer:
      "Virtual Try-On allows you to see how clothes will look on a model without needing to try them on physically.<br />We achieve this by using an advanced AI model that we’ve trained with high-quality images.<br />This AI generates realistic images of clothes on models, saving you the hassle and cost of traditional photoshoots.",
  },
  {
    question: "How does it work?",
    answer:
      "You simply need to upload pictures of the clothes, and we take care of the rest!<br />You can select the fashion model and the body position you desire.<br />Then, we provide the image of the model wearing the clothes you uploaded.",
  },
  {
    question: "Benefits",
    answer:
      "Virtual Try-On saves time and money!<br />Traditional photoshoots require finding a location, hiring a model and photographer, and organizing the shoot.<br />This process is long and costly.<br />With Virtual Try-On, you can significantly reduce your expenses and save a lot of time.",
  },
  {
    question: "Technical Requirements",
    answer:
      "There are no technical requirements.<br />Anyone can easily use our service!",
  },
  {
    question: "Privacy and Security",
    answer:
      "Your data is protected with us!<br />We use secure servers and do not use the data you generate. It belongs to you alone.",
  },
  {
    question: "Refund Policy",
    answer:
      "We can refund unused credits upon request.<br />However, due to the cost of generating the images, we cannot refund used credits.",
  },
];

export function QnA() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {accordionData.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>
            <div dangerouslySetInnerHTML={{ __html: item.answer }} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
