import ContentPage from '../components/ContentPage';
const page = {
  "title": "All Services",
  "tagline": "Choose the right support for your next move.",
  "summary": "A connected range of career and recruiting services, tailored to your goals.",
  "sections": [
    {
      "title": "For professionals",
      "body": "From opportunity research and applications to interviews, choose targeted support or a coordinated job-search workflow."
    },
    {
      "title": "For agency partners",
      "body": "Flexible research, outreach and recruiting operations can be scoped to complement your existing delivery team."
    },
    {
      "title": "How to choose",
      "body": "Start with your biggest bottleneck: identifying roles, improving positioning, managing outreach or preparing for conversations."
    },
    {
      "title": "What happens next",
      "body": "We discuss your needs, clarify deliverables, agree on responsibilities and establish a practical communication rhythm."
    }
  ],
  "category": "services"
};
export default function AllServicesPage(){return <ContentPage {...page}/>}
