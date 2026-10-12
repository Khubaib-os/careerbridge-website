import ContentPage from '../components/ContentPage';
const page = {
  "title": "LinkedIn Optimization",
  "tagline": "Turn your profile into a clearer professional story.",
  "summary": "Present your strengths consistently across your resume and online presence.",
  "sections": [
    {
      "title": "Profile audit",
      "body": "Review headline, About section, experience, featured content, skills and public visibility against your target roles."
    },
    {
      "title": "Positioning",
      "body": "Define the roles, strengths and career direction that should be immediately clear to a recruiter visiting your profile."
    },
    {
      "title": "Headline and About",
      "body": "Write a focused headline and an authentic professional summary that balances searchable terms with a human voice."
    },
    {
      "title": "Experience and skills",
      "body": "Improve descriptions of responsibilities and achievements; align skill labels with work you can actually demonstrate."
    },
    {
      "title": "Visibility checklist",
      "body": "Review photo, banner, location, profile URL, contact settings and optional portfolio links with your approval."
    },
    {
      "title": "Your control",
      "body": "You review and publish changes to your own account; we do not promise ranking or recruiter responses."
    }
  ],
  "category": "services"
};
export default function LinkedInOptimizationPage(){return <ContentPage {...page}/>}
