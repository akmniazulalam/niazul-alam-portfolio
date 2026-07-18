export type ContactData = {
  readonly section: {
    readonly eyebrow: string;
    readonly title: string;
    readonly description: string;
  };
  readonly info: {
    readonly phone: string;
    readonly email: string;
    readonly address: readonly string[];
    readonly availability: string;
  };
};

export const CONTACT_DATA: ContactData = {
  section: {
    eyebrow: "Get In Touch",
    title: "Let's Build Something Great Together",
    description:
      "Whether you're looking to discuss a project, query opportunities, or just say hello, my inbox is always open. Feel free to drop a message!",
  },
  info: {
    phone: "+8801860978120",
    email: "niazulalam097@gmail.com",
    address: [
      "60/19/G/16,",
      "Uttar Dhalpur,",
      "Jakerin Moshjid Road,",
      "Jatrabari,",
      "Dhaka-1204",
    ],
    availability: "Available for Full-time, Remote & Freelance Opportunities",
  },
} as const;
