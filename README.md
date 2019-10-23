# Powerpuff
We built this Twitch-integrated Chat Points system live on Twitch!

https://discordapp.com/oauth2/authorize?client_id=530106237703028746&scope=bot&permissions=133262656

## Instafluff ##
> *Come and hang out with us at the Comfiest Corner on Twitch!*

> https://twitch.tv/instafluff

> https://twitter.com/instafluffTV

## Credits ##
Thank you to all the participants of this project!

**Instafriend, Instafluff, AbbyFabby, ChatTranslator, LuRiMer313, MacabreMan2, thegooseofwild, That_MS_Gamer, pipskidoodle, Amarogine, Polarami, MrRayKoma, sparky_pugwash, KitAnnLIVE, adamisbest1231, Aririal, foxotic, MisakaGUN, BountyHunterLani, lizardqueen, qerwtr546, RIKACHET, Owen1307, Happy_Pip, PinataHero, donaldwm, LuckyPheathers, fpicoitoj, Patchshifter, simrose4u, LamerYo, PaintHappy, lumiloola, BeadHappy, IsaisChannel, thomcat, TheSabbyLife, NiecyRed, NlghtSprites, SomaPills, DevMerlin, rdmusser, stresstest, neniltheelf, sethorizer, DarrnyH, DrJavaSaurus, SheriffAndy9097, AntiViGames, MerlinLeWizard, CuriousFace, recursivechat, sneelps, Neo_TA, FuriousFur, UltraHal1, Stay_Hydrated_Bot, rarephoenixgames, Supascury, atd285, xkcocco, fd_god92, DrThu, baileydale, Chibigirl24, GrandDragon888, Nordegraf, Rlchibi, OhScee, shmuppyLove, MalForTheWin, Theawesomedaan, BungalowGlow, IVSOY, Kyoslilmonster, malfunct, kora_arts, pookiepew, Helltoken, Levent133**

Thank you to everyone that were here connecting Powerpuff to Twitch Chat!

**Instafriend, Instafluff, ChatTranslator, That_MS_Gamer, Il_Mika, OhScee, BeadHappy, Clearest_Sky, rawbeanstalk, Theawesomedaan\s, Zuulmofo, thegooseofwild, zivivi1, Kyoslilmonster, 01_pollux, atcheety, Chiken_Tenders, Aririal, CogsPokemon, FuriousFur, Lord_of_Conquest, TheKeyMom, ItsNaomiArt, fd_god92, DutchGamer46, Monky_Spit, painfulpanda10, BooobieTrap, luaeo, lizardqueen, SourBeers, AnAutisticBoy, AbbyFabby, KitAnnLIVE, Amarogine, MalForTheWin, ShadowNeverSeen, IsaisChannel, Genders, Snowpiercer2, TheHungerService, Zorchenhimer, Jindatesha, takashhh, alphelm, prasanthlouis, itsDeke, sparky_pugwash, Kiromu, mldevelopment, Smikehunter, POKETzz79, Neo_TA, PaintHappy, pookiepew, DrThu, SparkzAlot, s4ngim3d, HabuSai, SvApOr, xeiu, SightedFoxie, Stobie, mr_grey, Majonezen, Kisa__d1_1b, Eolios, Ayybiel, rredemtion, foxotic**

Thanks to everyone who were part of adding translation to Powerpuff!

**PokemoHero, BungalowGlow, Instafriend, Instafluff, ChatTranslator, IsaisChannel, That_MS_Gamer, simrose4u, sparky_pugwash, MacabreMan2, julieee22, kuchkiAizen, OhScee, TheSpikeythorn, JustGreat, AntiViGames, painartist, CreativeBuilds, Gilokk0, Stay_Hydrated_Bot, SushiDay, fydo, GarethHubball, MisterHex, RIKACHET, wbt2000, MrRayKoma, cekalo35, Jwh1o1, codeaurora, fd_god92, DarrnyH, roadto2d, guthron, 01_pollux, rokitodorito, DutchGamer46, vic_likadabooty, Stobie, rekaj3773, hiccupingboots, baileydale, o0Corps0o, DevMerlin, mldevelopment, donaldwm, 2thicc2furious, QeraiX, DrEriksen, schw00t, DR4G0N_S4MUR41, Moopaloo, DrThu, pookiepew, Rlchibi, Majonezen, MerlinLeWizard, itsDeke, Xiquelle, xFeravel, RockdayStudios, gabrielgabu, varinyc, Nordel_2, NULLYUKI, FuriousFur, MICVICONE, MisakaGUN, FalinDur, swattkidd, fredbeargamerbro563, OMGBUSTA, LuRiMer313, TheSabbyLife, dremp1337, Xaiydee**


## Instructions ##

1. Install NodeJS - [https://nodejs.org/en/](https://nodejs.org/en/)
2. Open the directory in a Command Prompt/Terminal
3. Install Dependencies: `npm install`
4. Get a Twitch Chat OAuth Password Token - [http://twitchapps.com/tmi/](http://twitchapps.com/tmi/)
4. Create a file named `.env` that looks like this:
```javascript
PORT=8000
TWITCHUSER=[YOUR-USERNAME-HERE]
OAUTH=[YOUR-OAUTH-PASS HERE] # e.g. OAUTH=oauth:kjh12bn1hsj78445234
```
5. Run Server: `npm start`
6. View the webpage from your web browser! [http://localhost:8000](http://localhost:8000)
