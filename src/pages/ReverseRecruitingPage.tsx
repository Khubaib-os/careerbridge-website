import ContentPage from '../components/ContentPage';
const page = {
  "title": "Reverse Recruiting",
  "tagline": "A dedicated approach to your job search.",
  "summary": "Spend more energy on the opportunities that matter while we support the research and execution.",
  "sections": [
    {
      "title": "What reverse recruiting involves",
      "body": "A candidate-side service that supports opportunity research, targeted applications, document tailoring and appropriate recruiter outreach."
    },
    {
      "title": "Define the target",
      "body": "We begin with your experience, preferred job titles, industries, locations, work authorization and non-negotiable requirements."
    },
    {
      "title": "Build the search plan",
      "body": "Agree on search criteria, application priorities, quality standards, communications and the level of support included."
    },
    {
      "title": "Execute with visibility",
      "body": "Relevant roles are reviewed, applications are prepared within the agreed scope, and progress can be tracked in a shared workflow."
    },
    {
      "title": "Refine over time",
      "body": "Feedback and responses help adjust keywords, role targeting and positioning. Employers retain all hiring decisions."
    },
    {
      "title": "What to expect",
      "body": "Clear deliverables and regular updates—not guaranteed interviews, offers or employment."
    }
  ],
  "category": "services"
};
export default function ReverseRecruitingPage(){return <ContentPage {...page}/>}
