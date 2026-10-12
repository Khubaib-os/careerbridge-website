import ContentPage from '../components/ContentPage';
const page = {
  "title": "Success Stories",
  "tagline": "The work behind meaningful progress.",
  "summary": "A space for verified case studies and client-approved outcomes.",
  "sections": [
    {
      "title": "How stories are documented",
      "body": "A useful case study explains the starting challenge, agreed work, timeline, client contribution and verifiable outcome."
    },
    {
      "title": "What we can share",
      "body": "Only information approved by the client, with personal details anonymized where appropriate."
    },
    {
      "title": "Current status",
      "body": "Verified client case studies have not yet been provided. We will not invent placements, statistics or success claims."
    },
    {
      "title": "Share your experience",
      "body": "If you have worked with CareerBridge, contact the team to discuss whether your experience can be featured with permission."
    }
  ],
  "category": "trust"
};
export default function SuccessStoriesPage(){return <ContentPage {...page}/>}
