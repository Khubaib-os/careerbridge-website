import ContentPage from '../components/ContentPage';
const page = {
  "title": "Resume & Cover Letter",
  "tagline": "Make your experience easier to understand.",
  "summary": "Clear, credible career documents designed for the roles you actually want.",
  "sections": [
    {
      "title": "Resume discovery",
      "body": "Review your current resume, target roles, career timeline, measurable achievements and the experience most relevant to employers."
    },
    {
      "title": "Structure and clarity",
      "body": "Use consistent headings, readable formatting and concise bullet points that communicate responsibility, action and impact."
    },
    {
      "title": "Role alignment",
      "body": "Reflect relevant terminology from a genuine job description without keyword stuffing or inventing skills."
    },
    {
      "title": "Cover letters",
      "body": "Create a focused narrative connecting your background, motivation and relevant evidence to a specific opportunity."
    },
    {
      "title": "Review and handoff",
      "body": "Confirm factual accuracy, revise with your feedback and provide the agreed editable and shareable formats."
    },
    {
      "title": "Important boundary",
      "body": "No resume format can guarantee an ATS result, interview invitation or job offer."
    }
  ],
  "category": "services"
};
export default function ResumeCoverLetterPage(){return <ContentPage {...page}/>}
