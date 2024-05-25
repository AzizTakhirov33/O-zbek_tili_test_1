

//Array of Objects

const quiz = [
    {
        q:'1. Qanday? qanaqa? qaysi? so‘roqlariga javob bo‘ladigan so‘z turkumi…deyiladi.',
        options: ['Ot','Sifat','Olmosh','Fe’l'],
        answer:1
    },
    {
        q:'2. Narsa, predmetning miqdorini bildirib, qancha? nechta?	so‘roqlariga javob bo‘ladigan so’z turkumi…deyiladi.',
        options: ['Son','Sifat','Olmosh','Ot'],
        answer:0
    },
    {
        q:'3. Bu kitob juda qiziq. Otni aniqlang.',
        options: ['Bu','kitob','juda','qiziq'],
        answer:1
    },
    {
        q:'4. Sodda gapni toping.',
        options: [
            'Qo‘ng’iroq chalindi.',
            'Qo‘ng’iroq chalindi va dars boshlandi.',
            'Qo‘ng’iroq chalindi, dars boshlandi.',
            'B va C'],
        answer:0
    },
    {
        q:'5. Dam olish kunida talabalar muzeyga bordilar.Fe’lni aniqlang.',
        options: ['dam olish kunida','talabalar','muzeyga','bordilar'],
        answer:3
    },
    {
        q:'6. Bugun qor ko’p yog’di. Ravishni aniqlang.',
        options: ['bugun, qor, yog’di','qor	 yog’di','ko’p, yog‘di','bugun, ko‘p'],
        answer:3
    },
    {
        q:'7. Kishilik olmoshini aniqlang.',
        options: ['Hamma','Siz','Kimning?','Allakim'],
        answer:1
    },
    {
        q:'8. Bosh harflar imlosiga ko‘ra to‘g‘ri yozilgan so‘zlarni aniqlang.',
        options: [
            'olma, anor, abdunosir',          
            'sadoqat, vafo, ishq',
            'Maftuna, Safiya, bexruz',
            'toshkent, buxoro, farg‘ona'],
        answer:1
    },
    {
        q:'9. Antonim so’zlarni aniqlang.',
        options: [
            'mehr-oqibat', 
            'opa-singil',
            'aka-uka',
            'yaxshi-yomon'],
        answer:3
    },
    {
        q:'10. Sinonimlarni aniqlang.',
        options: [
            'botir-qo‘rqmas', 
            'kun-tun',
            'odobli-odobsiz',
            'mehr-qaxr'],
        answer:0
    },
    {
        q:'11. Dugonalarimiz bilan tog’ga chiqdik. Qaysi gap bo’lagi tushirib qoldirilgan?',
        options: [
            'to‘ldiruvchi', 
            'hol',
            'ega',
            'kesim'],
        answer:2
    },
    {
        q:'12. So’roq olmoshlariga va narsa so’ziga alla- yoki –dir qo’shimchalarini qo’shish bilan hosil qilingan olmoshlar…',
        options: [
            'So’roq ', 
            'Ko’rsatish',
            'Belgilash',
            'Gumon'],
        answer:3
    },
    {
        q:'13. Nil daryosi suvini o’lchash uchun nilometrni ixtiro qilgan o’zbek allomasi kim?',
        options: [
            'Amir Temur', 
            'Imom Buxoriy',
            'Ahmad Farg‘oniy',
            'Ibn Sino'],
        answer:2
    },
    {
        q:'14. Qaysi olmoshlar ishtirok etgan gaplarning kesimi inkor shaklda bo’ladi?',
        options: [
            'Bo’lishiszlik', 
            'Ko’rsatish',
            'Gumon',
            'So’roq'],
        answer:0
    },
    {
        q:'15. Yevropada “Alfraganus” nomi bilan mashxur bo’lgan o’zbek allomasi  kim?',
        options: [
            'Muhammad ibn Kasir', 
            'Al-Xorazmiy',
            'Mahmud Zamaxshariy',
            'Abu Rayhon Beruniy'],
        answer:0
    },
    {
        q:'16. Davlat idoralari tomonidan chiqariladigan qarorlar, qonunlar, nizomlar qaysi uslubda yoziladi?',
        options: [
            'Ilmiy', 
            'Badiiy',
            'Publististik',
            'Rasmiy'],
        answer:3
    },
    {
        q:'17. O’zbekiston Respublikasining yangi Konstiyutsiyasi qachondan kuchga kirdi?',
        options: [
            '2023-yil, 3-maydan', 
            '2022-yil, 1-maydan',
            '2023-yil, 1-maydan',
            '2023-yil, 4-maydan'],
        answer:2
    },
    {
        q:'18. Kim nayzani uzukdan o’tkaza olsa, o’sha g’olib bo’ladi. Ushbu gap tuzilishiga ko’ra qanday gap?',
        options: [
            'Sodda gap', 
            'Qo‘shma gap',
            'Murakkablashgan soda gap',
            'To’g’ri javob yo‘q'],
        answer:2
    },
    {
        q:'19. Bu gullar  chiroyli. Ushbu gapda sifatning qanday ma’no turi qo‘llangan?',
        options: [
            'Hajm-o‘lchov', 
            'Xil-xususiyat',
            'Rang-tus',
            'Zamon va makon'],
        answer:1
    },
    {
        q:'20. Ish-harakatning nomini bildirib, nima qildi? nima qilyapti? so‘roqlariga javob bo‘ladigan so‘z turkumi…deyiladi.',
        options: [
            'ot', 
            'sifat',
            'fe’l',
            'ravish'],
        answer:2
    },
    {
        q:'21. Quyidagi gapda ajratilgan so`z to`g`ri izohlangan javobni belgilang. Bolalar, yaxshi o‘qing.',
        options: [
            'Undalma', 
            'Sifat',
            'Olmosh',
            'Son'],
        answer:0
    },
    {
        q:'22. Siz, albatta, maqsadingizga erishasiz. Gapda modal so‘zning qanday ma’nosi ifodalangan?',
        options: [
            'Gumon', 
            'Tasdiq',
            'Afsuslanish',
            'Gapda modal so‘z ishtirok etmagan'],
        answer:1
    },
    {
        q:'23. Quyida berilgan gapda ajratilgan so`z qanday so`z? Avvalo, niyatni to‘g‘ri qilaylik.',
        options: [
            'Taqlid so‘z', 
            'Undov so‘z',
            'Kirish so’z',
            'To‘g’ri javob berilmagan'],
        answer:2
    },
    {
        q:'24. Gumon olmoshi ifodalangan gapni aniqlang.',
        options: [
            'Bugun biz Samarqandga boramiz.', 
            'Hamma xursand-birgina Saida xomush.',
            'Shu payt allakimning shivirlashi eshitildi	',
            'Nima qilmoqchisiz?'],
        answer:2
    },
    {
        q:'25. To`rtta savag`ich bilan tap-tap urib, par singari titipdi. Ushbu gapdagi taqlid so`zning turi va uning sintaktik vazifasini belgilang.',
        options: [
            'Tovushga taqlid, hol', 
            'Tovushga taqlid, aniqlovchi',
            'Holatga taqlid, aniqlovchi',
            'Holatga taqlid, hol'],
        answer:0
    },
    {
        q:'26. To`g`ri so`zi kirish so`z vazifasini bajargan qatorni aniqlang.',
        options: [
            'To`g`ri so`z toshni kesar', 
            'To`g`ri, men yanglishibman',
            'To`g`ri o`zadi, egri ozadi',
            'Sen misolni to`g`ri yechding'],
        answer:1
    },
    {
        q:'27. Qaysi qatorda vazifadosh modal so`zlar berilgan?',
        options: [
            'Chamasi, darhaqiqat, avvalo', 
            'Attang, albatta, balki',
            'Afsuski, taxminan, attang',
            'Ehtimol, aftidan, shubhasiz'],
        answer:3
    },
    {
        q:'28. Sifat darajalari nechta?',
        options: [
            '4', 
            '3',
            '2',
            '5'],
        answer:1
    },
    {
        q:'29. “oq” sozining kuchaytirma sifatda ifodalanishi…?',
        options: [
            'Oqish', 
            'Oqroq',
            'Oppoq',
            'Ko‘p'],
        answer:2
    },
    {
        q:'30. Qizil, sariq, ko’k qaysi sifatni bildiradi?',
        options: [
            'Hajm-o‘lchov', 
            'Maza-tam',
            'Xususiyat',
            'Rang-tus'],
        answer:3
    },
    {
        q:'31. To‘g‘ri ko‘chirilgan so‘zni toping?',
        options: [
            'si-fatli', 
            'sifa-tli',
            'sif-atli',
            'Barcha javoblar noto’g‘ri'],
        answer:0
    },
    {
        q:'32. Quyidagi  gapni  rus tiliga  tarjima qiling: Biz o‘zbek tilini o‘rganamiz.',
        options: [
            'Mы учим узбекский язык', 
            'Mы будем учить узбекский язык',
            'Oн учит узбекский  язык',
            'Oн будет учить узбекский язык'],
        answer:0
    },
    // 33
    {
        q:'33. Keling sòzining 3- shaxs kòplikdagi shakli……',
        options: [
            'Kelsinlar', 
            'Kelarsiz',
            'Keladi',
            'Kelarmiz'],
        answer:0
    },
    {
        q:'34. Voqea sòzini tòģri tarjimasini toping?',
        options: [
            'Cобытие', 
            'Рассказ',
            'Служить',
            'Роман'],
        answer:0
    },
    {
        q:'35. Chiroyli sòzining antonimini toping?',
        options: [
            'Yomon', 
            'Qo’pol',
            'Xunuk',
            'Toza'],
        answer:2
    },
    {
        q:'36. Gumon olmoshi ifodalangan gapni aniqlang.',
        options: [
            'Bugun biz Samarqandga boramiz.', 
            'Hamma xursand-birgina Saida xomush.',
            'Shu payt allakimning shivirlashi eshitildi	',
            'Nima qilmoqchisiz?'],
        answer:1
    },
    {
        q:'37. Десять рабочих sòzini tòģri tarjimasini toping',
        options: [
            'On ishchilar', 
            'O’n ishchi',
            'O’ninchi ishchi',
            'O’onta ishchilar'],
        answer:1
    },
    {
        q:'38. Mohir sòzining ma’nosini toping?',
        options: [
            'Qashshoq', 
            'Rassom',
            'Mahoratli',
            'Moyillik'],
        answer:2
    },
    {
        q:'39. Poytaxt sòzining tarjimasi…?',
        options: [
            'Cтолица', 
            'Cтрана',
            'Родина',
            'Kрай'],
        answer:0
    },
    {
        q:'40. O‘zbek tilida qo‘sh undoshlar to’g’ri yozilgan qatorni toping?',
        options: [
            'metal,laureat,alkaloid', 
            'kross,poezd,congress',
            'kilogram,projiktor,metall',
            'metall,congress,kilogramm'],
        answer:3
    },
    {
        q:'41. Maqolni davom ettiring: suvni ko’rmay etik …',
        options: [
            'ichma', 
            'yechma',
            'hursand bolma',
            'kiyma'],
        answer:1
    },
    {
        q:'42. O’zbek adabiy tilning asoschisi kim?',
        options: [
            'Alisher Navoiy', 
            'Mirzo Ulugbek',
            'Zahriddin Muhammad Bobur',
            ' M. Qoshg’ariy'],
        answer:0
    },
    {
        q:'43. O’zbek tiliga qachon kirill alifbosi kirib kelgan?',
        options: [
            '1970', 
            '1920',
            '1940',
            '1939'],
        answer:2
    },
    {
        q:'44. Muhim tarixiy sana va bayramlarning nomlari to’g’ri  yozilgan qatorni toping?',
        options: [
            'Hayit bayrami,navro’z bayrami, ”Jasorat” Yodgorligi', 
            'Ramazon Hayiti,Mustaqillik Kuni,”Jasorat” Yodgorligiм',
            '“Jasorat”yodgorligi,ozodlik haykali,Navro’z bayrami',
            'Xotira kuni,Mustaqillik kuni, Ramazon hayiti'],
        answer:3
    },
    {
        q:'45. Ot qanday savollarga javob beradi?',
        options: [
            'kim?nima?qayer?', 
            'nima? qachon?',
            'nima? nimaga?',
            'kim? nima? nima uchun?'],
        answer:0
    },
    {
        q:'46. Atoqli ot keltirilgan qatorni toping ?',
        options: [
            'orol', 
            'Boeing-737',
            'mashina',
            'telefon'],
        answer:1
    },
    {
        q:'47. Qaysi qatorda ilmiy-ommabop uslubda yozilgan gap keltirilgan ?',
        options: [
            'Ertadan bizga o’qish boshlanadi', 
            '"Oyijon ovqatingiz mazali chiqibdi ," -  dedi kichkina qizaloq',
            'Orol - har tomondan suv bilan o’ralgan yerning bir qismi',
            'Uzoqdan bir sharpa ko’rindi'],
        answer:2
    },
    {
        q:'48. Chiziqcha bilan yozish qoidalari qaysi qatorda to’g’ri berilgan?',
        options: [
            'du-kir dukir , asta -sekin , keldiyu- ketdi ', 
            'el-yurt, mehr-shafqat, qovun-tarvuz',
            'kuy-di pishdi , apil ta-pil , minglab – minglab',
            'baxt saodat-li , yoz-di-otdi , menu-sen'],
        answer:1
    },
    {
        q:'49. To’g’ri javobni tanlang?',
        options: [
            'U har doim shu do’kondan narsalarni sotib oladi', 
            'U har doim shu do’kondan narsalarni sotiboladi',
            'U hardoim shu do’kondan narsalarni sotib oladi',
            'U hardoim shu do’kondan narsalarni sotiboladi'],
        answer:0
    },
    // 50
    {
        q:'50. Qo’shma fe’l tog’ri yozilgan qatorni toping?',
        options: [
            'Borib keldi', 
            'Sotiboldi',
            'Vazifani bajardi',
            'Yig’lab yubordi'],
        answer:0
    },
    // 51
    {
        q:'51. To’g’ri ko’chirilgan so’zlarni toping?',
        options: [
            'Pesh-ona,sin-gil', 
            'De- ngiz,mono-grafiya',
            'E-shikdan, a-badiy',
            'Si-ngil,matba-a'],
        answer:1
    },
    {
        q:'52. Qiyosiy daraja shakli qaysi qoshimcha yordamida yasaladi?',
        options: [
            '-dan', 
            '-ning',
            '–roq',
            'eng'],
        answer:2
    },
    {
        q:'53. Belgining mo‘ljaldan ortiqligini, kuchliligini bildirgan sifatlar qanday darajadagi sifatlar hisoblanadi?',
        options: [
            'Orttirma', 
            'Qiyosiy',
            'Oddiy',
            'Kuchli'],
        answer:0
    },
    {
        q:'54. Xususiyatni bildiruvchi sifatlarni toping?',
        options: [
            'Sariq,yashil', 
            'Mehribon,sodda',
            'Katta, kichik',
            'Shirin,mazali'],
        answer:1
    },
    {
        q:'55. Shakl korinishni bildiruvchi sifatlarni toping?',
        options: [
            'Tor, issiq', 
            'Shirin, nordon',
            'Gavdali, uzunchoq',
            'Mehribon,jizzaki'],
        answer:2
    },
    {
        q:'56. Hajm-o’lchovni bildiruvchi sifatlarni toping?',
        options: [
            'Keng, tor', 
            'Achchiq, bemaza',
            'Qizil, kok',
            'Kilo,gramm'],
        answer:3
    },
    {
        q:'57. Tijorat maqsadlarini ko’zlovchi korxona, kompaniya va boshqa xo’jalik tashkiloti…?',
        options: [
            'Oligopoliya', 
            'Firma',
            'Monopoliya',
            'Aksiya'],
        answer:1
    },
    {
        q:'58. Ko’plik qo’shimchalarini aniqlang?',
        options: [
            '-imiz,-ingiz,-lari', 
            '-im,-imiz,-ing',
            '-ing,-ingiz,-lari',
            '-i,-imiz,-imlar'],
        answer:0
    },
    {
        q:'59. Quyidagi so’zni rus tiliga tarjima qiling: Hе видя',
        options: [
            'O’qimay', 
            'Bilmay',
            'Ko’rmay',
            'O’lchamay'],
        answer:2
    },
    {
        q:'60. Chetdan  o’zlashgan so’zlarda ikki undosh kelsa,ular keyingi satrga qay  tartibda ko’chiriladi?',
        options: [
            'birgalikda ko’chiriladi', 
            'alohida ko’chiriladi',
            'hech qanday ko’chirilmaydi',
            'ikki unlidan so’ng ko’chiriladi'],
        answer:0
    },
    {
        q:'61. Quyidagi so’zni rus tiliga tarjima qiling: Ehtiyot bo’l.',
        options: [
            'Извинения', 
            'Прошу извинения',
            'Будь осторожен',
            'Осторожно'],
        answer:2
    },
    {
        q:'62. “Xamsa” asari ketma-ketlikda to‘g’ri berilgan qatorni toping.',
        options: [
            '“Hayrat ul-abror”, “Farhod va Shirin”, “Sabai’ sayyor” “Layli va Majnun”,  va “Saddi Iskandariy”', 
            '“Hayrat ul-abror “Layli va Majnun”, “Farhod va Shirin”,  “Sabai’ sayyor” va “Saddi Iskandariy”',
            '“Hayrat ul-abror”, “Farhod va Shirin”, “Layli va Majnun”, “Sabai’ sayyor” va “Saddi Iskandariy”',
            '“Hayrat ul-abror”, “Farhod va Shirin”, “Saddi Iskandariy” “Layli va Majnun” va “Sabai’ sayyor” '],
        answer:2
    },
    {
        q:'63. Shart mayli qoshimcasi qaysi?',
        options: [
            ' -la', 
            ' -sa',
            ' -ing',
            ' -lar'],
        answer:2
    },
    {
        q:'64. Turdosh otlarini toping?',
        options: [
            'Marsel, shayton, daryo', 
            'Xalq,Yangiyo’l, uy',
            'Deraza,odam,shahar',
            'Zuhra,yer,Oy'],
        answer:2
    },
    {
        q:'65. Qaysi tillar o’zbek tili shakilanishiga asos bo’lgan?',
        options: [
            'xun, turk', 
            'arab, tojik',
            'run, uygur',
            'fransus, turk'],
        answer:0
    },
    {
        q:'66. Kundoshi bilan tugagan so‘zlarga  qo’shimcha qo’shilganda  to’g’ri yozilgan qatorni belgilang?',
        options: [
            'Tokka, yo‘lakkacha', 
            'Kichikgina, bukkan',
            'To‘kgani, ekkin',
            'Zerikguncha, ko‘nikkach'],
        answer:0
    },
    {
        q:'67. Bosh harflar imlosiga ko’ra  to’g’ri yozilgan javobni toping?',
        options: [
            'Birlashgan arab amirligi', 
            'O’rta osiyo,Yangiyo’l',
            'Birlashgan millatlar tashkiloti',
            'Shimoliy Kavkaz, Markaziy Osiyo'],
        answer:3
    },
    {
        q:'68. Quyidagi hikmat muallifini toping: Onalar oyog‘i ostidadur Ravzayi jannatu jinon bog‘i. Ravza bog‘i visolin istar esang, Bo‘l onaning oyog‘in tuprog‘i. ',
        options: [
            'Ibn Sino', 
            'A.Farg’oniy',
            'A. Navoiy',
            'A.Temur'],
        answer:2
    },
    {
        q:'69. Imlo qoidalari asosida yozilgan qo’shma so’zlarni belgilang?',
        options: [
            'Xush  xabar, hamsuhbat, kam quvvat', 
            'Tabriknoma, taklifnoma, bedapoya  orombaxsh',
            'Sovuq mijoz, devsifat, bug‘doy  rang',
            'Ommabop, qabul xona, umum xalq'],
        answer:1
    },
    {
        q:'70. Joy nomlari  to’g’ri yozilgan qator qaysi?',
        options: [
            'Amu-daryo,xalq obod', 
            'Sirdaryo, Koson-soy',
            'Yangiyo‘l, To‘rtko‘l, Mirzacho‘l',
            'Quyi chirchiq, ko’hna Urganch'],
        answer:2
    },
    {
        q:'71. Chiziqcha bilan yozilgan imlo qoidalariga  mos qatorni belgilang?',
        options: [
            'Baland-baland, chopa-chopa, unter-ofitser,', 
            'Hamma-hammasi, dardi- bedavo kilovatt-soat',
            'Ich-ichidan, nuqtayi- nazar,',
            'Uy-uyiga, tarjimayi- hol'],
        answer:0
    },{
        q:'72. Bosh harflar imlosi asosida to’g’ri yozilgan  mansab nomini ko’rsating?',
        options: [
            'O‘zbekistonda Xizmat Ko‘rsatgan Fan Arbobi', 
            'O‘zbekiston Respublikasi Oliy Ta’lim Vaziri',
            'O‘zbekiston Respublikasi Sog’liqni Saqlash Vazir O’rinbosari',
            'O‘zbekiston Respublikasi Oliy Majlisining Raisi'],
        answer:3
    },
    {
        q:'73. Qaysi qatordagi barcha so’zlarda nuqtalar o’rniga a unlisi yoziladi?',
        options: [
            'mu…mmo,  ev…ra, radi…tor', 
            'jangov...r, zalv...rli, tanov...r',
            'hash...rot, z...mon, parv…z',
            'ma   ..do, taq...zo, tam...sha'],
        answer:0
    },
    {
        q:'74. Qo’sh unlilar to’g’ri yozilgan qatorni belgilang?',
        options: [
            'oarta, shuora', 
            'riyoa manfaot,',
            'vakuum, kauchuk',
            'burjua,sanaot'],
        answer:2
    },
    {
        q:'75. Mustaqil so’z turkumlari to’g’ri ko’rsatib o’tilgan qatorni toping?',
        options: [
            'Ot, sifat, son,  fe’l, modal va ravish', 
            'Ot, sifat, son, olmosh, fe’l va ravish',
            'Ot, sifat,  olmosh, fe’l va ravish',
            'ot, sifat, son, olmosh, fe’l, yuklama, bog’lovchi va ravish'],
        answer:1
    },
    {
        q:'76. Sifatning qaysi darajasi predmetdagi bir belgining boshqa predmetga belgidan ortiq ekanligini ifodalaydi?',
        options: [
            'Qiyosiy', 
            'Orttirma',
            'Ozaytirma',
            'Oddiy'],
        answer:1
    },
    {
        q:'77. Roman, qissa, hikoya  kabi janrlar qaysi uslub asosida  yuzaga keladi?',
        options: [
            'Ilmiy  uslub', 
            'Badiiy  uslub',
            'Publitsistik uslub',
            'So’zlashuv uslubi'],
        answer:1
    },
    {
        q:'78. Achchiq, nordon, shirin; Ushbu keltirilgan so’zlar sifatning qaysi turiga mansub?',
        options: [
            'Hajm-o‘lchov, masofa bildiruvchi', 
            'Rang-tus bildiruvchi',
            'Vazn-og‘irlik bildiruvchi',
            'Maza ta’m bildiruvchi'],
        answer:3
    },
    {
        q:'79. Tashviqot-targ’ibot ishlarini olib borishda qo’llanadigan uslub qanday uslub deb ataladi?',
        options: [
            'Ommabop uslub', 
            'Badiiy uslub',
            'Nutq uslubi',
            'Ilmiy uslub'],
        answer:0
    },
    {
        q:'80. Ega qanday so’roqlarga javob bo’lad?',
        options: [
            'Nechta? qancha? nechanchi?', 
            'Qachon? kim?',
            'Kim? nima? qayer?',
            'Qachon? qayer?'],
        answer:2
    },
    {
        q:'81. Otlar  ma’no jihatdan qanday turga bo’linadi?',
        options: [
            'Atoqli va turdosh otlarga bo‘linadi.', 
            'Ko’plik va turdosh otlarga bo‘linadi.',
            'Atoqli va  ko’plik otlarga bo‘linadi.',
            'Atoqli va  mavhum otlarga bo‘linadi.'],
        answer:0
    },
    {
        q:'82. Qanday shabada esyapti? Savolga javobni toping?',
        options: [
            'Chaqqon', 
            'Quvnoq',
            'Mayin',
            'Qudratl'],
        answer:2
    },
    {
        q:'83. Tutuq belgisi to’g’ri qo’yilgan qatorni toping?',
        options: [
            'm’emor, ne’mat, she’r, fe’l; Nu’mon, shul’a', 
            'el’on, e’tibor, baz’an',
            'in’om, san’at, qa’tiy, ma’sul',
            'ba’zan, ma’yus, ta’zim; ra’y, ta’b'],
        answer:3
    },
    {
        q:'84. To’g’ri javobni tanlang?',
        options: [
            'bitta ko‘ylak besh yuz ming so‘m turadi', 
            'bitta-ko‘ylak besh yuz ming so‘m turadi',
            'bitta ko‘ylak beshyuzming so‘m turadi',
            'bitta  ko‘ylak besh-yuz ming so‘m turadi'],
        answer:0
    },
    {
        q:'85. Найдите изъявительное наклонение?',
        options: [
            'shart mayli', 
            'buyruq may',
            'aniqlik mayli',
            'xabar mayli'],
        answer:2
    },
    {
        q:'86. Oxirgi bo‘g‘inida i qatnashadigan so‘zni toping.',
        options: [
            'botir', 
            'radiatir',
            'termis',
            'direktir'],
        answer:0
    },
    {
        q:'87. Ma’lum hududdagina ishlatilib, faqat shu yerda yashovchi kishilarga tushunarli bo‘lgan so‘zlar qanday nomlanadi?',
        options: [
            'paronimlar', 
            'shevaga xos so’zlar',
            'terminlar',
            'atamalar'],
        answer:1
    },
    {
        q:'88. Lahja atamasi qanday tushunchani anglatadi?',
        options: [
            'ma’lum shevaning kichik bir qismi', 
            'xalq tilining ma’lum bir meyorlarga keltirilgan shakli',
            '«sheva» atamasi sinonimi sifatida ishlatiladi',
            'bir-birga yaqin bo‘lgan shevalar yig‘indisi'],
        answer:3
    },
    {
        q:'89. Xalq shevalarning qanday shakli mavjud?',
        options: [
            'Faqat yozma shakli', 
            'Faqat og‘zaki shakli',
            'adabiy til shakli',
            'umumxalq tili va adabiy tili shakli'],
        answer:3
    },
    {
        q:'90. Sirg‘aluvchi J tovushini ifoda etuvchi so‘zlar qatorini aniqlang?',
        options: [
            'jimjit, g‘ijjak', 
            'jo‘yak, garaj',
            'vijdon, ajdod',
            'jumla, janob'],
        answer:2
    },
    {
        q:'91. O’zbek adabiy tilning boyishida shevalar qanday manba hisoblanadi?',
        options: [
            'shevalar adabiy til uchun manba bo’la olmaydi.', 
            'tashqi manba',
            'B va D',
            'ichki manba'],
        answer:3
    },
    {
        q:'92. O’zbek tili qaysi til oilasiga mansub?',
        options: [
            'Roman', 
            'Oltoy',
            'Hind',
            'Eron'],
        answer:1
    },
    {
        q:'93. Ng bir tovushni bildirmaydigan so’zni toping.',
        options: [
            'dengiz', 
            'bordingiz',
            'menga',
            'yangi'],
        answer:1
    },
    {
        q:'94. Sondan keyin kelgan otlar qaysi qo’shimchani olmaydi?',
        options: [
            ' -lar', 
            ' -oq',
            ' -i',
            ' -li'],
        answer:1
    },
    {
        q:'95. Nutq nima?',
        options: [
            'bilim darajasini korsatuvchi mavqei', 
            'notiqlik sanati',
            'insoniy tuyg’ular tajribalar uzatish usuli',
            'fikrlarni ifodalash jarayoni'],
        answer:3
    },
    {
        q:'96. Murakkab son qaysi qatorda tog’ri yozilgan?',
        options: [
            'seminar o’n birga qadar davom etdi', 
            'yigirma-uch yoshinda uylandim',
            'besh va tort nafar do’stlarim bor',
            'yuz yoshli chinorla kamayib ketmoqda'],
        answer:0
    },
    {
        q:'97. To’g’ri javobni tanlang?',
        options: [
            'bu to’q-qizil olma', 
            'bu to’q qizil olma',
            'bu to’qqizil olma',
            'bu to’q qizil- olma'],
        answer:1
    },
    {
        q:'98. Bo’g’in to’g’ri ko’chirilgan qatorni belgilang?',
        options: [
            'va’- da,mash’-al', 
            'sin-gil,ma-‘rifat',
            'matba-a, 18-ta daftar',
            'diag-ramma, mudof-aa'],
        answer:0
    },
    {
        q:'99. Alisher Navoiy qachon tug‘ilgan?',
        options: [
            '1441-yil 7-fevral', 
            '1405-yil 8-aprel',
            '1441-yil 9-fevral',
            '1336-yil 9-fevral'],
        answer:2
    },
    {
        q:'100. Bo‘lajak shoirning she’riyatdagi birinchi ustozlari kimlar edi?',
        options: [
            'Xusayn Boyqaro', 
            'Amakilari',
            'A va B',
            'Tog’alari'],
        answer:2
    }
]
