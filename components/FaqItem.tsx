import styles from "../styles/about_pages/FaqItem.module.css";

interface FaqItemProps {
  question: string;
  answer: string;
}

export const faqs: FaqItemProps[] = [
  {
    question: "What is a zine?",
    answer:
      "A fanzine, or zine for short, is a term used to describe an unofficial, fanmade publication, which can be both digital or physical. Zines often contain a mix of artworks, writing, and merchandise for a specific fandom.",
  },
  {
    question: "What is the theme of the zine?",
    answer:
      "This fanzine will be focusing on Chinen Miya, a character from the show Sk8 the Infinity, living his life when he’s not skating.",
  },
  {
    question: "Will minors be allowed to contribute?",
    answer:
      "Since this is a completely SFW zine, minors above the age of 13 will be allowed to contribute.",
  },
  {
    question: "Will this zine be digital or physical?",
    answer: "This zine is digital-only.",
  },
  {
    question: "Will this be for-profit, for-charity, or free?",
    answer:
      "This zine will be able to be viewed for free on a website and will also offer consumers an option for a PDF download. How many contributors will this zine have? This will depend on the Interest Check results.",
  },
  {
    question: "How will contributors be compensated?",
    answer:
      "Since this is a non-profit digital-only zine, there will be no monetary compensation involved. However, the zine’s PDF and all digital merchandise will be sent to all contributors via email.",
  },
  {
    question:
      "Am I allowed to post, print, and/or sell my work once the project ends?",
    answer:
      "Contributors will have all the rights to their works and may do as they please with them once the project ends.",
  },
];

export default function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <div className={styles.container}>
      <h4 className={styles.question}>{question}</h4>
      <p
        className={styles.answer}
        dangerouslySetInnerHTML={{ __html: answer }}
      ></p>
    </div>
  );
}
