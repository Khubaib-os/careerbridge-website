import ContentPage from '../components/ContentPage';
const page = {
  "title": "Interview Preparation",
  "tagline": "Walk into interviews with a clearer plan.",
  "summary": "Practice your stories, strengthen your answers and prepare thoughtful questions.",
  "sections": [
    {
      "title": "Interview discovery",
      "body": "Understand the role, interview format, organization, required competencies and areas you find most challenging."
    },
    {
      "title": "Behavioral storytelling",
      "body": "Use a situation–task–action–result structure to explain relevant experiences with specific and honest examples."
    },
    {
      "title": "Role-specific practice",
      "body": "Prepare for technical, functional or case-based topics appropriate to the position and your experience."
    },
    {
      "title": "Mock conversations",
      "body": "Rehearse introductions, follow-up questions, difficult topics and concise answers under realistic conditions."
    },
    {
      "title": "Feedback and improvement",
      "body": "Review clarity, relevance, confidence and answer structure, then agree on a practical preparation checklist."
    },
    {
      "title": "After the interview",
      "body": "Plan professional thank-you notes, follow-ups and personal reflection without assuming an outcome."
    }
  ],
  "category": "services"
};
export default function InterviewPreparationPage(){return <ContentPage {...page}/>}
