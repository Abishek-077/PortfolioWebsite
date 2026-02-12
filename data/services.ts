export type ServiceItem = {
  name: string;
  description: string;
};

export const serviceTickerItems: ServiceItem[] = [
  {
    name: "API Integration",
    description:
      "Connect and integrate third-party services to enhance functionality and data exchange in your web app.",
  },
  {
    name: "Payment Gateway Integration",
    description: "Securely handle online payments with services like Stripe, PayPal, or custom payment solutions.",
  },
  {
    name: "WebSockets & Real-Time Applications",
    description: "Enable two-way communication for live updates, chat apps, notifications, and collaborative features.",
  },
  {
    name: "Authentication & Authorization",
    description: "Implement secure user login systems using JWT, OAuth, or SSO for access control.",
  },
  {
    name: "Page Load Speed Optimization",
    description:
      "Improving load times by optimizing images, minifying CSS/JS, and utilizing caching. Faster sites rank better on Google and improve user experience.",
  },
  {
    name: "Responsive Design",
    description:
      "Ensuring the site is mobile-friendly and adapts to all screen sizes, which is a critical factor for SEO and user satisfaction.",
  },
  {
    name: "Meta Tags Optimization",
    description:
      "Optimizing title tags, meta descriptions, and header tags with relevant keywords helps search engines understand your content and improves click-through rates.",
  },
];

export const cleanCodeTips = [
  {
    name: "Use Meaningful Variable Names",
    body: "Choose descriptive variable names that clearly indicate their purpose, improving readability and maintainability.",
  },
  {
    name: "Keep Functions Small and Focused",
    body: "A function should do one thing and do it well. Keeping functions small improves readability and makes debugging easier.",
  },
  {
    name: "Avoid Global Variables",
    body: "Use local variables or encapsulation to prevent unintended side effects and improve modularity.",
  },
  {
    name: "Use Consistent Formatting",
    body: "Follow a consistent code style, such as indentation, spacing, and naming conventions, to improve readability.",
  },
  {
    name: "Write Modular Code",
    body: "Break your code into reusable modules or components to improve maintainability and scalability.",
  },
  {
    name: "Use Comments Wisely",
    body: "Write comments only when necessary to explain complex logic; avoid redundant comments that state the obvious.",
  },
  {
    name: "Handle Errors Properly",
    body: "Use try-catch blocks and meaningful error messages to handle exceptions gracefully.",
  },
  {
    name: "Optimize Loops and Conditions",
    body: "Avoid unnecessary iterations and use efficient data structures to improve performance.",
  },
  {
    name: "Avoid Hardcoding Values",
    body: "Use constants, environment variables, or configuration files to manage configurable values.",
  },
  {
    name: "Use Version Control",
    body: "Use Git or another version control system to track changes and collaborate effectively.",
  },
];
