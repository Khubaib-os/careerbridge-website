import ContentPage from '../components/ContentPage';
const page = {
  "title": "Cookie Policy",
  "tagline": "Cookie Policy.",
  "summary": "Important information about CareerBridge and your use of our website and services.",
  "sections": [
    {
      "title": "What cookies are",
      "body": "Cookies and similar technologies can store small amounts of information in a browser to support site operation, remember choices or measure usage."
    },
    {
      "title": "Essential storage",
      "body": "The website currently uses browser local storage to remember a light or dark theme preference. The final implementation should inventory all essential storage."
    },
    {
      "title": "Analytics and marketing",
      "body": "No analytics or advertising provider is specified in this draft. Do not claim such cookies are used unless they are actually installed and disclosed."
    },
    {
      "title": "Third-party content",
      "body": "Embedded services, videos, maps, booking widgets or external assets may introduce third-party requests or storage; audit integrations before launch."
    },
    {
      "title": "Consent controls",
      "body": "Where required, obtain valid consent before nonessential tracking, provide a genuine reject option and allow users to change preferences."
    },
    {
      "title": "Managing cookies",
      "body": "Visitors can use browser settings to view or delete stored data. Blocking essential technologies may affect site behavior."
    },
    {
      "title": "Retention and cookie inventory",
      "body": "Publish the actual cookie names, providers, purposes and expiry periods after technical review. Do not invent a cookie table."
    },
    {
      "title": "Updates and contact",
      "body": "Add the business legal identity, effective date, contact email and policy update procedure before publication."
    }
  ],
  "category": "legal"
};
export default function CookiePolicyPage(){return <ContentPage {...page} legal/>}
