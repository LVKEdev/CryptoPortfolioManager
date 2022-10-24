const data = {'chart_info': {'labels': ['2021-12-08', '2021-12-09', '2021-12-10', '2021-12-11', '2021-12-12', '2021-12-13', '2021-12-14', '2021-12-15', '2021-12-16', '2021-12-17', '2021-12-18', '2021-12-19', '2021-12-20', '2021-12-21', '2021-12-22', '2021-12-23', '2021-12-24', '2021-12-25', '2021-12-26', '2021-12-27', '2021-12-28', '2021-12-29', '2021-12-30', '2021-12-31', '2022-01-01', '2022-01-02', '2022-01-03', '2022-01-04', '2022-01-05', '2022-01-06', '2022-01-07', '2022-01-08', '2022-01-09', '2022-01-10', '2022-01-11', '2022-01-12', '2022-01-13', '2022-01-14', '2022-01-15', '2022-01-16', '2022-01-17'], 'all': {'bh_data': [100.0, 101.43748135328983, 94.68559282316083, 91.18022542228121, 96.67820316321662, 97.17640264681333, 89.5552858595102, 96.36166361837377, 96.91987569415286, 93.59351672837228, 91.2870026565101, 93.11255533747924, 92.46806877362432, 92.2532757005109, 94.90187407831021, 95.73427413361003, 102.01406892365682, 100.29547923123009, 102.10768049570885, 102.00905258985993, 102.65658989358408, 95.57182897487274, 92.05634224795116, 93.73712542143016, 92.07397371339128, 95.02197903248154, 95.3500138664368, 92.90735173475319, 92.29672965945024, 86.91113587016716, 86.97336350006007, 83.0508280419324, 81.33775933734185, 81.5667818238368, 79.22799821062702, 83.29833607303279, 88.156139384096, 86.54276728462995, 89.93103873158306, 90.22019278792209, 91.37030420786428], 'ap_data': [100.0, 99.47, 94.34, 90.82, 96.3, 96.81, 89.2, 95.91, 96.51, 93.97, 92.87, 92.18, 92.08, 94.14, 94.77, 101.42, 99.89, 101.64, 101.64, 101.64, 101.64, 91.58, 91.61, 93.28, 91.64, 94.57, 94.9, 92.48, 91.89, 86.52, 86.55, 82.62, 80.9, 81.15, 78.83, 82.87, 87.69, 86.06, 89.4, 89.69, 90.83]}, 'bitcoin': {'bh_data': [24.999999999999996, 24.94180547332965, 23.49124660622527, 23.295867971167617, 24.40749906847246, 24.735589491381024, 23.079526260181325, 23.88710874607992, 24.148050117664038, 23.538925002396766, 22.79837296484707, 23.144614584805574, 23.068891526706917, 23.184000656269795, 24.159223506319066, 24.011256410737918, 25.12348052292052, 25.114175131130413, 24.906461786615456, 25.092179220956357, 25.05559020299888, 23.49512097009327, 22.96186222485345, 23.28615241075373, 22.839439245131594, 23.583539488366533, 23.367840210164474, 22.95269026141084, 22.64921983951041, 21.4726437295101, 21.29037072325083, 20.541284213252105, 20.59725493413087, 20.688618759630316, 20.667798995630466, 21.115920571587274, 21.69577051905604, 21.031445602251083, 21.27933076294329, 21.29135413958977, 21.285112658001403], 'ap_data': [25.0, 24.74, 23.29, 23.09, 24.2, 24.52, 22.88, 23.68, 23.94, 23.48, 22.95, 22.92, 23.01, 23.84, 23.73, 24.9, 24.91, 24.69, 24.69, 24.69, 24.69, 22.76, 22.76, 23.08, 22.64, 23.38, 23.17, 22.75, 22.45, 21.29, 21.11, 20.36, 20.42, 20.51, 20.49, 20.93, 21.51, 20.85, 21.09, 21.11, 21.1]}, 'ethereum': {'bh_data': [25.0, 25.757651402563628, 23.834525357607287, 22.630909808656885, 23.74187256176853, 23.975942782834853, 21.95522942597065, 22.40264490061304, 23.33468790637191, 22.983872840423558, 22.498084246702582, 22.98863319710199, 22.780861044027496, 22.900334386030096, 23.3049066505666, 23.102301226082112, 23.86802201374698, 23.49032834850455, 23.76904142671373, 23.59029583875163, 23.437325840609326, 22.018100966004088, 21.074331227939812, 21.53347343488761, 21.341607839494706, 21.860138398662457, 22.223376834478916, 21.862170258220324, 21.97369032138213, 20.549763143228684, 19.777598458108862, 18.56933865874048, 17.8860533159948, 18.298172487460523, 17.897025357607284, 18.807646758313208, 19.573193386587405, 18.812755433772992, 19.200608396804757, 19.31143182240387, 19.42974410180197], 'ap_data': [25.0, 25.0, 24.63, 23.38, 24.53, 24.78, 22.69, 23.15, 24.11, 23.92, 23.85, 23.55, 23.78, 23.97, 23.68, 24.67, 24.28, 24.58, 24.58, 24.58, 24.58, 21.77, 22.76, 23.08, 22.64, 23.38, 23.17, 22.75, 22.45, 21.29, 21.11, 20.36, 20.42, 20.51, 20.49, 20.93, 21.51, 20.85, 21.09, 21.11, 21.1]}, 'cardano': {'bh_data': [25.0, 25.32656023222061, 23.367198838896954, 21.97024673439768, 24.56458635703919, 24.401306240928886, 22.18795355587809, 22.98621190130624, 23.784470246734397, 22.49637155297533, 22.09724238026125, 22.532656023222064, 22.568940493468798, 22.460087082728595, 23.203918722786646, 24.074746008708274, 26.759796806966623, 25.27213352685051, 26.360667634252543, 26.396952104499277, 27.503628447024678, 25.39912917271408, 24.183599419448477, 24.655297532656025, 23.7300435413643, 25.01814223512337, 25.0, 23.929608127721337, 23.766328011611034, 22.314949201741655, 23.203918722786646, 21.933962264150946, 21.44412191582003, 21.22641509433962, 20.373730043541364, 21.552975326560233, 23.802612481857768, 22.35123367198839, 23.45791001451379, 23.439767779390422, 25.59869375907112], 'ap_data': [25.0, 24.84, 22.92, 21.55, 24.1, 23.94, 21.76, 22.55, 23.33, 22.25, 22.13, 22.07, 22.04, 22.73, 23.44, 26.2, 24.8, 25.85, 25.85, 25.85, 25.85, 23.71, 22.76, 23.08, 22.64, 23.38, 23.17, 22.75, 22.45, 21.29, 21.11, 20.36, 20.42, 20.51, 20.49, 20.93, 21.51, 20.85, 21.09, 21.11, 21.1]}, 'dogecoin': {'bh_data': [25.0, 25.41146424517594, 23.992622020431327, 23.283200908059023, 23.964245175936437, 24.06356413166856, 22.33257661748014, 27.085698070374573, 25.652667423382518, 24.574347332576618, 23.893303064699204, 24.446651532349605, 24.049375709421113, 23.708853575482408, 24.233825198637913, 24.545970488081725, 26.2627695800227, 26.41884222474461, 27.07150964812713, 26.929625425652667, 26.660045402951194, 24.659477866061295, 23.836549375709424, 24.262202043132806, 24.162883087400683, 24.56015891032917, 24.758796821793414, 24.162883087400683, 23.907491486946654, 22.57377979568672, 22.701475595913735, 22.006242905788874, 21.410329171396143, 21.353575482406356, 20.2894438138479, 21.821793416572078, 23.08456299659478, 24.347332576617482, 25.993189557321227, 26.177639046538026, 25.056753688989787], 'ap_data': [25.0, 24.89, 23.5, 22.8, 23.47, 23.57, 21.87, 26.53, 25.13, 24.32, 23.94, 23.64, 23.25, 23.6, 23.92, 25.65, 25.9, 26.52, 26.52, 26.52, 26.52, 23.34, 23.35, 23.76, 23.67, 24.06, 24.25, 23.67, 23.42, 22.11, 22.24, 21.55, 20.97, 20.91, 19.87, 21.37, 22.61, 23.85, 25.46, 25.64, 24.54]}}, 'table_info': {'bitcoin': {'price': 42668.56, 'price_change': '-0.95%', 'hodling': 'Yes'}, 'ethereum': {'price': 3256.56, 'price_change': '-2.71%', 'hodling': 'Yes'}, 'cardano': {'price': 1.531, 'price_change': '+8.5%', 'hodling': 'Yes'}, 'dogecoin': {'price': 0.1696, 'price_change': '-3.96%', 'hodling': 'Yes'}}, 'tweets': {0: {'tweet': 'BITCOIN WILL BE 100k by End of April 22', 'pos': 0.0, 'neg': 0.0, 'neu': 1.0}, 1: {'tweet': 'So bitcoin is down 1% while Ada is up 10% . Wheres ur dominance now?', 'pos': 0.265, 'neg': 0.0, 'neu': 0.735}, 2: {'tweet': 'Because my attempt at mining bitcoin in 2012 wouldnt have been a failure', 'pos': 0.351, 'neg': 0.0, 'neu': 0.649}, 3: {'tweet': "the short and ongoing history of the science of crypto: Bitcoin (Isaac Newton, Physics) Ethereum (Albert Einstein, Quantum Physics) $SOS / OpenDao (a future trillionaire's charity Space Ark, taking ordinary folks to habitable planets)", 'pos': 0.101, 'neg': 0.0, 'neu': 0.899}, 4: {'tweet': '$BTC Bitcoin is literally how I bank now! #', 'pos': 0.0, 'neg': 0.0, 'neu': 1.0}, 5: {'tweet': 'The game features a variety of fantasy creatures called Axies, who players could take into battle against other players or computer-generated opponents. Players can also collect, raise, breed, and trade Axies. Axies are NFTs on the Ethereum blockchain. 11/60', 'pos': 0.0, 'neg': 0.088, 'neu': 0.912}, 6: {'tweet': "Start buying Ethereum every week and do not stop. I don't care how uncomfortable it gets you must continue buying Ethereum.", 'pos': 0.178, 'neg': 0.267, 'neu': 0.556}, 7: {'tweet': 'I need a proper pump from Doge to go along with this Cardano movement', 'pos': 0.0, 'neg': 0.0, 'neu': 1.0}, 8: {'tweet': "If a Blockchain lies to pump up the price it's ok. But if the Blockchain gets hacked and users lose all their money it's the users problem for not checking the code. Cardano", 'pos': 0.091, 'neg': 0.452, 'neu': 0.456}, 9: {'tweet': "Quick reminder that every form of tokenized BTC on Ethereum and every BTC holding on a CEX is an IOU. IOUs aren't always honored. Risks include insolvency, exploits/hacks, regulatory attacks &amp; more. You don't actually own any BTC unless you self-custody on Bitcoin chain.", 'pos': 0.145, 'neg': 0.195, 'neu': 0.66}, 10: {'tweet': '1: Bitcoin price is $42618.25 (-0.07% 1h) 2: Ethereum price is $3264.44 (-0.11% 1h) 3: BNB price is $476.86 (-0.32% 1h) 4: Tether price is $1.00 (0.00% 1h) 5: Cardano price is $1.53 (0.54% 1h) 11: Dogecoin price is $0.17 (0.34% 1h)', 'pos': 0.0, 'neg': 0.073, 'neu': 0.927}, 11: {'tweet': '$MU $TSM $AMAT Bitcoin has been a good indicator of how tech is going to movemight be a red day tmr! #', 'pos': 0.209, 'neg': 0.0, 'neu': 0.791}, 12: {'tweet': 'The market is wrong untill Cardano $ADA is #3 The father of Ethereum created this awesome project It is also superior in terms of R&amp;D (tons of papers published), technology (first blockchain to try smart contracts at 1 trx / block) and mindshare (every lemmings know Cardano)', 'pos': 0.291, 'neg': 0.142, 'neu': 0.567}, 13: {'tweet': 'The cost of doing a transaction, the Dogecoin fee, is very low. Like right now, if you wanna do a Bitcoin transaction, the price of doing that transaction is very high, so you could not use it effectively for most things. And nor could it even scale to a high volume.', 'pos': 0.204, 'neg': 0.079, 'neu': 0.717}, 14: {'tweet': 'The market is wrong untill Cardano $ADA is #3 The father of Ethereum created this awesome project It is also superior in terms of R&amp;D (tons of papers published), technology (first blockchain to try smart contracts at 1 trx / block) and mindshare (every lemmings know Cardano)', 'pos': 0.291, 'neg': 0.142, 'neu': 0.567}, 15: {'tweet': 'Do you think is important to invest in dogecoin?', 'pos': 0.375, 'neg': 0.0, 'neu': 0.625}, 16: {'tweet': 'go grab some Shiba Inu and Dogecoin', 'pos': 0.0, 'neg': 0.0, 'neu': 1.0}, 17: {'tweet': 'Ethereum and Cardano can co-exist. Let the developers battle it out between them, while we appreciate both!', 'pos': 0.239, 'neg': 0.23, 'neu': 0.531}, 18: {'tweet': 'Good morning dogecoin family hope you had a good night sleep', 'pos': 0.635, 'neg': 0.0, 'neu': 0.365}, 19: {'tweet': 'About SPL purchase We will resume the purchase of SPL using ETH (Ethereum). Please note that the purchase of SPL by credit card will take some time.', 'pos': 0.259, 'neg': 0.0, 'neu': 0.741}, 20: {'tweet': 'Dogecoin &gt; Ethereum', 'pos': 0.512, 'neg': 0.0, 'neu': 0.488}, 21: {'tweet': "But if there's some dilution of the currency occurring over time, that's more of an incentive to use that as a currency. So Dogecoin just somewhat randomly has just a fixed number of sort of coins or hash strings that are generated every year.", 'pos': 0.172, 'neg': 0.0, 'neu': 0.828}, 22: {'tweet': 'Bitcoin mining is above the law, a thread', 'pos': 0.0, 'neg': 0.0, 'neu': 1.0}, 23: {'tweet': 'i got hacked i lost my wallet instagram need help write this essay homework school account someone help trust wallet my account got disabled need logo banner design gfx metamask buy followers i will pay nft btc crypto trading stocks eth ethereum', 'pos': 0.197, 'neg': 0.145, 'neu': 0.658}, 24: {'tweet': 'Euro down 8 percent i wonder if that has anything to do with influence of the digital currency such a Bitcoin to a continental currency that were the Euro need to keep going up for the exchange rate a Dollar for a Euro', 'pos': 0.0, 'neg': 0.0, 'neu': 1.0}, 25: {'tweet': 'Imagine you are a teacher and one of your students chooses to make an essay about dogecoin, how would you react?', 'pos': 0.0, 'neg': 0.0, 'neu': 1.0}, 26: {'tweet': 'True love is when you gift an NFT on Ethereum network by paying the gas fees.', 'pos': 0.623, 'neg': 0.0, 'neu': 0.377}, 27: {'tweet': 'DOGECOIN - 0.17 cents,if I got a dollar every time I heard buy the dip I would be rich already. Thats all DOGECOIN seems to do,it spikes 2 or 3 cents and then dips.Sorry all Im just pissed of because I had faith in this coin.I thought we would have been at a $1 already', 'pos': 0.183, 'neg': 0.158, 'neu': 0.659}, 28: {'tweet': 'What the next move dogecoin?', 'pos': 0.0, 'neg': 0.0, 'neu': 1.0}, 29: {'tweet': 'The proposal will help Aave by: ~ Consolidating all of its Ethereum RF on V2 address ~ Diversifying a part of the treasury on different protocols ~ Buying &amp; locking $CVX to vote on Aave pools ~ Accumulating governance power', 'pos': 0.176, 'neg': 0.0, 'neu': 0.824}, 30: {'tweet': 'North Korean Hackers Reportedly Stole $400M of Crypto in 2021, Dogecoin Is Up After Elon Musk Tweet.', 'pos': 0.0, 'neg': 0.0, 'neu': 1.0}, 31: {'tweet': 'I get so sketched out like exchanges , these projects , nfts they feel like strategic ways for them to take my blockchain currency so they can hold it for themselves . When someone sells you had Nft they just get and hold more ETH , Sol , cardano etc', 'pos': 0.192, 'neg': 0.0, 'neu': 0.808}, 32: {'tweet': 'I had the strangest dream: Hyperloops are quietly in operational testing phases. The Roadster was sent to Galactic Ambassadors on Phobos. Dogecoin is already the choice currency of Mars as voted on by the assets there. Elon likes as We will be heading to Sirius and Canus Major.', 'pos': 0.228, 'neg': 0.0, 'neu': 0.772}, 33: {'tweet': 'Dogecoin &gt; Ethereum', 'pos': 0.512, 'neg': 0.0, 'neu': 0.488}, 34: {'tweet': 'Is your Bitcoin wallet balance is 0.00000 I assure you of 0.005000btc weekly, pm me on how to get started....', 'pos': 0.211, 'neg': 0.0, 'neu': 0.789}, 35: {'tweet': '15th OCT NOW its 16th JAN IT took CARDANO 4months to break the resistance in crypto u get your target but time is something unpredictable. My wife sold all her btc and eth to buy ADA just before the pump.', 'pos': 0.0, 'neg': 0.0, 'neu': 1.0}, 36: {'tweet': 'Update: 5 (Cardano entering the mix today)', 'pos': 0.0, 'neg': 0.0, 'neu': 1.0}, 37: {'tweet': "Reuters: Tesla accepts dogecoin as payment for merchandise, says Musk Elon Musk said on Tuesday the electric carmaker will accept dogecoin on a test basis, sending the meme-based cryptocurrency up over 20%. Suppose even Doge itself don't understand how it's important in crypto", 'pos': 0.205, 'neg': 0.0, 'neu': 0.795}, 38: {'tweet': 'Metaverse Project Pavia Debuts on the Cardano BlockchainMetaverse is still in its infancy. While Ethereum-based metaverse games such as The Sandbox have seen exponential traction, investors are also looking into building projects upon stable PoS networks such as Cardano. . As a', 'pos': 0.081, 'neg': 0.0, 'neu': 0.919}, 39: {'tweet': 'i lost my metamask eth with trust wallet browser seed phrase i need help with my metamask lost funds metamask shiba dogecoin hacked snapchat hacked uniswap pancakeswap wallet connect coinbase hacked account instagram hacked account lost bitcoin wallet facebook hacked essay write', 'pos': 0.115, 'neg': 0.389, 'neu': 0.496}, 40: {'tweet': 'Just liquidated my old Cardano position to buy the more recent $OHM dip. Im irresponsibly long on this project.', 'pos': 0.0, 'neg': 0.0, 'neu': 1.0}, 41: {'tweet': 'matter of fact, Pavias entry into the Cardano ecosystem comes at a time when its native crypto-asset, ADA, has suffered a consistent downward pressure amidst the market-wide rout. But the NFT activity on top of the network provided a much-needed push to the token, which jumped', 'pos': 0.151, 'neg': 0.151, 'neu': 0.698}, 42: {'tweet': "letgoo semuanya HAKA all in full margin Cardano, can't wait SundaeSwap this Thursday!", 'pos': 0.0, 'neg': 0.0, 'neu': 1.0}, 43: {'tweet': 'Ethereum and Cardano can co-exist. Let the developers battle it out between them, while we appreciate both!', 'pos': 0.239, 'neg': 0.23, 'neu': 0.531}, 44: {'tweet': 'Life hack:Switch the time &amp; energy from being a fan of sport teams to reading self improvement books, learning about yourself, learning a new skill that society needs, learn to invest, learn how $ works, learn about Bitcoin, Cardano, ChainLink &amp; crypto.Try it &amp; reap the rewards!', 'pos': 0.266, 'neg': 0.0, 'neu': 0.734}, 45: {'tweet': 'i lost my metamask eth with trust wallet browser seed phrase i need help with my metamask lost funds metamask shiba dogecoin hacked snapchat hacked uniswap pancakeswap wallet connect coinbase hacked account instagram hacked account lost bitcoin wallet facebook hacked essay write', 'pos': 0.115, 'neg': 0.389, 'neu': 0.496}, 46: {'tweet': '[ $ADA ] Cardano has gone up $1.54 Variance +0.0110% +$0.02 Updated at 06:04h', 'pos': 0.0, 'neg': 0.0, 'neu': 1.0}, 47: {'tweet': 'Awkward when bitcoin wants to follow on your personal IG. No thanks! I have about 39293829 requests and all these requests will sit there. Lols.', 'pos': 0.2, 'neg': 0.11, 'neu': 0.69}, 48: {'tweet': 'Buy Ethereum before Walmart announces it', 'pos': 0.0, 'neg': 0.0, 'neu': 1.0}, 49: {'tweet': 'Life hack:Switch the time &amp; energy from being a fan of sport teams to reading self improvement books, learning about yourself, learning a new skill that society needs, learn to invest, learn how $ works, learn about Bitcoin, Cardano, ChainLink &amp; crypto.Try it &amp; reap the rewards!', 'pos': 0.266, 'neg': 0.0, 'neu': 0.734}, 50: {'tweet': 'The Sandbox players can create 3D assets as Ethereum NFTs through VOX Edit and integrate them into their worlds via Game Maker. LANDs are real estate in the game which allow players to build their own experiences on top of them. The central currency of the game is $SAND 38/60', 'pos': 0.231, 'neg': 0.0, 'neu': 0.769}, 51: {'tweet': 'As someone thats never had money A disciplined allocation percentage of all incoming capital into bitcoin is a life hack The goal is to take emotion out of it', 'pos': 0.0, 'neg': 0.0, 'neu': 1.0}, 52: {'tweet': 'TRADE #1 Coin: ADA - Cardano Risk: 2% Entry: 1.57 SL: 1.48 TP Levels: 1. 1.6 2. 1.65 3. 1.70 4. 1.75 Reasons 1. Retest of resistance turned support line 2. Support of breakout w increased volume', 'pos': 0.253, 'neg': 0.071, 'neu': 0.676}, 53: {'tweet': "Quick reminder that every form of tokenized BTC on Ethereum and every BTC holding on a CEX is an IOU. IOUs aren't always honored. Risks include insolvency, exploits/hacks, regulatory attacks &amp; more. You don't actually own any BTC unless you self-custody on Bitcoin chain.", 'pos': 0.145, 'neg': 0.195, 'neu': 0.66}, 54: {'tweet': 'Cardano went mainnet in 2017, been a good four years now. After all of the developments in these years, will it be able to realistically handle the huge flow of transactions coming in from the DEX? Probably not.', 'pos': 0.245, 'neg': 0.0, 'neu': 0.755}, 55: {'tweet': 'I only buy at support levels like shared today and yesterday no fomo .. bitcoin still very bearish stay safe', 'pos': 0.488, 'neg': 0.14, 'neu': 0.372}, 56: {'tweet': "Then what does the best job of that? Part of the reason why I think there's some merit to Dogecoin, even though it was obviously created as a joke, is that it actually does have a much higher transaction volume capability than Bitcoin.", 'pos': 0.427, 'neg': 0.0, 'neu': 0.573}, 57: {'tweet': 'Can Bitcoin and Cryptos survive another crash?', 'pos': 0.0, 'neg': 0.429, 'neu': 0.571}, 58: {'tweet': 'Metaverse Project Pavia Debuts on the Cardano BlockchainMetaverse is still in its infancy. While Ethereum-based metaverse games such as The Sandbox have seen exponential traction, investors are also looking into building projects upon stable PoS networks such as Cardano. . As a', 'pos': 0.081, 'neg': 0.0, 'neu': 0.919}, 59: {'tweet': "Don't follow the money. Follow the developers. Here are the main platforms they are building on other than Ethereum.", 'pos': 0.0, 'neg': 0.0, 'neu': 1.0}}}
const buttons = ['all', 'bitcoin','ethereum','cardano','dogecoin']
//text insert
for (let i=1; i<buttons.length; i++){
    $("."+buttons[i]+".price").text("$"+data['table_info'][buttons[i]]['price']);
    $("."+buttons[i]+".pc").text(data['table_info'][buttons[i]]['price_change']);
    $("."+buttons[i]+".hodl").text(data['table_info'][buttons[i]]['hodling']);
}
let count = 0
$("#tweets").text(data['tweets'][count]['tweet']);
$("#pos").text(data['tweets'][count]['pos']);
$("#neg").text(data['tweets'][count]['neg']);
$("#neu").text(data['tweets'][count]['neu']);
$("#portfolio_value").text('$'+data['chart_info']['all']['ap_data'][8])
//data['chart_info']['all']['ap_data'][data['chart_info']['all']['ap_data'].length])
let pause = false
const interval = setInterval(function(){
    if(!pause){
        if (count==Object.keys(data['tweets']).length){
            count=0
        }
        $("#tweets").text(data['tweets'][count]['tweet']);
        $("#pos").text(data['tweets'][count]['pos']);
        $("#neg").text(data['tweets'][count]['neg']);
        $("#neu").text(data['tweets'][count]['neu']);
        count++;
    }
}, 5000);

//chart settings
Chart.defaults.borderColor = 'rgba(255,255,255,0.4)';
Chart.defaults.color = 'rgba(255,255,255,0.4)';
const ctx = $('#chart');
let chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: data['chart_info']['labels'],
        datasets: [{
            label: 'Automated portfolio',
            data: data['chart_info']['all']['ap_data'],
            fill: false,
            borderColor: 'blue',
            tension: 0,
            borderWidth: 5,
        },{
            label: 'Buy and hold model',
            data: data['chart_info']['all']['bh_data'],
            fill: false,
            borderColor: 'green',
            tension: 0,
            borderWidth: 3,
        }]
    },
    options: {
        scales: {
            y: {
                ticks: {
                    callback: function(value,index,values){
                        return '$'+value;
                    }
                }
            }
        }
    }
})

// //buttons
for (let i=0; i<buttons.length; i++){
    $("button."+buttons[i]).click(function(){
        chart.data.datasets[0].data = data['chart_info'][buttons[i]]['ap_data'];
        chart.data.datasets[1].data = data['chart_info'][buttons[i]]['bh_data'];
        chart.update();
    })
}
$("#pause").click(function(){
    pause = !pause
    if (pause) {
        $("#pause").text("Resume")
    }
    else {
        $("#pause").text("Pause")
        if (count==Object.keys(data['tweets']).length){
            count=0
        }
        $("#tweets").text(data['tweets'][count]['tweet']);
        $("#pos").text(data['tweets'][count]['pos']);
        $("#neg").text(data['tweets'][count]['neg']);
        $("#neu").text(data['tweets'][count]['neu']);
        count++;
    }
})