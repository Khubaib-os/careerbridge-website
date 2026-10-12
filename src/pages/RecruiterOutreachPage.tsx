import ContentPage from '../components/ContentPage';
const page = {
  "title": "Recruiter Outreach",
  "tagline": "Start relevant conversations, not mass messages.",
  "summary": "Research-led, respectful outreach that supports your career goals.",
  "sections": [
    {
      "title": "Audience mapping",
      "body": "Identify recruiters, talent partners and relevant hiring contacts aligned with your industries, functions and locations."
    },
    {
      "title": "Message strategy",
      "body": "Build concise introductions grounded in your actual background and a clear reason for reaching out."
    },
    {
      "title": "Personalization",
      "body": "Reference the role, company or professional connection where appropriate rather than sending generic templates."
    },
    {
      "title": "Follow-up rhythm",
      "body": "Use a reasonable cadence, honor opt-outs and avoid aggressive or repetitive contact."
    },
    {
      "title": "Response management",
      "body": "Track replies, requested information and follow-up actions without overstating relationships or employer interest."
    },
    {
      "title": "Professional standards",
      "body": "Comply with applicable platform terms, privacy expectations and outreach laws; no response rate is guaranteed."
    }
  ],
  "category": "services"
};
export default function RecruiterOutreachPage(){return <ContentPage {...page}/>}
