import ContentPage from '../components/ContentPage';
const page = {
  "title": "Get a Custom Quote",
  "tagline": "A proposal shaped around your needs.",
  "summary": "Share your requirements so the right service scope can be discussed.",
  "sections": [
    {
      "title": "Job seeker requests",
      "body": "Specify target roles, locations, current materials, priority services and expected timeline."
    },
    {
      "title": "Agency requests",
      "body": "Share operational tasks, approximate volume, systems, reporting expectations and handoff requirements."
    },
    {
      "title": "What a quote covers",
      "body": "A written quote should define deliverables, exclusions, timelines, review rounds and commercial terms."
    },
    {
      "title": "No automatic pricing",
      "body": "No rates or commitments are displayed because the business has not supplied an approved pricing model."
    }
  ],
  "category": "support"
};
export default function GetaCustomQuotePage(){return <ContentPage {...page} form="quote"/>}
