interface NavLink {
  title: string;
  href: string;
}

export interface NavSection {
  title: string;
  links: NavLink[];
}

const VERSIONS = ["1.0.0"].reverse();

const CHANGELOG_NAV_SECTIONS: NavSection[] = [
  {
    title: "Changelog",
    links: VERSIONS.map(version => ({
      title: `v${version}`,
      href: `/docs/changelog/${version.replaceAll(".", "-")}`,
    })),
  },
];

export const NAV_SECTIONS: NavSection[] = [
  {
    title: "Introduction",
    links: [
      {
        title: "Getting started",
        href: "/docs/introduction/getting-started",
      },
      {
        title: "Learn the basics",
        href: "/docs/introduction/learn-the-basics",
      },
    ],
  },
  {
    title: "Styles",
    links: [
      {
        title: "Style props",
        href: "/docs/styles/style-props",
      },
      {
        title: "The sx prop",
        href: "/docs/styles/sx-prop",
      },
      {
        title: "Responsive styles",
        href: "/docs/styles/responsive-styles",
      },
      {
        title: "Global styles",
        href: "/docs/styles/global-styles",
      },
      {
        title: "Hope factory",
        href: "/docs/styles/hope-factory",
      },
    ],
  },
  {
    title: "Theming",
    links: [
      {
        title: "Default theme",
        href: "/docs/theming/default-theme",
      },
      {
        title: "Customize theme",
        href: "/docs/theming/customize-theme",
      },
      {
        title: "Style config API",
        href: "/docs/theming/style-config-api",
      },
      {
        title: "CSS variables",
        href: "/docs/theming/css-variables",
      },
      {
        title: "Color mode",
        href: "/docs/theming/color-mode",
      },
    ],
  },
  {
    title: "Guides",
    links: [
      {
        title: "Custom components",
        href: "/docs/guides/custom-components",
      },
      {
        title: "Usage with Solid Start",
        href: "/docs/guides/usage-with-solid-start",
      },
    ],
  },
  {
    title: "Layout",
    links: [
      {
        title: "AspectRatio",
        href: "/docs/components/aspect-ratio",
      },
      {
        title: "Box",
        href: "/docs/components/box",
      },
      {
        title: "Center",
        href: "/docs/components/center",
      },
      {
        title: "Container",
        href: "/docs/components/container",
      },
      {
        title: "Flex",
        href: "/docs/components/flex",
      },
      {
        title: "Grid",
        href: "/docs/components/grid",
      },
      {
        title: "SimpleGrid",
        href: "/docs/components/simple-grid",
      },
      {
        title: "Stack",
        href: "/docs/components/stack",
      },
    ],
  },
  {
    title: "Typography",
    links: [
      {
        title: "Heading",
        href: "/docs/components/heading",
      },
      {
        title: "Text",
        href: "/docs/components/text",
      },
    ],
  },
  {
    title: "Buttons",
    links: [
      {
        title: "Button",
        href: "/docs/components/button",
      },
      {
        title: "IconButton",
        href: "/docs/components/icon-button",
      },
      {
        title: "CloseButton",
        href: "/docs/components/close-button",
      },
    ],
  },
  /*{
    title: "Data entry",
    links: [
      {
        title: "",
        href: "/docs/components/",
      },
    ],
  },
  {
    title: "Data display",
    links: [
      {
        title: "",
        href: "/docs/components/",
      },
    ],
  },
  {
    title: "Feedback",
    links: [
      {
        title: "",
        href: "/docs/components/",
      },
    ],
  },
  {
    title: "Navigation",
    links: [
      {
        title: "",
        href: "/docs/components/",
      },
    ],
  },
  {
    title: "Overlays",
    links: [
      {
        title: "",
        href: "/docs/components/",
      },
    ],
  },*/
  //...CHANGELOG_NAV_SECTIONS,
];
