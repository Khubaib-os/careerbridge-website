import ContentPage from '../components/ContentPage';
const page = {
  "title": "Job Search & Applications",
  "tagline": "More relevant roles. Better-organized applications.",
  "summary": "Replace scattered browsing with a structured opportunity pipeline.",
  "sections": [
    {
      "title": "Opportunity discovery",
      "body": "Search agreed industries, employers and job boards using role-specific keywords, location preferences and eligibility requirements."
    },
    {
      "title": "Qualification and fit",
      "body": "Review responsibilities, seniority, work arrangement, employer requirements and application deadlines before prioritizing a role."
    },
    {
      "title": "Application preparation",
      "body": "Organize the required documents, tailor relevant materials where included and check completeness before submission."
    },
    {
      "title": "Application tracking",
      "body": "Maintain a record of job title, employer, link, submission date, status and next action to reduce duplicate applications."
    },
    {
      "title": "Candidate approval",
      "body": "Agree in advance whether applications require your review and what information can be submitted on your behalf."
    },
    {
      "title": "Responsible execution",
      "body": "Follow employer and platform rules; avoid fabricated qualifications, misleading information or unauthorized automation."
    }
  ],
  "category": "services"
};
export default function JobSearchApplicationsPage(){return <ContentPage {...page}/>}
