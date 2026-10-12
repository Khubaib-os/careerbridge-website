import ContentPage from '../components/ContentPage';
const page = {
  "title": "FAQs",
  "tagline": "Clear answers before you begin.",
  "summary": "The essentials about our services, collaboration and expectations.",
  "sections": [
    {
      "title": "What is reverse recruiting?",
      "body": "Candidate-side support for job research, applications and related activities. It is not the same as an employer hiring agency."
    },
    {
      "title": "Do you guarantee interviews or offers?",
      "body": "No. Employers independently decide whom to interview or hire."
    },
    {
      "title": "Can I select only one service?",
      "body": "A custom scope can focus on one need or combine several services, subject to agreement."
    },
    {
      "title": "Do you work with agencies?",
      "body": "Yes. We can discuss white-label and recruiting operations support with agency partners."
    },
    {
      "title": "How do we communicate?",
      "body": "The communication channel, cadence and deliverables should be agreed during onboarding."
    },
    {
      "title": "Can you apply without my approval?",
      "body": "Approval and authorization requirements must be documented in the service scope."
    },
    {
      "title": "How is my personal data handled?",
      "body": "Please review the Privacy Policy. Specific storage, retention and vendor details must be confirmed before launch."
    },
    {
      "title": "Is pricing listed online?",
      "body": "No. A custom quote depends on the scope and requested services."
    }
  ],
  "category": "support"
};
export default function FAQsPage(){return <ContentPage {...page}/>}
