const businessFacts = {
  gymName: "Norgesgym",
  logoSubtext: "Moss",
  locationShort: "Solgaard Skog, Moss",
  seoLocation: "Treningssenter i Moss",
  accessHours: "Åpent 24/7",
  accessMethod: "Digital tilgang via Membro",
  accessStatement: "Åpent 24/7 med digital tilgang via Membro",
  accessSentence: "åpent 24/7 med digital tilgang via Membro",
  receptionHours: "Mandag-torsdag 16:00-18:30",
  receptionHoursShort: "man-tor 16:00-18:30",
  monthlyPrice: "429 kr mnd.",
  dropInPrice: "120 kr",
  signupFee: "200 kr",
  annualFee: "0 kr",
  binding: "Ingen bindingstid",
  cancellation: "1 måned oppsigelsestid fra neste månedsskifte",
  payment: "Betaling med AvtaleGiro",
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
  googleMapsEmbed:
    "https://www.google.com/maps?q=Norgesgym%20Solgaard%20Skog%20Moss&output=embed",
  membro: productionUrls.myPageUrl,
  contact: `mailto:${businessFacts.contactEmail}`,
} as const;

export const siteConfig = {
  ...businessFacts,
  ...productionUrls,
  urls,
  description:
    "Hos Norgesgym har du alle forutsetningene for å lykkes med dine treningsmål.",
  navigation: [
    { label: "Kom i gang", href: "#kom-i-gang" },
    { label: "Priser", href: "#priser" },
    { label: "Beliggenhet", href: "#beliggenhet" },
    { label: "FAQ", href: "#faq" },
  ],
  hero: {
    eyebrow: "Ditt lokale treningssenter",
    headline: "Trening på dine vilkår.",
    headlineLines: ["Trening", "på dine vilkår."],
    body: "Hos Norgesgym har du alle forutsetningene for å lykkes med dine treningsmål.",
    primaryCta: "Bli medlem",
    secondaryCta: "Prøv gratis",
    image: {
      src: "/images/norgesgym-hero-strength.png",
      alt: "En kvinne trener styrke i et lyst og rolig treningsrom.",
    },
    placeholder: {
      label: "Bilde kommer",
      title: "Bilde av lokalet kommer",
    },
  },
  gettingStarted: {
    eyebrow: "Lett som 1-2-3",
    title: "Kom i gang",
    steps: [
      {
        number: "01",
        title: "Meld deg inn på nett",
        body: `Det tar et par minutter. Du kan også velge drop-in for ${businessFacts.dropInPrice} hvis du bare vil trene en gang.`,
      },
      {
        number: "02",
        title: "Last ned Membro-appen",
        body: "Appen er nøkkelen din til senteret, hele døgnet, alle dager.",
        actions: [
          { label: "App Store", href: productionUrls.membroAppStoreUrl },
          { label: "Google Play", href: productionUrls.membroGooglePlayUrl },
        ],
      },
      {
        number: "03",
        title: "Tren når du vil",
        body: "Senteret er døgnåpent året rundt. Resepsjonen er bemannet mandag til torsdag 16:00 til 18:30.",
      },
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
  pricing: {
    eyebrow: "Priser",
    title: "Prøv oss",
    body: "Tydelige priser, enkel innmelding og ingen bindingstid.",
    options: [
      {
        id: "membership",
        tabLabel: "Bli medlem",
        label: "Månedspris",
        price: businessFacts.monthlyPrice,
        body: "Fast medlemskap for deg som vil trene jevnt og ha fri tilgang.",
        actions: [{ label: "Gå til innmelding", href: urls.membership }],
        details: [
          { label: "Innmeldingsavgift", value: businessFacts.signupFee },
          { label: "Årsavgift", value: businessFacts.annualFee },
          { label: "Bindingstid", value: businessFacts.binding },
          { label: "Oppsigelse", value: businessFacts.cancellation },
          { label: "Betaling", value: businessFacts.payment },
        ],
      },
      {
        id: "dropIn",
        tabLabel: "Drop-in",
        label: "Drop-in",
        price: businessFacts.dropInPrice,
        body: "For deg som bare vil trene én gang uten medlemskap.",
        actions: [{ label: "Velg drop-in", href: urls.membership }],
        details: [
          { label: "Innmeldingsavgift", value: "0 kr" },
          { label: "Årsavgift", value: "0 kr" },
          { label: "Betaling", value: "Kort" },
          { label: "Tilgang", value: "1 dag" },
        ],
      },
      {
        id: "trial",
        tabLabel: "Prøv gratis",
        label: "Prøvetime",
        price: "0 kr",
        body: "Last ned Membro-appen for å velge prøvetime og følge instruksjonene der.",
        actions: [
          { label: "App Store", href: urls.membroAppStore },
          { label: "Google Play", href: urls.membroGooglePlay },
        ],
        details: [
          { label: "Pris", value: "0 kr" },
          { label: "App", value: "Last ned Membro-appen" },
          { label: "Betaling", value: "Ingen betaling for prøvetime" },
          {
            label: "Slik gjør du",
            value: "Velg prøvetime i Membro etter at appen er installert.",
          },
        ],
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
    title: "Finn oss",
    body: "Du finner Norgesgym på Solgaard Skog i Moss. Åpne kartet for veibeskrivelse.",
    cta: "Åpne i Google Maps",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Praktiske spørsmål",
    items: [
      {
        question: "Hva koster det å starte?",
        answer: `Medlemskapet koster ${businessFacts.monthlyPrice} Innmeldingsavgiften er ${businessFacts.signupFee}.`,
      },
      {
        question: "Er det årsavgift eller skjulte kostnader?",
        answer: `Årsavgiften er ${businessFacts.annualFee}, og medlemskapet har ${businessFacts.binding.toLowerCase()}.`,
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
    tagline: "Trening på dine vilkår.",
    developerCredit: "Nettsiden er utviklet av Skaiaa Teknologi.",
  },
} as const;
