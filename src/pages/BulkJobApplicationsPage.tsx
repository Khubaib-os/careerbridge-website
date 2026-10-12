import ContentPage from '../components/ContentPage';
const page = {
  "title": "Bulk Job Applications",
  "tagline": "High-volume workflows, without losing judgment.",
  "summary": "Organize larger application pipelines around relevance, accuracy and accountability.",
  "sections": [
    {
      "title": "Define the campaign",
      "body": "Agree on target roles, eligibility, regions, volume expectations, timelines and approval rules."
    },
    {
      "title": "Build a qualified list",
      "body": "Filter opportunities for genuine fit before adding them to the application queue."
    },
    {
      "title": "Prepare reusable assets",
      "body": "Maintain accurate candidate details and approved documents while tailoring where the role requires it."
    },
    {
      "title": "Submission controls",
      "body": "Prevent duplicates, record submission evidence and respect platform limitations and employer instructions."
    },
    {
      "title": "Track progress",
      "body": "Provide status categories and exceptions so candidates or agency managers can review the work."
    },
    {
      "title": "Quality over raw numbers",
      "body": "High application counts do not guarantee interviews; responsible execution is more valuable than inflated metrics."
    }
  ],
  "category": "solutions"
};
export default function BulkJobApplicationsPage(){return <ContentPage {...page}/>}
