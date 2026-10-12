import ContentPage from '../components/ContentPage';
const page = {
  "title": "For Job Seekers",
  "tagline": "Your search deserves a strategy.",
  "summary": "Practical support for professionals navigating competitive and international job markets.",
  "sections": [
    {
      "title": "Who this is for",
      "body": "Career changers, active applicants and experienced professionals who want a more structured and consistent search."
    },
    {
      "title": "Clarify your direction",
      "body": "Define target titles, locations, industries, work arrangements and eligibility before committing to an application plan."
    },
    {
      "title": "Choose your support",
      "body": "Combine job discovery, applications, resume writing, LinkedIn improvement, outreach and interview preparation as needed."
    },
    {
      "title": "Stay informed",
      "body": "Agree on deliverables, approval steps and updates so you can see what is being worked on and what needs your input."
    },
    {
      "title": "Own your decisions",
      "body": "You remain responsible for truthful information, interviews, accepting offers and choosing your career path."
    }
  ],
  "category": "solutions"
};
export default function ForJobSeekersPage(){return <ContentPage {...page}/>}
