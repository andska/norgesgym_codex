const businessFacts = {
  gymName: "Norgesgym",
  locationShort: "Solgaard Skog, Moss",
  seoLocation: "Treningssenter i Moss",
  accessHours: "Døgnåpent",
  accessMethod: "Digital tilgang via Membro",
  accessStatement: "Døgnåpent med digital tilgang via Membro",
  accessSentence: "døgnåpent med digital tilgang via Membro",
  receptionHours: "Mandag-torsdag 16:00-18:30",
  receptionHoursShort: "man-tor 16:00-18:30",
  signupFee: "199 kr",
  annualFee: "0 kr",
  parking: "Gratis parkering",
  // TODO: Replace with exact street address when confirmed.
  address: "Solgaard Skog, Moss",
  contactEmail: "post@norgesgym.no",
} as const;

const productionUrls = {
  membershipUrl: "https://norgesgymmoss.ibooking.no/nettinnmelding",
  myPageUrl: "https://norgesgymmoss.ibooking.no/minside/",
  atgUrl: "https://norgesgymmoss.ibooking.no/atg",
  membroGooglePlayUrl:
    "https://play.google.com/store/apps/details?id=no.ibooking.membroapp",
  membroAppStoreUrl: "https://apps.apple.com/us/app/membro/id1542602956",
  // TODO: Replace when the iBooking/Membro solution for free trial is confirmed.
  trialUrl: "mailto:post@norgesgym.no?subject=Gratis%20pr%C3%B8vetime",
} as const;

const urls = {
  membership: productionUrls.membershipUrl,
  trial: productionUrls.trialUrl,
  myPage: productionUrls.myPageUrl,
  atg: productionUrls.atgUrl,
  membroGooglePlay: productionUrls.membroGooglePlayUrl,
  membroAppStore: productionUrls.membroAppStoreUrl,
  googleMaps:
    "https://www.google.com/maps/search/?api=1&query=Norgesgym%20Solgaard%20Skog%20Moss",
  // TODO: Add Google Maps embed URL when available.
  googleMapsEmbed: "",
  membro: productionUrls.myPageUrl,
  contact: `mailto:${businessFacts.contactEmail}`,
} as const;

export const siteConfig = {
  ...businessFacts,
  ...productionUrls,
  urls,
  description:
    "Et lokalt treningssenter i Moss for deg som vil trene jevnt, trygt og enkelt.",
  navigation: [
    { label: "Medlemskap", href: "#medlemskap" },
    { label: "Beliggenhet", href: "#beliggenhet" },
    { label: "Membro", href: "#membro" },
    { label: "FAQ", href: "#faq" },
  ],
  hero: {
    eyebrow: "TRENINGSSENTER I MOSS",
    headline: "Styrketrening på dine vilkår.",
    headlineLines: ["Styrketrening", "på dine vilkår."],
    body: "Et lokalt treningssenter i Moss for deg som vil trene jevnt, trygt og enkelt.",
    primaryCta: "Bli medlem",
    secondaryCta: "Prøv gratis",
    image: {
      src: "/images/norgesgym-hero-strength.png",
      alt: "En kvinne trener styrke i et lyst og rolig treningsrom.",
    },
    placeholder: {
      label: "Bilde kommer",
      title: "Nytt bilde fra lokalet legges inn her",
    },
    trustPoints: [
      `${businessFacts.accessHours} med Membro`,
      businessFacts.parking,
      "Ved Solgaard Skog",
    ],
  },
  practicalValuePoints: [
    {
      label: businessFacts.accessHours,
      detail: businessFacts.accessMethod,
    },
    {
      label: `${businessFacts.signupFee} innmeldingsavgift`,
      detail: "Betales ved oppstart",
    },
    {
      label: "Ingen årsavgift",
      detail: `${businessFacts.annualFee} i årsavgift`,
    },
    {
      label: businessFacts.parking,
      detail: "Ved lokalet",
    },
  ],
  membership: {
    eyebrow: "Medlemskap",
    title: "Medlemskap og prøve",
    body: "Start fast, prøv først, eller ta kontakt hvis du lurer på noe.",
    priceCta: "Se medlemskap og priser",
    options: [
      {
        id: "bli-medlem",
        title: "Bli medlem",
        description: "For deg som vil starte fast trening hos Norgesgym.",
        cta: "Gå til innmelding",
        href: urls.membership,
      },
      {
        id: "proev-gratis",
        title: "Prøv gratis",
        description:
          "For deg som vil se lokalet og prøve før du bestemmer deg.",
        cta: "Book prøvetime",
        href: urls.trial,
      },
      {
        id: "spor-oss",
        title: "Spør oss",
        description: "Har du spørsmål om medlemskap, tilgang eller trening?",
        cta: "Kontakt oss",
        href: urls.contact,
      },
    ],
  },
  photos: {
    eyebrow: "Lokalet",
    title: "Bilder fra lokalet kommer",
    body: "Vi legger inn bilder av lokalet og treningsområdet når nye bilder er klare.",
    placeholders: [
      {
        label: "Bilde kommer",
        title: "Lokalet",
      },
      {
        label: "Bilde kommer",
        title: "Treningsområdet",
      },
    ],
  },
  locationSection: {
    eyebrow: "Beliggenhet",
    title: "Du finner oss på Solgaard Skog i Moss",
    body: "Norgesgym ligger ved Solgaard Skog i Moss, med enkel adkomst og gratis parkering.",
    cta: "Åpne i Google Maps",
    details: [
      { label: "Ved Solgaard Skog", value: businessFacts.address },
      { label: businessFacts.parking, value: "Rett ved lokalet" },
      { label: businessFacts.seoLocation, value: "Gym i Moss" },
    ],
  },
  membro: {
    eyebrow: "Membro",
    title: "Tilgang og medlemskap i Membro",
    body: "Som medlem bruker du Membro til digital tilgang, medlemskap og praktisk informasjon.",
    accessTitle: businessFacts.accessStatement,
    accessDetail: "Åpne døren med Membro-appen når du skal trene.",
    receptionLabel: "Resepsjonstid",
    receptionDetail: businessFacts.receptionHours,
    points: [
      "Digital tilgang via Membro",
      "Åpne døren med Membro-appen",
      "Administrer medlemskapet ditt",
      "Få praktisk informasjon samlet ett sted",
    ],
    cta: "Åpne Membro",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Praktiske spørsmål",
    items: [
      {
        question: "Hva koster det å starte?",
        answer: `Innmeldingsavgiften er ${businessFacts.signupFee}. Månedlige medlemspriser vises i medlemsløsningen.`,
      },
      {
        question: "Er det årsavgift eller skjulte kostnader?",
        answer: `Årsavgiften er ${businessFacts.annualFee}. Viktige kostnader skal være synlige før du melder deg inn.`,
      },
      {
        question: "Hvordan får jeg tilgang til gymmet?",
        answer: `Norgesgym er ${businessFacts.accessSentence}. Du åpner døren med Membro-appen.`,
      },
      {
        question: "Kan jeg prøve før jeg bestemmer meg?",
        answer:
          "Ja. Du kan booke prøvetime for å se lokalet og teste treningen før du bestemmer deg.",
      },
      {
        question: "Hvor ligger Norgesgym?",
        answer: `Norgesgym ligger ved ${businessFacts.locationShort}. ${businessFacts.parking}.`,
      },
      {
        question: "Hvordan fungerer Membro?",
        answer:
          "Membro brukes til digital tilgang, medlemskap, praktisk informasjon og oversikt over avtalen din.",
      },
      {
        question: "Når er resepsjonen bemannet?",
        answer: `Resepsjonstid: ${businessFacts.receptionHours}. Digital tilgang via Membro gjelder utenom resepsjonstiden.`,
      },
    ],
  },
  footer: {
    tagline: "Styrketrening på dine vilkår.",
  },
} as const;
