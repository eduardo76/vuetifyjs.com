import components from '@/data/components'
import newIn from '@/data/newIn'

export default () => ({
  appDrawer: null,
  appFooter: true,
  appSnackbar: {
    color: 'success',
    href: false,
    msg: '',
    text: 'Close',
    to: false,
    timeout: 6000
  },
  appToolbar: null,
  components,
  currentVersion: null,
  isFullscreen: false,
  loadedLangs: [],
  newIn,
  releases: [],
  stateless: false,
  tablesOfContents: {
    Components: [
      {
        text: 'Generic.Pages.introduction',
        href: 'introduction'
      },
      {
        text: 'Generic.Pages.usage',
        href: 'usage'
      },
      {
        text: 'Generic.Pages.api',
        href: 'api'
      },
      {
        text: 'Generic.Pages.supplemental',
        href: 'supplemental'
      },
      {
        text: 'Generic.Pages.examples',
        href: 'examples'
      }
    ],
    GettingStarted: {
      QuickStart: [
        {
          text: 'GettingStarted.QuickStart.header',
          href: 'introduction'
        },
        {
          text: 'GettingStarted.QuickStart.browserHeader',
          href: 'supported-browsers'
        },
        {
          text: 'GettingStarted.QuickStart.cdnHeader',
          href: 'cdn-install'
        },
        {
          text: 'GettingStarted.QuickStart.newHeader',
          href: 'new-applications'
        },
        {
          text: 'GettingStarted.QuickStart.existingHeader',
          href: 'existing-applications'
        },
        {
          text: 'GettingStarted.QuickStart.ie11Header',
          href: 'ie11-support'
        }
      ],
      WhyVuetify: [
        {
          text: 'GettingStarted.WhyVuetify.header',
          href: 'why-vuetify'
        },
        {
          text: 'GettingStarted.WhyVuetify.designHeader',
          href: 'design-principles'
        },
        {
          text: 'GettingStarted.WhyVuetify.communityHeader',
          href: 'vibrant-community'
        },
        {
          text: 'GettingStarted.WhyVuetify.comparisonHeader',
          href: 'framework-comparison'
        }
      ]
    },
    Layout: {
      PreDefined: [
        {
          text: 'Layout.PreDefined.header',
          href: 'introduction'
        },
        {
          text: 'Layout.PreDefined.markupHeader',
          href: 'default-markup'
        },
        {
          text: 'Layout.PreDefined.appHeader',
          href: 'all-about-app'
        }
      ],
      Grid: [
        {
          text: 'Generic.Pages.introduction',
          href: 'introduction'
        },
        {
          text: 'Generic.Pages.usage',
          href: 'usage'
        },
        {
          text: 'Generic.Pages.api',
          href: 'api'
        },
        {
          text: 'Generic.Pages.supplemental',
          href: 'supplemental'
        },
        {
          text: 'Generic.Pages.examples',
          href: 'examples'
        },
        {
          text: 'Layout.Grid.breakpointHeader',
          href: 'breakpoint-object'
        }
      ],
      Alignment: [
        {
          text: 'Generic.Pages.introduction',
          href: 'introduction'
        },
        {
          text: 'Generic.Pages.examples',
          href: 'examples'
        }
      ],
      Display: [
        {
          text: 'Generic.Pages.introduction',
          href: 'introduction'
        },
        {
          text: 'Layout.Display.visibilityHeader',
          href: 'visibility'
        },
        {
          text: 'Layout.Display.displayHeader',
          href: 'display'
        },
        {
          text: 'Generic.Pages.examples',
          href: 'examples'
        }
      ],
      Elevation: [
        {
          text: 'Generic.Pages.introduction',
          href: 'introduction'
        },
        {
          text: 'Layout.Elevation.playgroundHeader',
          href: 'playground'
        }
      ],
      Spacing: [
        {
          text: 'Generic.Pages.introduction',
          href: 'introduction'
        },
        {
          text: 'Generic.Pages.howItWorks',
          href: 'how-it-works'
        },
        {
          text: 'Generic.Pages.examples',
          href: 'examples'
        },
        {
          text: 'Layout.Spacing.horizontalHeader',
          href: 'horizontal-centering'
        }
      ]
    },
    Motion: {
      Transitions: [
        {
          text: 'Motion.Transitions.header',
          href: 'introduction'
        },
        {
          text: 'Generic.Pages.examples',
          href: 'examples'
        },
        {
          text: 'Motion.Transitions.createYourOwnHeader',
          href: 'create-your-own'
        }
      ]
    },
    Guides: {
      ALaCarte: [
        {
          text: 'Guides.ALaCarte.header',
          href: 'introduction'
        },
        {
          text: 'Guides.ALaCarte.importHeader',
          href: 'importing-components'
        },
        {
          text: 'Guides.ALaCarte.styleHeader',
          href: 'required-styles'
        },
        {
          text: 'Guides.ALaCarte.applicationHeader',
          href: 'application'
        },
        {
          text: 'Guides.ALaCarte.componentNameListHeader',
          href: 'component-name-list'
        }
      ],
      ServerSideRendering: [
        {
          text: 'Guides.ServerSideRendering.header',
          href: 'introduction'
        },
        {
          text: 'Guides.ServerSideRendering.structureHeader',
          href: 'structure'
        },
        {
          text: 'Guides.ServerSideRendering.applicationHeader',
          href: 'application'
        },
        {
          text: 'Guides.ServerSideRendering.routingHeader',
          href: 'routing'
        },
        {
          text: 'Guides.ServerSideRendering.stateControlHeader',
          href: 'state-control'
        },
        {
          text: 'Guides.ServerSideRendering.metaDataHeader',
          href: 'meta-data'
        },
        {
          text: 'Guides.ServerSideRendering.redirectsHeader',
          href: 'redirects'
        },
        {
          text: 'Guides.ServerSideRendering.webAppSupportHeader',
          href: 'web-app-support'
        }
      ],
      VueCli3: [
        {
          text: 'Overview',
          href: 'introduction'
        },
        {
          text: 'Get Started',
          href: 'get-started'
        }
      ]
    },
    Style: {
      Colors: [
        {
          text: 'Generic.Pages.introduction',
          href: 'introduction'
        },
        {
          text: 'Style.Colors.classesHeader',
          href: 'classes'
        },
        {
          text: 'Style.Colors.javascriptPackHeader',
          href: 'javascript-color-pack'
        },
        {
          text: 'Style.Colors.stylusPackHeader',
          href: 'stylus-color-pack'
        },
        {
          text: 'Style.Colors.colorHeader',
          href: 'material-colors'
        }
      ],
      Theme: [
        {
          text: 'Style.Theme.header',
          href: 'introduction'
        },
        {
          text: 'Style.Theme.lightAndDarkHeader',
          href: 'light-and-dark'
        },
        {
          text: 'Style.Theme.customizingHeader',
          href: 'customizing'
        },
        {
          text: 'Style.Theme.optionHeader',
          href: 'options'
        },
        {
          text: 'Style.Theme.stylusHeader',
          href: 'stylus-guide'
        }
      ]
    }
  }
})
