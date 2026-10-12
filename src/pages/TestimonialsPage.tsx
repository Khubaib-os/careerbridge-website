import ContentPage from '../components/ContentPage';
const page = {
  "title": "Testimonials",
  "tagline": "Trust is earned through real experiences.",
  "summary": "Client feedback will appear here only after it is collected and approved.",
  "sections": [
    {
      "title": "Verified feedback",
      "body": "We will publish genuine comments from clients who consent to their use and attribution."
    },
    {
      "title": "Context matters",
      "body": "Where permitted, reviews can identify the type of service received and the stage of the engagement."
    },
    {
      "title": "Current status",
      "body": "No verified testimonials were supplied for this build. This page intentionally contains no fictional quotes or ratings."
    },
    {
      "title": "Your voice",
      "body": "Existing clients may contact us to share feedback or request correction or removal of their published statement."
    }
  ],
  "category": "trust"
};
export default function TestimonialsPage(){return <ContentPage {...page}/>}
