import ContentPage from '../components/ContentPage';
const page = {
  "title": "Careers",
  "tagline": "Build your career with CareerBridge.",
  "summary": "Explore future opportunities to contribute to career and recruiting support.",
  "sections": [
    {
      "title": "Who may fit",
      "body": "People interested in research, candidate experience, recruiting operations, communication and organized delivery."
    },
    {
      "title": "How we work",
      "body": "Thoughtful collaboration, accurate information handling, professional communication and respect for candidates."
    },
    {
      "title": "Open positions",
      "body": "No verified vacancies have been supplied. Please do not interpret this page as a current job advertisement."
    },
    {
      "title": "Future interest",
      "body": "Use the contact page to ask about opportunities; sending an inquiry does not constitute a formal application."
    }
  ],
  "category": "trust"
};
export default function CareersPage(){return <ContentPage {...page}/>}
