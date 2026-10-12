import ContentPage from '../components/ContentPage';
const page = {
  "title": "Book a Consultation",
  "tagline": "Start with a focused conversation.",
  "summary": "Tell us what you need so we can prepare a useful discovery call.",
  "sections": [
    {
      "title": "What we discuss",
      "body": "Your goals, target roles or recruiting requirements, timelines, constraints and the type of help you are considering."
    },
    {
      "title": "Before the call",
      "body": "Bring a current resume or role brief where appropriate, and prepare questions about deliverables and responsibilities."
    },
    {
      "title": "After the call",
      "body": "If there is a fit, the next step is a written proposal or agreed scope—not an automatic commitment."
    },
    {
      "title": "Booking availability",
      "body": "A live scheduling provider has not been connected yet. Use the inquiry form to request a consultation."
    }
  ],
  "category": "support"
};
export default function BookaConsultationPage(){return <ContentPage {...page} form="consultation"/>}
