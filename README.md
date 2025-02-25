# Projekt: Mini E-commerce Webbapp med Klarna Checkout

## Introduktion

Detta projekt är ett grupparbete där ni ska bygga en e-handelsapplikation med en frontend i React och en backend som hanterar en Klarna Checkout som en payment gateway. Projektet kommer att genomföras i grupper om tre studenter och allt arbete ska hanteras genom Git och GitHub.

## Mål med projektet

- Skapa en responsiv webbapp som efterliknar en liten webbutik
- Implementera en varukorg med funktioner för att lägga till och ta bort produkter
- Skapa en backend som hanterar en Klarna Checkout
- Genomföra och simulera köp via Klarna Checkout
- Deploya både frontend och backend
- Arbeta effektivt i grupp genom Git och GitHub

---

## Del 1: Frontend (React)

Ni ska bygga en React-applikation som återskapar en e-handelsprodukt-sida enligt den bifogade designen.

### Funktionalitet

- **Responsiv design**: Layouten ska anpassa sig till olika skärmstorlekar
- **Hover-effekter**: Alla interaktiva element ska ha hover-effekter
- **Lightbox-galleri**: En modal ska visa en förstorad bild när man klickar på huvudbilden
- **Produktbilder**: Användare ska kunna växla produktbild genom att klicka på miniatyrbilder
- **Varukorg**: Lägga till och ta bort produkter från varukorgen
- **Checkout-knapp**: När användaren klickar på "Köp" ska frontend skicka en betalningsförfrågan till backend
- **Användargränssnitt**: Designen ska följa den givna stilen med korrekt färgschema och typsnitt

### Tekniker

- React.js
- Context API eller Redux för att hantera state
- React Router för navigering
- Tailwind CSS, MUI eller Styled Components för styling
- Axios/Fetch för att kommunicera med backend

---

## Del 2: Backend (Node.js & Express)

Ni ska skapa en backend som hanterar en Klarna Checkout som en payment gateway. Backend ska ta emot varukorgsdata från frontend och initiera en betalning via Klarna API.

### Funktionalitet

- **Ta emot varukorgsdata** från frontend
- **Integrera med Klarna Checkout** för att skapa en betalningssession
- **Hantera betalningsstatus** och skicka en bekräftelse till frontend
- **Shipping options**: Olika fraktalternativ ska inkluderas i Klarna Checkout
- **Följa designen**: Klarna checkout ska stilas så att den smälter in i appens design

### Tekniker

- Node.js & Express
- Klarna API
- MongoDB (eller en enkel JSON-fil för datahantering om en databas inte krävs)
- CORS och dotenv för säker kommunikation

---

## Samarbete & Versionshantering

Detta är ett grupprojekt och ni ska arbeta tillsammans genom Git och GitHub.

### Arbetsflöde

1. **Skapa ett privat GitHub-repo** och bjud in era gruppmedlemmar
2. **Använd branches** för att hantera olika delar av koden (ex. `feature/cart`, `feature/checkout`)
3. **Skapa pull requests (PRs)** för kodgranskning innan kod slås ihop
4. **Dokumentera** koden i en `README.md` med instruktioner för hur man kör projektet

---

## Deployment

Både frontend och backend ska vara deployade så att projektet går att testa online.

- **Frontend** kan deployas på Vercel eller Netlify
- **Backend** kan deployas på Vercel, Render eller Railway

---

## Var man hittar allt

Era uppgifter är att bygga projektet enligt designfilerna i mappen `/design`. Ni kommer att hitta både en mobil- och en desktopversion av designen.

Designfilerna är i statiskt JPG-format. Eftersom JPGs inte innehåller exakta mått för element som `font-size`, `padding` och `margin`, behöver ni använda ert bästa omdöme för att återskapa designen så noggrant som möjligt.

Alla nödvändiga bilder och resurser finns i `/images`-mappen och är redan optimerade.

I filen `style-guide.md` hittar ni information som färgpalett och typsnitt för att säkerställa att designen följs korrekt.

---

## Bedömning

Projektet bedöms utifrån följande kriterier:

- **Funktionalitet**: Uppfyller webbappen och Klarna Checkout kraven?
- **Design & UX**: Är webbappen responsiv och visuellt tilltalande?
- **Kodkvalitet**: Är koden välstrukturerad och lättläslig?
- **Git & Samarbete**: Har gruppen anpassat sig till ett effektivt arbetsflöde i GitHub?
- **Deployment**: Finns projektet tillgängligt online?

---

## Avslutning

Detta projekt ger er möjligheten att bygga en komplett webbapplikation från frontend till backend, samtidigt som ni får erfarenhet av att hantera betalningar genom Klarna. Använd projektet som en del av er portfolio och se till att visa upp det på GitHub!

Lycka till!
