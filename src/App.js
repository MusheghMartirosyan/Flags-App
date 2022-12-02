import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Main from './components/Main/Main';
import About from './components/About/About';
import Flags from './components/Flags/Flags';
import HomeWrapper from './pages/HomeWrapper';
import Error from './pages/Error';
import { useState } from 'react';
import UniqFlag from './components/UniqFlag/UniqFlag';

function App() {


  const [search, setSearch] = useState('')
  const [flags, setFlags] = useState([
    {
      id: '1',
      title: 'United States',
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png',
      about: `The national flag of the United States of America, often referred to as the American flag or the U.S. flag, consists of thirteen equal horizontal stripes of red (top and bottom) alternating with white, with a blue rectangle in the canton (referred to specifically as the "union") bearing fifty small, white, five-pointed stars arranged in nine offset horizontal rows, where rows of six stars (top and bottom) alternate with rows of five stars. The 50 stars on the flag represent the 50 U.S. states, and the 13 stripes represent the thirteen British colonies that declared independence from Great Britain, and became the first states in the U.S.[1] Nicknames for the flag include the Stars and Stripes,[2][3] Old Glory,[4] and the Star-Spangled Banner.`
    },
    {
      id: '2',
      title: 'Russia',
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1024px-Flag_of_Russia.svg.png',
      about: `The national flag of Russia (Russian: Флаг России, romanized: Flag Rossii), also known as the State Flag of the Russian Federation (Russian: Государственный флаг Российской Федерации, romanized: Gosudarstvenny flag Rossiyskoy Federatsii), is a tricolour flag consisting of three equal horizontal fields: white on the top, blue in the middle, and red on the bottom. The flag was first used as an ensign for Russian merchant ships in 1696.
      It remained in use until 1858, when the first official flag of the Russian Empire was decreed by Alexander II, which was a tricolour consisting of three horizontal fields: black on the top, yellow in the middle, and white on the bottom. A decree in 1896 reinstated the white, blue, and red tricolour as the official flag of the Russian Empire until the Revolution of 1917.
      Following the creation of the Russian Socialist Federative Soviet Republic after the Bolshevik Revolution, the Russian tricolour was abolished, but its usage was preserved by the White Movement and the Russian state during the Russian Civil War. During the Soviet Union's existence, the country used the red flag with a golden hammer and sickle and a golden bordered red star on top while the Russian SFSR (a constituent republic of the USSR) used a defaced variant with a vertical blue bar at the hoist.
      During the dissolution of the Soviet Union, after the 1991 August Coup, the Russian SFSR adopted a new flag design similar to the pre-revolutionary tricolour that had been abolished in 1917. The ratio of the new flag was 1:2, and the flag colours consisted of white on the top, blue in the middle, and red on the bottom. When Boris Yeltsin made the State Heraldic Register, he gave the flag the number 1 there. The flag design remained the same until 1993, when the original Russian tricolour was fully restored as the current flag after the 1993 Russian constitutional crisis.[citation needed] The current flag has number 2 in the SHR.`
    },
    {
      id: '3',
      title: 'Ukraine',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1024px-Flag_of_Ukraine.svg.png',
      about: `The Flag of Ukraine (Ukrainian: Прапор України, romanized: Prapor Ukrainy) consists of equally sized horizontal bands of blue and yellow.[1] As a national flag, the blue and yellow bicolour has been used since the 1848 Spring of Nations, when it was hoisted over Lviv Town Hall. It was officially adopted as a state flag for the first time in 1918 by the short-lived West Ukrainian People's Republic and subsequently used by the Ukrainian People's Republic, just before World War II it was also adopted by Carpatho-Ukraine in March 1939.
      When Ukraine was part of the Soviet Union, the flag of the Ukrainian Soviet Socialist Republic was used and the bicolour flag was outlawed. The blue and yellow flag was provisionally adopted for official ceremonies in September 1991 following Ukrainian independence, before officially being restored on 28 January 1992 by the Parliament of Ukraine.[2][3]
      Ukraine has celebrated the Day of the National Flag on 23 August since 2004.`
    },
    {
      id: '4',
      title: 'Iran',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/1024px-Flag_of_Iran.svg.png',
      about: `The flag of Iran (Persian: پرچم ایران, romanized: Parčam-e Irân, pronounced [pʰæɾˌtʃʰæme ʔiːˈɾɒːn]), also known as the Three-Coloured Flag (Persian: پرچم سه‌رنگ ایران, romanized: Parčam-e se rang-e Irân, pronounced [pʰæɾˌtʃʰæme seˌɾæŋge ʔiːˈɾɒːn]), is a tricolour comprising equal horizontal bands of green, white and red with the national emblem ("Allah") in red centred on the white band and the takbir written 11 times each in the Kufic script in white, at the bottom of the green and the top of the red band.[1]
      This flag was adopted on 29 July 1980, as a reflection of the changes brought about by the Iranian Revolution of 1979, which resulted in the replacement of Pahlavi monarchy with an Islamic Republic, supported by a wide range of Islamist organizations[2] and student movements. In opposition to the current regime in Iran, a number of Iranian exiles continue to use the Iranian tricolor with the Lion and Sun at the center.`
    },
    {
      id: '5',
      title: 'Brazil',
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1024px-Flag_of_Brazil.svg.png',
      about: `The national flag of Brazil (Portuguese: bandeira do Brasil), is a blue disc depicting a starry sky (which includes the Southern Cross) spanned by a curved band inscribed with the national motto "Ordem e Progresso" ("Order and Progress"), within a yellow rhombus, on a green field. It was officially adopted on 15 November 1889 — four days after the Proclamation of the Republic, to replace the flag of the Empire of Brazil. The concept was the work of Raimundo Teixeira Mendes, with the collaboration of Miguel Lemos, Manuel Pereira Reis and Décio Villares.
      The green field and yellow parallelogram from the previous imperial flag were preserved (though slightly modified in hue and shape). In the imperial flag, the green represented the House of Braganza of Pedro I, the first Emperor of Brazil, while the yellow represented the House of Habsburg of his wife, Empress Maria Leopoldina.[1] A blue circle with white five-pointed stars replaced the arms of the Empire of Brazil — its position in the flag reflects the sky over the city of Rio de Janeiro on 15 November 1889. The motto Ordem e Progresso is derived from Auguste Comte's motto of positivism: "L'amour pour principe et l'ordre pour base; le progrès pour but" ("Love as a principle and order as the basis; progress as the goal").[2]
      Each star, corresponding to a Brazilian Federal Unit, is sized in proportion relative to its geographic size, and, according to Brazilian Law, the flag must be updated in case of creation or extinction of a state. At the time the flag was first adopted in 1889, it had 21 stars. It then received one more star in 1960 (representing the state of Guanabara), then another in 1968 (representing Acre), and finally four more stars in 1992 (representing Amapá, Roraima, Rondônia and Tocantins), totalling 27 stars in its current version.`
    },
    {
      id: '6',
      title: 'Germany',
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1024px-Flag_of_Germany.svg.png',
      about: `The national flag of Germany (German: Flagge Deutschlands) is a tricolour consisting of three equal horizontal bands displaying the national colours of Germany: black, red, and gold (German: Schwarz-Rot-Gold).[1] The flag was first sighted in 1848 in the German Confederation. It was officially adopted as the national flag of the Weimar Republic from 1919 to 1933, and has been in use since its reintroduction in West Germany in 1949.
      Since the mid-19th century, Germany has two competing traditions of national colours, black-red-gold and black-white-red. Black-red-gold were the colours of the 1848 Revolutions, the Weimar Republic of 1919–1933 and the Federal Republic (since 1949). They were also adopted by the German Democratic Republic (1949–1990).
      The colours black-white-red appeared for the first time in 1867, in the constitution of the North German Confederation. This nation state for Prussia and other north and central German states was expanded to the south German states in 1870–71, under the name German Empire. It kept these colours until the revolution of 1918–19. Thereafter, black-white-red became a symbol of the political right. The Nazis (National Socialist German Worker's Party) re-established these colours along with the party's own swastika flag in 1933. After World War II, black-white-red was still used by some conservative groups or by groups of the far right, as it is not forbidden, unlike proper Nazi symbols.
      Black-red-gold is the official flag of the Federal Republic of Germany. As an official symbol of the constitutional order, it is protected against defamation. According to §90 of the German penal code, the consequences are a fine or imprisonment up to five years.`
    },
    {
      id: '7',
      title: 'Armenia',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1280px-Flag_of_Armenia.svg.png',
      about: `The national flag of Armenia, the Armenian Tricolour, consists of three horizontal bands of equal width, red on the top, blue in the middle, and apricot on the bottom. The Armenian Supreme Soviet adopted the current flag on 24 August 1990. On 15 June 2006, the Law on the National Flag of Armenia, governing its usage, was passed by the National Assembly of Armenia.
      Throughout history, there have been many variations of the Armenian flag. In ancient times, Armenian dynasties were represented by different symbolic animals displayed on their flags.[1] In the twentieth century, various Soviet flags represented the Armenian SSR.
      The meanings of the colors are interpreted in many different ways. The red stands for the Armenian Highlands, the Armenian people's continued struggle for survival, maintenance of the Christian faith and Armenia's independence and freedom. Blue is for the Armenian peaceful skies. And orange represents the nation's talent and hard-work.[`
    },
    {
      id: '8',
      title: 'Cyprus',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Cyprus.svg/1024px-Flag_of_Cyprus.svg.png',
      about: `The national flag of Cyprus (Greek: σημαία της Κύπρου simea tis Kipru; Turkish: Kıbrıs bayrağı) came into use on 16 August 1960, under the Zürich and London Agreements, whereby a constitution was drafted and Cyprus was proclaimed an independent state. The flag was designed by artist İsmet Güney.[1] The design of the flag deliberately employs peaceful and neutral symbols in an attempt to indicate harmony between the Greek and Turkish Cypriot communities, an ideal that has not yet been realised. In 1963, Greek Cypriot and Turkish Cypriot communities separated because of Cypriot intercommunal violence.
      The national flag features the shape of the entirety of the island, with two olive branches below (a symbol of peace between the island's two communities) on white (another symbol of peace). The olive branches signify peace between the Greek and Turkish Cypriots. The map on the flag is a copper-orange colour, symbolising the large deposits of copper ore on the island, from which it may have received its name.`
    },
    {
      id: '9',
      title: 'Italy',
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1024px-Flag_of_Italy.svg.png',
      about: `The national flag of Italy (Italian: Bandiera d'Italia, Italian: [banˈdjɛːra diˈtaːlja]), often referred to in Italian as il Tricolore (English: the Tricolour, Italian: [il trikoˈloːre]) is a tricolour featuring three equally sized vertical pales of green, white and red, national colours of Italy, with the green at the hoist side, as defined by article 12 of the Constitution of the Italian Republic.[1] The Italian law regulates its use and display, protecting its defense and providing for the crime of insulting it; it also prescribes its teaching in Italian schools together with other national symbols of Italy.
      The Italian Flag Day named Tricolour Day was established by law n. 671 of 31 December 1996, which is held every year on 7 January. This celebration commemorates the first official adoption of the tricolour as a national flag by a sovereign Italian state, the Cispadane Republic, a Napoleonic sister republic of Revolutionary France, which took place in Reggio Emilia on 7 January 1797, on the basis of the events following the French Revolution (1789–1799) which, among its ideals, advocated the national self-determination. The Italian national colours appeared for the first time in Genoa on a tricolour cockade on 21 August 1789, anticipating by seven years the first green, white and red Italian military war flag, which was adopted by the Lombard Legion in Milan on 11 October 1796.
      After 7 January 1797, popular support for the Italian flag grew steadily, until it became one of the most important symbols of the Italian unification, which culminated on 17 March 1861 with the proclamation of the Kingdom of Italy, of which the tricolour became the national flag. Following its adoption, the tricolour became one of the most recognisable and defining features of united Italian statehood in the following two centuries of the history of Italy.`
    },
    {
      id: '10',
      title: 'France',
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1024px-Flag_of_France.svg.png',
      about: `The national flag of France (French: drapeau français) is a tricolour featuring three vertical bands coloured blue (hoist side), white, and red. It is known to English speakers as the Tricolour (French: Tricolore), although the flag of Ireland and others are also so known. The design was adopted after the French Revolution; while not the first tricolour, it became one of the most influential flags in history. The tricolour scheme was later adopted by many other nations in Europe and elsewhere, and, according to the Encyclopædia Britannica has historically stood "in symbolic opposition to the autocratic and clericalist royal standards of the past".
      Before the tricolour was adopted the royal government used many flags, the best known being a blue shield and gold fleur-de-lis (the Royal Arms of France) on a white background, or state flag. Early in the French Revolution, the Paris militia, which played a prominent role in the storming of the Bastille, wore a cockade of blue and red,[2] the city's traditional colours. According to French general Gilbert du Motier, Marquis de Lafayette, white was the "ancient French colour" and was added to the militia cockade to form a tricolour, or national, cockade of France.[3]
      This cockade became part of the uniform of the National Guard, which succeeded the militia and was commanded by Lafayette.[4] The colours and design of the cockade are the basis of the Tricolour flag, adopted in 1790,[5] originally with the red nearest to the flagpole and the blue farthest from it. A modified design by Jacques-Louis David was adopted in 1794. The royal white flag was used during the Bourbon Restoration from 1815 to 1830; the tricolour was brought back after the July Revolution and has been used since then, except for an interruption for a few days in 1848.[6] Since 1976, there have been two versions of the flag in varying levels of use by the state: the original (identifiable by its use of navy blue) and one with a lighter shade of blue. Since 2020, France has used the older variant by default, including at the Élysée Palace.`
    },
    {
      id: '11',
      title: 'Sweden',
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1024px-Flag_of_Sweden.svg.png',
      about: `The national flag of Sweden (Swedish: Sveriges flagga) consists of a yellow or gold Nordic cross (i.e. a horizontal cross extending to the edges, with the crossbar closer to the hoist than the fly) on a field of light blue. The Nordic cross design traditionally represents Christianity.[2][3] The design and colours of the Swedish flag are believed to have been inspired by the present coat of arms of Sweden of 1442, which is blue divided quarterly by a cross pattée of gold, and modelled on the Danish flag.[4] Blue and yellow have been used as Swedish colours at least since Magnus III's royal coat of arms of 1275.`
    },
    {
      id: '12',
      title: 'New Zealand',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/1280px-Flag_of_New_Zealand.svg.png',
      about: `The flag of New Zealand (Māori: Te haki o Aotearoa[1]), also known as the New Zealand Ensign,[2] is based on the British maritime Blue Ensign – a blue field with the Union Jack in the canton or upper hoist corner – augmented or defaced with four red stars centred within four white stars, representing the Southern Cross constellation.
      New Zealand's first national flag, the flag of the United Tribes of New Zealand, was adopted in 1834, six years before New Zealand's separation from New South Wales and creation as a separate colony following the signing of the Treaty of Waitangi in 1840. Chosen by an assembly of Māori chiefs at Waitangi in 1834, the flag was of a St George's Cross with another cross in the canton containing four stars on a blue field. After the formation of the colony in 1840, British ensigns began to be used. The current flag was designed and adopted for use on the colony's ships in 1869, was quickly adopted as New Zealand's national flag, and given statutory recognition in 1902.
      For several decades there has been debate about changing the flag.[4] In 2016, a two-stage binding referendum on a flag change took place with voting on the second final stage closing on 24 March. In this referendum, the country voted to keep the existing flag by 57% to 43%.`
    },
    {
      id: '13',
      title: 'United Kingdom',
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png',
      about: `The national flag of the United Kingdom is the Union Jack, also known as the Union Flag.
      The design of the Union Jack dates back to the Act of Union 1801 which united the Kingdom of Great Britain and the Kingdom of Ireland (previously in personal union) to create the United Kingdom of Great Britain and Ireland. The flag consists of the red cross of Saint George (patron saint of England (which also represents Wales)), edged in white, superimposed on the saltire of St Patrick (patron saint of Ireland), also edged in white, which are superimposed on the saltire of Saint Andrew (patron saint of Scotland). Wales is not represented in the Union Flag by Wales's patron saint, Saint David, because the flag was designed whilst Wales was part of the Kingdom of England.
      The flag proportions on land and the war flag used by the British Army have the proportions 3:5. The flag's height-to-length proportions at sea are 1:2.
      The earlier flag of Great Britain was established in 1606 by a proclamation of King James VI and I of Scotland and England. The new flag of the United Kingdom was officially created by an Order in Council of 1801, with its blazon reading as follows:
      The Union Flag shall be azure, the Crosses saltire of Saint Andrew and Saint Patrick quarterly per saltire, counter-changed, argent and gules, the latter fimbriated of the second, surmounted by the Cross of Saint George of the third fimbriated as the saltire.
      No official standardised colours were specified, although the Flag Institute defines the red and royal blue colours as Pantone 186 C and Pantone 280 C, respectively.`
    },
    {
      id: '14',
      title: 'Spain',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1024px-Bandera_de_Espa%C3%B1a.svg.png',
      about: `The national flag of Spain (Spanish: Bandera de España), as it is defined in the Constitution of 1978, consists of three horizontal stripes: red, yellow and red, the yellow stripe being twice the size of each red stripe. Traditionally, the middle stripe was defined by the more archaic term of gualda, and hence the popular name la Rojigualda (red-weld).
      The origin of the current flag of Spain is the naval ensign of 1785, Pabellón de la Marina de Guerra under Charles III of Spain. It was chosen by Charles III himself among 12 different flags designed by Antonio Valdés y Bazán (all proposed flags were presented in a drawing which is in the Naval Museum of Madrid).[1] The flag remained marine-focused for much of the next 50 years, flying over coastal fortresses, marine barracks and other naval property. During the Peninsular War the flag could also be found on marine regiments fighting inland. Not until 1820 was the first Spanish land unit (The La Princesa Regiment) provided with one and it was not until 1843 that Queen Isabella II of Spain made the flag official.[2]
      Throughout the 19th and 20th centuries, the color scheme of the flag remained intact, with the exception of the Second Republic period (1931–1939); the only changes centered on the coat of arms.`
    },
    {
      id: '15',
      title: 'United Arab Emirates',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1280px-Flag_of_the_United_Arab_Emirates.svg.png',
      about: `The national flag of the United Arab Emirates (Arabic: علم دولة الإمارات العربية المتحدة) contains the Pan-Arab colors red, green, white, and black. It was designed in 1971 by Abdullah Mohammed Al Maainah, who was 19 years old at that time, and was adopted on 2 December 1971.[1][2] The main theme of the flag's four colors is the unity of Arab nations. In 2008, there was a minor change to the Emblem.
      Merchant ships may fly the alternative civil ensign, a red flag with the national flag in the canton. Emirates Airlines utilises the UAE flag as part of their livery.
      All seven Emirates use the federal flag interchangeably as the flag of the emirate.`
    },
  ])


  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<HomeWrapper search={search} setSearch={setSearch} />}>
            <Route index element={<Main />} />
            <Route path='flags' >
              <Route index element={<Flags search={search} flags={flags}/>}/>
              <Route path=':id' element={<UniqFlag flags={flags} />} />
            </Route>
            <Route path='about' element={<About />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Routes>
    </div>
  );
}

export default App;
