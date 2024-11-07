// const langArray = {

// };
// const select = document.querySelectorAll('.lang');
// const allLang = ['uz', 'ru', 'en'];

// select.forEach((el) => {
//   el.addEventListener('click', () => {
//     const lang = el.alt;
//     // Сохраняем выбранный язык в LocalStorage
//     localStorage.setItem('language', lang);
//     changeURLLanguage(lang);
//   });
// });

// function changeURLLanguage(lang) {
//   // Изменяем хеш URL на выбранный язык
//   location.href = window.location.pathname + '#' + lang;
//   location.reload();
// }

// function changeLanguage() {
//   // Получаем выбранный язык из LocalStorage
//   let lang = localStorage.getItem('language') || 'ru'; // По умолчанию 'ru'

//   if (!allLang.includes(lang)) {
//     lang = 'ru';
//   }

//   select.forEach((el) => {
//     el.alt === lang
//       ? el.classList.add('active')
//       : el.classList.remove('active');
//   });

//   // Обновляем контент страницы на выбранный язык
//   for (let key in langArray) {
//     let elem = document.querySelector('.lng-' + key);
//     if (elem) {
//       elem.innerHTML = langArray[key][lang] || ''; // Добавлено || '' для избежания ошибок
//     }
//   }
// }

// // Вызываем при загрузке страницы
// changeLanguage();

const langArray = {
  // Заголовок страницы
  title: {
    uz: 'AKFA TERRACE SISTEMALARI',
    ru: 'AKFA TERRACE SYSTEMS',
    en: 'AKFA TERRACE SYSTEMS',
  },
  call: {
    uz: "Biz bilan bog'laning ",
    ru: 'Заказать обратный звонок',
    en: 'Contact us',
  },
  request: {
    uz: 'ARIZA QOLDIRISH!',
    ru: 'ОСТАВИТЬ ЗАЯВКУ!',
    en: 'SEND A REQUEST!',
  },
  main: {
    uz: 'Bosh sahifa',
    ru: 'Главная',
    en: 'Home',
  },
  main2: {
    uz: 'Bosh sahifa',
    ru: 'Главная',
    en: 'Home',
  },
  goods: {
    uz: 'Maxsulotlar',
    ru: 'Продукия',
    en: 'Goods',
  },
  goods2: {
    uz: 'Maxsulotlar',
    ru: 'Продукия',
    en: 'Goods',
  },
  galery: {
    uz: 'Galereya',
    ru: 'Галерея',
    en: 'Galery',
  },
  galery2: {
    uz: 'Galereya',
    ru: 'Галерея',
    en: 'Galery',
  },
  about: {
    uz: 'Biz haqimizda',
    ru: 'О нас',
    en: 'About us',
  },
  about2: {
    uz: 'Biz haqimizda',
    ru: 'О нас',
    en: 'About us',
  },
  contacts: {
    uz: 'Kontaktlarimiz',
    ru: 'Контакты',
    en: 'Contacts',
  },
  contacts2: {
    uz: 'Kontaktlarimiz',
    ru: 'Контакты',
    en: 'Contacts',
  },
  systems: {
    uz: 'GILYATINA SISTEMALARI',
    ru: 'ГИЛЬОТИННЫЕ СИСТЕМЫ',
    en: 'GUILLOTINE SYSTEMS',
  },
  systems_3: {
    uz: 'Pergola',
    ru: 'Пергола',
    en: 'Pergolas',
  },
  systems_4: {
    uz: 'Gilyatina',
    ru: 'Гильятина',
    en: 'Guillotine',
  },
  adress: {
    uz: `Bobur ko'chasi 1 uy`,
    ru: 'Улица Бобура дом №1',
    en: 'No. 1 Bobura Street',
  },
  work_time: {
    uz: `Du. - Sh.: 9:00 dan 18:00 gacha.`,
    ru: 'Пн. - Сб.: 9:00 до 18:00',
    en: 'Mon. - Sat.: 9:00 to 18:00',
  },
  perilla: {
    uz: 'Shisha perillalar',
    ru: 'Стеклянные периллы',
    en: 'Glass railings',
  },
  autodoor: {
    uz: 'Sensor eshiklar',
    ru: 'Сенсорные двери',
    en: 'Sensor doors',
  },
  description: {
    uz: "AKFA Innovation kompaniyasining gilyotinli oynasi - bar, restoran va mehmonxonalarning teraslari va verandalari uchun optimal echim. Vertikal ravishda ko'tarilgan derazalar mehmonlarni kuchli shamollardan, jazirama quyoshdan, yomg'irdan va changdan himoya qiladi, shuningdek mehmonlar xavfsizligi va mol-mulk xavfsizligini ta'minlashga yordam beradi.",
    ru: 'Оптимальное решение для террас и веранд баров, ресторанов и гостиниц. Вертикально поднимающиеся окна защитят гостей от сильного ветра, палящего солнца, дождя и пыли, а так же помогут обеспечить безопасность гостей и сохранность имущества.',
    en: 'Guillotine glazing from AKFA Innovation is the optimal solution for terraces and verandas of bars, restaurants and hotels. Vertically rising windows will protect guests from strong winds, scorching sun, rain and dust, as well as help to ensure the safety of guests and the safety of property.',
  },
  description_2: {
    uz: 'Tentali pergolalar – ochiq makonni zonalashtirishning eng samarali va amaliy usullaridan biridir. Pergola yordamida qishloq uyi hovlisida yoki jamoat hududida dam olish zonasini tashkil qilish mumkin. Tento soyabon yoritish darajasini sozlashga, quyosh nurlaridan va yomg‘irdan himoyalanishga yordam beradi.',
    ru: 'Тентовые перголы — один из наиболее эффективных и практичных видов зонирования открытого пространства. С помощью перголы можно обустроить зону отдыха во дворе загородного дома или на общественной территории. Тентовый навес позволяет отрегулировать уровень освещения и защититься от солнечных лучей и дождей.',
    en: 'Tent pergolas are one of the most effective and practical ways to zone open spaces. With a pergola, you can set up a relaxation area in the yard of a country house or in a public area. The tent canopy allows you to adjust the level of lighting and provides protection from sunlight and rain.',
  },
  lmore: {
    uz: `» Ko'proq bilish «`,
    ru: '» Узнать больше «',
    en: '» See more «',
  },
  less: {
    uz: `» Kamroq «`,
    ru: '» Меньше «',
    en: '» Less «',
  },
  systems2: {
    uz: 'PERGOLA',
    ru: 'ПЕРГОЛА',
    en: 'PERGOLAS',
  },
  description2: {
    uz: "Pergola tizimi - bu alyuminiy soyabon bo'lib, u soya beradi va landshaft dizaynining o'ziga xos elementini tashkil qiladi. Ushbu tizim teraslar, kafelarda yozgi maydonlar, xususiy uylarda gazebolar qurilishida qo'llaniladi. Pergolalar sizni hududni chegaralashga imkon beradi, shu bilan uni bir nechta joyga ajratadi.",
    ru: 'Тентовые перголы — один из наиболее эффективных и практичных видов зонирования открытого пространства. С помощью перголы можно обустроить зону отдыха во дворе загородного дома или на общественной территории. Тентовый навес позволяет отрегулировать уровень освещения и защититься от солнечных лучей и дождей.',
    en: 'The pergola system is an aluminum canopy that provides shade to the area and forms an original element of landscape design. This system is used in the construction of terraces, summer areas in cafes, gazebos in private houses. Pergolas allow you to delimit the area, thereby dividing it into several locations',
  },
  systems3: {
    uz: 'SLIDE MASTER',
    ru: 'SLIDE MASTER',
    en: 'SLIDE MASTER',
  },
  description_3: {
    uz: "SlideMaster tizimi eshiklar yoki deraza tuzilmalarining silliq va shovqinsiz harakatini ta'minlaydi, bu esa uni zamonaviy ichki va tashqi makonlar uchun ideal qiladi. Ushbu tizim joylarni zonalash va shaffof bo'shliqlar yaratish uchun mos keladi, shuningdek, avtomatik boshqaruv mexanizmlari tufayli foydalanishda osonlik va qulaylikni ta'minlaydi.",
    ru: 'Система SlideMaster обеспечивает плавное и бесшумное скольжение дверей или оконных конструкций, что делает её идеальной для современных интерьеров и экстерьеров. Эта система подходит для зонирования помещений и создания прозрачных перегородок, а также обеспечивает легкость и комфорт использования благодаря автоматическим механизмам управления.',
    en: 'The SlideMaster system provides smooth and silent sliding of doors or window structures, making it ideal for modern interiors and exteriors. This system is suitable for zoning spaces and creating transparent partitions, as well as ensuring ease and comfort of use thanks to automatic control mechanisms.',
  },
  description3: {
    uz: "Issiqlik izolyatsiyasiga ega SlideMaster surilma tizimi — balkon uchun oyna tizimlarining yangi standarti. SlideMaster surilma tizimi issiqlik izolyatsiyasi, qulaylik va estetika nuqtai nazaridan yangilandi. Sizning balkonlaringiz, qishki bog'laringiz va restoranlaringizni qulay va shinam joyga aylanadi.",
    ru: 'SlideMaster - Раздвижная система со стеклопакетом - повышает стандарты систем остекления балконов. Раздвижные системы были улучшены с точки зрения изоляции, комфорта и эстетики. Благодаря этому, превратят ваши балконы, зимние сады и рестораны в удивительно теплые помещения.',
    en: 'SlideMaster - a thermally insulated sliding system - raises the standards of balcony glazing systems. Sliding systems have been updated in terms of thermal insulation, comfort and aesthetics and transform your balconies, winter gardens and restaurants into amazing living areas.',
  },
  systems5: {
    uz: 'Shisha perilla',
    ru: 'Стеклянные перила',
    en: 'Glass railings',
  },
  description_5: {
    uz: "Shisha perilla ichki va tashqi zinapoyalar, balkonlar va teraslar uchun zamonaviy va xavfsiz yechimdir. Ular makon illyuziyasini yaratadi, maksimal shaffoflikni ta'minlaydi va zamonaviy ko'rinish beradi.",
    ru: 'Стеклянные перила — это стильное и безопасное решение для внутренних и внешних лестниц, балконов и террас. Они создают иллюзию пространства, обеспечивая максимальную прозрачность и современный внешний вид.',
    en: 'Glass railings are a stylish and safe solution for interior and exterior stairs, balconies, and terraces. They create an illusion of space while providing maximum transparency and a modern appearance.',
  },
  whywe: {
    uz: 'NEGA AYNAN BIZ!',
    ru: 'ПОЧЕМУ ВЫБИРАЮТ ИМЕННО  НАС!',
    en: 'WHY CHOOSE US!',
  },
  measuring: {
    uz: "O'LCHOVLAR BEPUL",
    ru: 'ЗАМЕРЫ БЕСПЛАТНО',
    en: 'FREE MEASURMENTS',
  },
  guarantee: {
    uz: '5 YILGA KAFOLAT',
    ru: '5 ЛЕТ ГАРАНТИИ',
    en: '5 YEARS WARRANTY',
  },
  expiration: {
    uz: 'QISQA MUDDATLAR',
    ru: 'КОРОТКИЕ СРОКИ',
    en: 'SHORT TERMS',
  },
  standarts: {
    uz: 'GOST STANDARTLARI',
    ru: 'СТАНДАРТЫ ГОСТ',
    en: 'GOST STANDARTS',
  },
  montage: {
    uz: 'BEPUL MONTAJ',
    ru: 'МОНТАЖ БЕСПЛАТНО',
    en: 'FREE INSTALLATION',
  },
  out_projects: {
    uz: 'Bizning loyihalarimiz',
    ru: 'Наши проекты',
    en: 'Our projects',
  },
  project1: {
    uz: 'Mahsulot : Gilyatina',
    ru: 'Продукция: Гильятина',
    en: 'Product: Guillotine',
  },
  descrip_project1: {
    uz: `<strong>Tavsif: </strong> Gilyotin tizimi ko'p qavatli binolar uchun zamonaviy yechim bo'lib, avtomatlashtirilgan boshqaruv bilan yuqoriga-pastga ochiladigan oyna strukturasidir. Tizim keng ko'rinish va yuqori darajadagi izolyatsiyani ta'minlaydi, energiya tejamkorligi va xavfsizlikni oshiradi. Oynalar mustahkam va ob-havoning har qanday sharoitlariga bardosh bera oladi, shu bilan birga estetik jihatdan ham chiroyli ko'rinish beradi.`,
    ru: '<strong >Описание:</strong> Гильотинная система — это современное решение для многоэтажных зданий, представляющее собой окна с автоматическим управлением, которые поднимаются и опускаются. Система обеспечивает широкий обзор и высокую тепло- и звукоизоляцию, повышая энергосбережение и безопасность. Окна прочны и устойчивы к различным погодным условиям, при этом эстетически дополняют внешний вид здания.',
    en: '<strong >Description:</strong> The Guillotine system is a modern solution for multi-story buildings, featuring an automated window that opens and closes vertically. The system offers a wide view and superior insulation, enhancing energy efficiency and security. The windows are durable and weather-resistant, while also adding an aesthetically pleasing touch to the building’s appearance.',
  },
  project2: {
    uz: 'Mahsulot : SLIDEMASTER',
    ru: 'Продукция: SLIDEMASTER',
    en: 'Product: SLIDEMASTER',
  },
  descrip_project2: {
    uz: "<strong>Tavsif: </strong> SlideMaster tizimi — bu ko'p qavatli binolar uchun yuqori sifatli siljiydigan eshik va deraza tizimi. Ushbu tizim oson boshqaruv va ko‘p fazoli makon yaratishga imkon beradi. SlideMaster keng ochilish imkoniyatini ta’minlaydi, shu bilan birga, issiqlik va ovoz izolyatsiyasini saqlab qoladi. Mustahkam tuzilma va zamonaviy dizayn har qanday interyer yoki eksteryerni mukammal tarzda to‘ldiradi.",
    ru: '<strong>Описание:</strong> Система SlideMaster — это высококачественная раздвижная система для окон и дверей многоэтажных зданий. Она обеспечивает лёгкость управления и максимальное использование пространства. SlideMaster предоставляет широкие проёмы, сохраняя тепло- и звукоизоляцию. Прочная конструкция и современный дизайн идеально дополняют любой интерьер или экстерьер.',
    en: '<strong>Description:</strong> The SlideMaster system is a premium sliding window and door solution for multi-story buildings. It allows easy operation and maximizes space usage. SlideMaster offers wide openings while maintaining thermal and sound insulation. Its durable structure and modern design perfectly complement any interior or exterior.',
  },
  project3: {
    uz: 'Mahsulot : PERGOLA',
    ru: 'Продукция: PERGOLA',
    en: 'Product: PERGOLA',
  },
  descrip_project3: {
    uz: '<strong>Tavsif: </strong> Tently pergola tizimi — ochiq havoda qulay va har xil ob-havo sharoitlaridan himoya qilingan makon yaratish uchun innovatsion echimdir. U quyoshli kunlarda soyani ta’minlab, yomg‘irdan himoya qilib, haroratni saqlashga yordam beradi. Mustahkam konstruksiya va zamonaviy dizayn har qanday muhitga mos keladi, uni terrasalar, kafelar va qishloq uylari uchun ajoyib tanlovga aylantiradi.',
    ru: '<strong>Описание:</strong> Система тентовой перголы — это инновационное решение для создания комфортного и защищённого от погодных условий пространства на открытом воздухе. Она обеспечивает защиту от солнца и дождя, сохраняя прохладу в жаркие дни и уют в ненастные. Прочная конструкция и стильный дизайн перголы легко впишутся в любой ландшафт, делая её идеальным выбором для террас, кафе и загородных домов.',
    en: '<strong>Description:</strong>The canopy pergola system is an innovative solution for creating a comfortable, weather-protected outdoor space. It provides shade from the sun and rain, keeping it cool on sunny days and cozy in unfavorable weather. The robust structure and modern design blend seamlessly into any setting, making it an ideal choice for terraces, cafes, and countryside homes.',
  },
  project4: {
    uz: "loyiha-4: Xususiy bog'",
    ru: 'Проект 4: Приватный сад',
    en: 'Project 4: Private garden',
  },
  descrip_project4: {
    uz: "<strong>Tavsif: </strong> ushbu loyihada biz tabiiy materiallardan maksimal darajada foydalanadigan yopiq terastani ishlab chiqdik. Mijoz ko'katlar bilan o'ralgan dam olish joyini yaratmoqchi edi. Natijada bog'ning umumiy dizayniga juda mos keladigan qulay teras.",
    ru: '<strong>Описание:</strong> В этом проекте мы разработали закрытую террасу с максимальным использованием природных материалов. Клиент хотел создать пространство для релаксации, окруженное зеленью. В результате получилась уютная терраса, идеально вписывающаяся в общий дизайн сада.',
    en: '<strong>Description:</strong> In this project, we have developed an enclosed terrace with maximum use of natural materials. The client wanted to create a relaxation space surrounded by greenery. The result is a cozy terrace that fits perfectly into the overall design of the garden.',
  },
  partners: {
    uz: 'Bizning hamkorlarimiz',
    ru: 'Наши партнеры',
    en: 'Our partners',
  },
  feed_back: {
    uz: 'Qayta aloqa!',
    ru: 'Обратная связь!',
    en: 'Feedback!',
  },
  submit: {
    uz: 'Yuborish',
    ru: 'Отправить',
    en: 'Submit',
  },
  about_company: {
    uz: 'Kompaniya haqida',
    ru: 'О компании',
    en: 'About company',
  },
  our_products: {
    uz: 'Bizning maxsulotlar',
    ru: 'Наши продукты',
    en: 'Our products',
  },
  social: {
    uz: 'Ijtimoiy tarmoqlar',
    ru: 'Наши соц.сети',
    en: 'Social networks',
  },
  contact_info: {
    uz: `Bog'lanish`,
    ru: 'Контактные данные',
    en: 'Contant Info',
  },
  description_system1: {
    uz: `Vertikal siljiydigan avtomatik gilyotina - bu zanjirli motorli shisha tizim bo‘lib, ko‘chma qo‘ltiq va masofadan boshqarish funksiyasiga ega. Ushbu tizim mehmonxonalar, kafelar, restoranlar, balkonlar, stadionlar va boshqa joylarda oyna panjarasi sifatida ishlatilishi mumkin. Avtomatik Gilyotina oyna tizimida qo‘llangan "Hand-Safe Profile" kabi ko‘plab patentlangan innovatsiyalar mavjud, bu esa barmoqlar/qo‘llarning qisilib qolishini oldini oladigan maxsus profildir. Tizimda 8 mm qalinlikdagi temperlangan monoshisha yoki ikki qatlamli shisha paket ishlatiladi. Gilyotina o‘zining noyob yechimlari bilan gilyotina tizimlarida maksimal issiqlik izolyatsiyasini ta’minlaydi.`,
    ru: 'Вертикально-сдвижная автоматическая гильотина - это система моторизованного цепного остекления с подвижным поручнем с дистанционным управлением.. Система может быть использована в качестве подвижных перил при остекления гостиниц, кафе, ресторанов, балконов, стадионов и т. д. В, автоматической системе остекления Гильятина, есть много запатентованных инноваций, таких как ”Hand-Safe Profile” который является специально разработанным профилем для предотвращения защемления пальцев / рук. Заполнением в системе служит 8 мм закаленное моностекло или стеклопакет. Гильятина предлагает максимальную теплоизоляцию среди гильотинных систем остекления с собственными уникальными решениями.',
    en: 'The vertical sliding automatic guillotine is a motorized chain glass system with a movable handrail and remote control. This system can be used as mobile railings for glazing in hotels, cafes, restaurants, balconies, stadiums, and more. The Guillotine automatic glazing system includes many patented innovations, such as the "Hand-Safe Profile," a specially designed profile that prevents fingers/hands from getting caught. The system is filled with 8 mm tempered single glass or double-glazed units. The Guillotine offers maximum thermal insulation among guillotine glazing systems with its unique solutions.',
  },
  description_system2: {
    uz: `Tentli pergolalar ochiq makonlarni zonalash uchun eng samarali va amaliy usullardan biridir. Pergola yordamida siz qishloq uyining hovlisida yoki jamoat joyida dam olish zonasini tashkil qilishingiz mumkin. Tentli soyabon yoritish darajasini sozlash va quyosh nurlari hamda yomg‘irdan himoyalanish imkonini beradi. Polivinilxlorid asosidagi material suvga chidamli, olovga chidamli bo‘lib, ultrabinafsha nurlanishiga yuqori qarshilik ko‘rsatadi. Maxsus dizayn tufayli pergola ostida eng issiq kunlarda ham qulay bo‘ladi — soyabonli konstruktsiya ostida havo 7-10 daraja salqinroqdir. Tentli pergola sodda dizayn va mustahkam konstruktsiyaga ega, u quyosh, yomg‘ir va shamoldan ishonchli himoya qiladi va uni boshqarish oson.`,
    ru: 'Тентовые перголы — один из наиболее эффективных и практичных видов зонирования открытого пространства. С помощью перголы можно обустроить зону отдыха во дворе загородного дома или на общественной территории. Тентовый навес позволяет отрегулировать уровень освещения и защититься от солнечных лучей и дождей.Материал на основе поливинилхлорида — водонепроницаемый, огнестойкий, обладает повышенной устойчивостью ультрафиолетовому излучению. Благодаря особой конструкции под перголой будет комфортно находиться даже в самые жаркие дни — под навесной конструкцией воздух прохладнее на 7-10 градусов. Тентовая пергола обладает лаконичным дизайном и прочной конструкцией, она надежно защищает от солнца, дождя и ветра, а также проста в управлении.',
    en: 'Tent pergolas are one of the most effective and practical ways to zone open spaces. With a pergola, you can create a relaxation area in the yard of a country house or in a public space. The tent canopy allows you to adjust the level of lighting and protect against sunlight and rain. The material based on polyvinyl chloride is waterproof, fire-resistant, and has enhanced resistance to ultraviolet radiation. Thanks to the special design, it will be comfortable to stay under the pergola even on the hottest days—the air under the canopy is 7-10 degrees cooler. The tent pergola features a sleek design and sturdy construction, reliably protecting against sun, rain, and wind, and it is easy to operate.',
  },
  system_desc: {
    uz: `Sistemaning tavsifi`,
    ru: 'Описание системы ',
    en: 'System description',
  },
  system_desc2: {
    uz: `Sistemaning tavsifi`,
    ru: 'Описание системы ',
    en: 'System description',
  },
  system_desc3: {
    uz: `Sistemaning tavsifi`,
    ru: 'Описание системы ',
    en: 'System description',
  },
  system_desc4: {
    uz: `Sistemaning tavsifi`,
    ru: 'Описание системы ',
    en: 'System description',
  },
  system_desc5: {
    uz: `Sistemaning tavsifi`,
    ru: 'Описание системы ',
    en: 'System description',
  },
  system_desc6: {
    uz: `Sistemaning tavsifi`,
    ru: 'Описание системы ',
    en: 'System description',
  },
  specif: {
    uz: `Texnik xususiyatlar`,
    ru: 'Характеристики ',
    en: 'Specifications',
  },
  specif2: {
    uz: `Texnik xususiyatlar`,
    ru: 'Характеристики ',
    en: 'Specifications',
  },
  specif3: {
    uz: `Texnik xususiyatlar`,
    ru: 'Характеристики ',
    en: 'Specifications',
  },
  specif4: {
    uz: `Texnik xususiyatlar`,
    ru: 'Характеристики ',
    en: 'Specifications',
  },
  specif5: {
    uz: `Texnik xususiyatlar`,
    ru: 'Характеристики ',
    en: 'Specifications',
  },
  specif6: {
    uz: `Texnik xususiyatlar`,
    ru: 'Характеристики ',
    en: 'Specifications',
  },
  info1: {
    uz: `Qo‘llanilish sohasi`,
    ru: 'Область применения ',
    en: 'Applications',
  },
  info1_target: {
    uz: `Xususiy sektor`,
    ru: 'Частный сектор',
    en: 'Private Sector',
  },
  info2: {
    uz: `Tizim sinfi`,
    ru: 'Класс системы ',
    en: 'System Class',
  },
  info2_target: {
    uz: `Xususiy sektor`,
    ru: 'Премиум',
    en: 'Premium',
  },
  info3: {
    uz: `Maksimal kenglik`,
    ru: 'Максимальная ширина',
    en: 'Maximum Width',
  },
  info3_target: {
    uz: `4 500 mm`,
    ru: '4 500 мм',
    en: '4 500 mm',
  },
  info4: {
    uz: `Maksimal balandlik`,
    ru: 'Максимальная высота',
    en: 'Maximum Height',
  },
  info4_target: {
    uz: `3 000 mm`,
    ru: '3 000 мм',
    en: '3 000 mm',
  },
  info5: {
    uz: `Steklopaket qalinligi`,
    ru: 'Толщина стеклопакета',
    en: 'Glass Unit Thickness',
  },
  info5_target: {
    uz: `8 мм, 20 мм (4+12+4)`,
    ru: '8 мм, 20 мм (4+12+4)',
    en: '8 мм, 20 мм (4+12+4)',
  },
  info6: {
    uz: `Maksimal panjaralar soni`,
    ru: 'Максимальное кол-во панелей',
    en: 'Maximum Number of Panels',
  },
  info6_target: {
    uz: `3 panel`,
    ru: '3 панеля',
    en: '3 panels',
  },

  pergola_info1: {
    uz: `Boshqarish variantlari`,
    ru: 'Варианты управления ',
    en: 'Control options',
  },
  pergola_target1: {
    uz: `Avtomatika va pultlar`,
    ru: 'Автоматика и пульты',
    en: 'Automation and remotes.',
  },
  pergola_info2: {
    uz: `Sektsiyalar soni`,
    ru: 'Количество секций',
    en: 'Number of sections.',
  },
  pergola_target2: {
    uz: `2 sektsiya, 3 sektsiya`,
    ru: '2 секции, 3 секции',
    en: '2 section, 3 section',
  },
  pergola_info3: {
    uz: `Maksimal kenglik`,
    ru: 'Максимальная ширина',
    en: 'Maximum Width',
  },
  pergola_target3: {
    uz: `6 000 mm`,
    ru: '6 000 мм',
    en: '6 000 mm',
  },
  pergola_info4: {
    uz: `Maksimal balandlik`,
    ru: 'Максимальная высота',
    en: 'Maximum Height',
  },
  pergola_target4: {
    uz: `3 500 mm`,
    ru: '3 500 мм',
    en: '3 500 mm',
  },
  pergola_info5: {
    uz: `Tent`,
    ru: 'Тент',
    en: 'Awning',
  },
  pergola_target5: {
    uz: `8 мм, 20 мм (4+12+4)`,
    ru: '8 мм, 20 мм (4+12+4)',
    en: '8 мм, 20 мм (4+12+4)',
  },
  pergola_info6: {
    uz: `Maksimal panjaralar soni`,
    ru: 'Максимальное кол-во панелей',
    en: 'Maximum Number of Panels',
  },
  pergola_target6: {
    uz: `3 panel`,
    ru: '3 панеля',
    en: '3 panels',
  },

  // Кнопки и общие тексты
  call: {
    uz: "Biz bilan bog'laning",
    ru: 'Заказать обратный звонок',
    en: 'Contact us',
  },
  request: {
    uz: 'ARIZA QOLDIRISH!',
    ru: 'ОСТАВИТЬ ЗАЯВКУ!',
    en: 'SEND A REQUEST!',
  },
  main: {
    uz: 'Bosh sahifa',
    ru: 'Главная',
    en: 'Home',
  },
  main2: {
    uz: 'Bosh sahifa',
    ru: 'Главная',
    en: 'Home',
  },
  goods: {
    uz: 'Mahsulotlar',
    ru: 'Продукция',
    en: 'Products',
  },
  goods2: {
    uz: 'Mahsulotlar',
    ru: 'Продукция',
    en: 'Products',
  },
  about: {
    uz: 'Biz haqimizda',
    ru: 'О нас',
    en: 'About us',
  },
  about2: {
    uz: 'Biz haqimizda',
    ru: 'О нас',
    en: 'About us',
  },
  contacts: {
    uz: 'Kontaktlar',
    ru: 'Контакты',
    en: 'Contacts',
  },
  contacts2: {
    uz: 'Kontaktlar',
    ru: 'Контакты',
    en: 'Contacts',
  },
  our_products: {
    uz: 'Bizning Mahsulotlar',
    ru: 'Наши Продукты',
    en: 'Our Products',
  },
  learn_more: {
    uz: "Ko'proq bilish",
    ru: 'Узнать больше',
    en: 'Learn more',
  },
  about_company: {
    uz: 'Kompaniya haqida',
    ru: 'О компании',
    en: 'About company',
  },
  social: {
    uz: 'Ijtimoiy tarmoqlar',
    ru: 'Наши соц.сети',
    en: 'Social networks',
  },
  contact_info: {
    uz: `Bog'lanish`,
    ru: 'Контактные данные',
    en: 'Contact Info',
  },
  adress: {
    uz: `Bobur ko'chasi 1 uy`,
    ru: 'Улица Бобура дом №1',
    en: 'No. 1 Bobur Street',
  },
  work_time: {
    uz: `Du. - Sh.: 9:00 dan 18:00 gacha.`,
    ru: 'Пн. - Сб.: 9:00 до 19:00',
    en: 'Mon. - Sat.: 9:00 to 19:00',
  },
  perilla: {
    uz: 'Shisha perila',
    ru: 'Стеклянные перила',
    en: 'Glass railings',
  },
  autodoor: {
    uz: 'Sensor eshiklar',
    ru: 'Сенсорные двери',
    en: 'Sensor doors',
  },
  // Продукт 1
  systems: {
    uz: 'GILYOTINA SISTEMALARI',
    ru: 'ГИЛЬОТИННЫЕ СИСТЕМЫ',
    en: 'GUILLOTINE SYSTEMS',
  },
  description: {
    uz: "Barlar, restoranlar va mehmonxonalar teras va verandalar uchun optimal yechim. Vertikal ko'tariladigan derazalar mehmonlarni kuchli shamoldan, qizdiruvchi quyoshdan, yomg'irdan va changdan himoya qiladi, shuningdek, mehmonlarning xavfsizligini va mulkning saqlanishini ta'minlashga yordam beradi.",
    ru: 'Оптимальное решение для террас и веранд баров, ресторанов и гостиниц. Вертикально поднимающиеся окна защитят гостей от сильного ветра, палящего солнца, дождя и пыли, а также помогут обеспечить безопасность гостей и сохранность имущества.',
    en: 'An optimal solution for terraces and verandas of bars, restaurants, and hotels. Vertically lifting windows will protect guests from strong winds, scorching sun, rain, and dust, as well as help ensure the safety of guests and preservation of property.',
  },
  system_desc: {
    uz: 'Sistemaning tavsifi <span>01</span>',
    ru: 'Описание системы <span>01</span>',
    en: 'System description <span>01</span>',
  },
  description_system1: {
    uz: "Vertikal siljiydigan avtomatik gilyotina — bu zanjirli motorli shisha tizim bo'lib, masofadan boshqarish pulti bilan harakatlanuvchi qo'l dayamasiga ega. Tizim mehmonxonalar, kafelar, restoranlar, balkonlar, stadionlar va boshqalarda harakatlanuvchi perila sifatida ishlatilishi mumkin. Avtomatik gilyotina shisha tizimida barmoqlar/qo'llarni qisib qolishdan himoya qilish uchun maxsus ishlab chiqilgan 'Hand-Safe Profile' kabi ko'plab patentlangan innovatsiyalar mavjud. Tizimda 8 mm qalinlikdagi temperlangan monoshisha yoki shisha paket ishlatiladi. Gilyotina o'zining noyob yechimlari bilan gilyotina shisha tizimlari orasida maksimal issiqlik izolyatsiyasini taklif etadi.",
    ru: 'Вертикально-сдвижная автоматическая гильотина — это система моторизованного цепного остекления с подвижным поручнем с дистанционным управлением. Система может быть использована в качестве подвижных перил при остеклении гостиниц, кафе, ресторанов, балконов, стадионов и т. д. В автоматической системе остекления гильотина есть много запатентованных инноваций, таких как «Hand-Safe Profile», который является специально разработанным профилем для предотвращения защемления пальцев/рук. Заполнением в системе служит 8 мм закаленное моностекло или стеклопакет. Гильотина предлагает максимальную теплоизоляцию среди гильотинных систем остекления с собственными уникальными решениями.',
    en: "The vertical sliding automatic guillotine is a motorized chain glazing system with a movable handrail and remote control. The system can be used as movable railings in glazing of hotels, cafes, restaurants, balconies, stadiums, etc. The automatic guillotine glazing system has many patented innovations, such as the 'Hand-Safe Profile', which is a specially designed profile to prevent fingers/hands from getting pinched. The system uses 8 mm tempered mono glass or double-glazed units. The guillotine offers maximum thermal insulation among guillotine glazing systems with its unique solutions.",
  },
  specif: {
    uz: 'Xususiyatlari <span>02</span>',
    ru: 'Характеристики <span>02</span>',
    en: 'Specifications <span>02</span>',
  },
  info1: {
    uz: "Qo'llanish sohasi",
    ru: 'Область применения',
    en: 'Application area',
  },
  info1_target: {
    uz: 'Xususiy sektor',
    ru: 'Частный сектор',
    en: 'Private sector',
  },
  info2: {
    uz: 'Tizim sinfi',
    ru: 'Класс системы',
    en: 'System class',
  },
  info2_target: {
    uz: 'Premium',
    ru: 'Премиум',
    en: 'Premium',
  },
  info3: {
    uz: 'Maksimal kenglik',
    ru: 'Максимальная ширина',
    en: 'Maximum width',
  },
  info3_target: {
    uz: '4 500 mm',
    ru: '4 500 мм',
    en: '4 500 mm',
  },
  info4: {
    uz: 'Maksimal balandlik',
    ru: 'Максимальная высота',
    en: 'Maximum height',
  },
  info4_target: {
    uz: '3 000 mm',
    ru: '3 000 мм',
    en: '3 000 mm',
  },
  info5: {
    uz: 'Steklopaket qalinligi',
    ru: 'Толщина стеклопакета',
    en: 'Glass unit thickness',
  },
  info5_target: {
    uz: '8 mm, 20 mm (4+12+4)',
    ru: '8 мм, 20 мм (4+12+4)',
    en: '8 mm, 20 mm (4+12+4)',
  },
  info6: {
    uz: 'Maksimal panel soni',
    ru: 'Максимальное кол-во панелей',
    en: 'Maximum number of panels',
  },
  info6_target: {
    uz: '3 panel',
    ru: '3 панели',
    en: '3 panels',
  },
  // Продукт 2
  systems2: {
    uz: 'PERGOLA',
    ru: 'ПЕРГОЛА',
    en: 'PERGOLA',
  },
  description_2: {
    uz: "Tentli pergolalar — ochiq maydonlarni zonalashning eng samarali va amaliy turlaridan biridir. Pergola yordamida siz qishloq uyi hovlisida yoki jamoat joyida dam olish zonasini tashkil qilishingiz mumkin. Tentli soyabon yoritish darajasini sozlash va quyosh nurlari hamda yomg'irdan himoyalanish imkonini beradi.",
    ru: 'Тентовые перголы — один из наиболее эффективных и практичных видов зонирования открытого пространства. С помощью перголы можно обустроить зону отдыха во дворе загородного дома или на общественной территории. Тентовый навес позволяет отрегулировать уровень освещения и защититься от солнечных лучей и дождей.',
    en: 'Tent pergolas are one of the most effective and practical types of zoning open spaces. With a pergola, you can create a relaxation area in the yard of a country house or in a public space. The tent canopy allows you to adjust the level of lighting and protect yourself from sunlight and rain.',
  },
  system_desc2: {
    uz: 'Sistemaning tavsifi <span>01</span>',
    ru: 'Описание системы <span>01</span>',
    en: 'System description <span>01</span>',
  },
  description_system2: {
    uz: "Tentli pergolalar ochiq maydonlarni zonalashning eng samarali va amaliy turlaridan biridir. Pergola yordamida qishloq uyi hovlisida yoki jamoat joyida dam olish zonasini tashkil qilishingiz mumkin. Tentli soyabon yoritish darajasini sozlash va quyosh nurlari hamda yomg'irdan himoyalanish imkonini beradi. Polivinilxlorid asosidagi material suv o'tkazmaydigan, olovga chidamli va ultrabinafsha nurlanishga yuqori qarshilikka ega. Maxsus konstruktsiya tufayli, pergola ostida eng issiq kunlarda ham qulay bo'ladi — soyabon konstruktsiyasi ostidagi havo 7-10 daraja salqinroqdir. Tentli pergola lakonik dizayn va mustahkam konstruktsiyaga ega, u quyosh, yomg'ir va shamoldan ishonchli himoya qiladi va boshqarish oson.",
    ru: 'Тентовые перголы — один из наиболее эффективных и практичных видов зонирования открытого пространства. С помощью перголы можно обустроить зону отдыха во дворе загородного дома или на общественной территории. Тентовый навес позволяет отрегулировать уровень освещения и защититься от солнечных лучей и дождей. Материал на основе поливинилхлорида — водонепроницаемый, огнестойкий, обладает повышенной устойчивостью к ультрафиолетовому излучению. Благодаря особой конструкции под перголой будет комфортно находиться даже в самые жаркие дни — под навесной конструкцией воздух прохладнее на 7-10 градусов. Тентовая пергола обладает лаконичным дизайном и прочной конструкцией, она надежно защищает от солнца, дождя и ветра, а также проста в управлении.',
    en: 'Tent pergolas are one of the most effective and practical types of zoning open spaces. With a pergola, you can create a relaxation area in the yard of a country house or in a public space. The tent canopy allows you to adjust the level of lighting and protect yourself from sunlight and rain. The polyvinyl chloride-based material is waterproof, fire-resistant, and has increased resistance to ultraviolet radiation. Thanks to the special design, it will be comfortable under the pergola even on the hottest days — the air under the canopy is 7-10 degrees cooler. The tent pergola has a laconic design and sturdy construction; it reliably protects from sun, rain, and wind, and is easy to operate.',
  },
  specif2: {
    uz: 'Xususiyatlari <span>02</span>',
    ru: 'Характеристики <span>02</span>',
    en: 'Specifications <span>02</span>',
  },
  pergola_info1: {
    uz: 'Boshqarish turlari',
    ru: 'Варианты управления',
    en: 'Control options',
  },
  pergola_target1: {
    uz: 'Avtomatika va pultlar',
    ru: 'Автоматика и пульты',
    en: 'Automation and remotes',
  },
  pergola_info2: {
    uz: 'Sektsiyalar soni',
    ru: 'Количество секций',
    en: 'Number of sections',
  },
  pergola_target2: {
    uz: '2 sektsiya, 3 sektsiya',
    ru: '2 секции, 3 секции',
    en: '2 sections, 3 sections',
  },
  pergola_info3: {
    uz: 'Maksimal kenglik',
    ru: 'Максимальная ширина',
    en: 'Maximum width',
  },
  pergola_target3: {
    uz: '6 000 mm',
    ru: '6 000 мм',
    en: '6 000 mm',
  },
  pergola_info4: {
    uz: 'Maksimal balandlik',
    ru: 'Максимальная высота',
    en: 'Maximum height',
  },
  pergola_target4: {
    uz: '3 500 mm',
    ru: '3 500 мм',
    en: '3 500 mm',
  },
  pergola_info5: {
    uz: 'Tент',
    ru: 'Тент',
    en: 'Awning',
  },
  pergola_target5: {
    uz: "Suv o'tkazmaydigan, aşınmaya bardoshli material",
    ru: 'Водонепроницаемый, износостойкий материал',
    en: 'Waterproof, wear-resistant material',
  },
  pergola_info6: {
    uz: 'Ekologik xususiyatlar',
    ru: 'Экологическая характеристика',
    en: 'Environmental characteristics',
  },
  pergola_target6: {
    uz: 'Qayta ishlanadigan va bardoshli materiallardan',
    ru: 'Из перерабатываемых и долговечных материалов',
    en: 'Made from recyclable and durable materials',
  },
  // Продукт 3
  systems3: {
    uz: 'SLIDEMASTER',
    ru: 'SlideMaster',
    en: 'SlideMaster',
  },
  description_3: {
    uz: "SlideMaster tizimi eshiklar yoki deraza konstruktsiyalarining silliq va shovqinsiz harakatlanishini ta'minlaydi, bu uni zamonaviy interyer va eksteryerlar uchun ideal qiladi. Ushbu tizim joylarni zonalash va shaffof bo'linmalar yaratish uchun mos keladi, shuningdek, avtomatik boshqaruv mexanizmlari tufayli foydalanishda qulaylik va qulaylikni ta'minlaydi.",
    ru: 'Система SlideMaster обеспечивает плавное и бесшумное скольжение дверей или оконных конструкций, что делает её идеальной для современных интерьеров и экстерьеров. Эта система подходит для зонирования помещений и создания прозрачных перегородок, а также обеспечивает легкость и комфорт использования благодаря автоматическим механизмам управления.',
    en: 'The SlideMaster system ensures smooth and silent sliding of door or window structures, making it ideal for modern interiors and exteriors. This system is suitable for zoning spaces and creating transparent partitions, and it provides ease and comfort of use thanks to automatic control mechanisms.',
  },
  system_desc3: {
    uz: 'Sistemaning tavsifi <span>01</span>',
    ru: 'Описание системы <span>01</span>',
    en: 'System description <span>01</span>',
  },
  description_system3: {
    uz: "SlideMaster — bu zamonaviy siljiydigan eshik va deraza tizimi bo'lib, maksimal darajada oson boshqarish va yuqori darajadagi germetiklikni ta'minlaydi. Tizim ichki va tashqi makonlarni bezash uchun idealdir. Yuqori sifatli materiallar va mexanikalar tufayli tizim uzoq muddatli foydalanishni va qulaylikni ta'minlaydi. SlideMaster har qanday o'lcham va talabga moslashadi, bu uni uylar va tijorat ob'ektlari uchun universal yechimga aylantiradi.",
    ru: 'SlideMaster — это современная система раздвижных дверей и окон, которая обеспечивает максимально легкое управление и высокую степень герметичности. Система идеальна для оформления как внутренних, так и наружных пространств. Благодаря высококачественным материалам и механике система обеспечивает долговечность и простоту в использовании. SlideMaster адаптируется под любые размеры и требования, делая её универсальным решением для домов и коммерческих объектов.',
    en: 'SlideMaster is a modern sliding door and window system that provides maximum ease of operation and a high degree of sealing. The system is ideal for decorating both interior and exterior spaces. Thanks to high-quality materials and mechanics, the system ensures durability and ease of use. SlideMaster adapts to any size and requirements, making it a universal solution for homes and commercial properties.',
  },
  specif3: {
    uz: 'Xususiyatlari <span>02</span>',
    ru: 'Характеристики <span>02</span>',
    en: 'Specifications <span>02</span>',
  },
  slide_info1: {
    uz: 'Boshqarish turi',
    ru: 'Тип управления',
    en: 'Control type',
  },
  slide_target1: {
    uz: "Avtomatik va qo'lda",
    ru: 'Автоматическое и ручное',
    en: 'Automatic and manual',
  },
  slide_info2: {
    uz: 'Material',
    ru: 'Материал',
    en: 'Material',
  },
  slide_target2: {
    uz: 'Alyuminiy, shisha',
    ru: 'Алюминий, стекло',
    en: 'Aluminum, glass',
  },
  slide_info3: {
    uz: 'Maksimal kenglik',
    ru: 'Максимальная ширина',
    en: 'Maximum width',
  },
  slide_target3: {
    uz: '4 000 mm',
    ru: '4 000 мм',
    en: '4 000 mm',
  },
  slide_info4: {
    uz: 'Maksimal balandlik',
    ru: 'Максимальная высота',
    en: 'Maximum height',
  },
  slide_target4: {
    uz: '3 000 mm',
    ru: '3 000 мм',
    en: '3 000 mm',
  },
  slide_info5: {
    uz: 'Shovqin izolyatsiyasi',
    ru: 'Шумоизоляция',
    en: 'Sound insulation',
  },
  slide_target5: {
    uz: 'Ha',
    ru: 'Да',
    en: 'Yes',
  },
  slide_info6: {
    uz: "Qo'llanilishi",
    ru: 'Применение',
    en: 'Application',
  },
  slide_target6: {
    uz: 'Interyer va eksteryer',
    ru: 'Интерьеры и экстерьеры',
    en: 'Interiors and exteriors',
  },
  // Продукт 4
  systems5: {
    uz: 'Shisha perila',
    ru: 'Стеклянные перила',
    en: 'Glass railings',
  },
  description_5: {
    uz: "Shisha perila ichki va tashqi zinapoyalar, balkonlar va teraslar uchun zamonaviy va xavfsiz yechimdir. Ular makon illyuziyasini yaratadi, maksimal shaffoflikni ta'minlaydi va zamonaviy ko'rinish beradi.",
    ru: 'Стеклянные перила — это стильное и безопасное решение для внутренних и внешних лестниц, балконов и террас. Они создают иллюзию пространства, обеспечивая максимальную прозрачность и современный внешний вид.',
    en: 'Glass railings are a stylish and safe solution for interior and exterior stairs, balconies, and terraces. They create an illusion of space while providing maximum transparency and a modern appearance.',
  },
  system_desc5: {
    uz: 'Sistemaning tavsifi <span>01</span>',
    ru: 'Описание системы <span>01</span>',
    en: 'System description <span>01</span>',
  },
  description_system5: {
    uz: "Shisha perila interyeringizga zamonaviy ko'rinish beradi va makon estetikasini buzmasdan xavfsizlikni ta'minlaydi. Mustahkam shisha panellar zarbalarga chidamli va xonada ochiq va havodor tuyg'uni yaratadi. Perila uy ichida ham, ochiq joylarda ham, masalan, teras va balkonlarda qo'llash uchun mos keladi.",
    ru: 'Стеклянные перила придают интерьеру современный вид и обеспечивают безопасность без нарушения эстетики пространства. Прочные стеклянные панели устойчивы к ударам и создают открытое и воздушное ощущение в помещении. Перила подходят для применения как внутри дома, так и на открытых участках, таких как террасы и балконы.',
    en: 'Glass railings give your interior a modern look and ensure safety without compromising the aesthetics of the space. The durable glass panels are impact-resistant and create an open and airy feeling in the room. The railings are suitable for use both inside the house and in open areas such as terraces and balconies.',
  },
  specif5: {
    uz: 'Xususiyatlari <span>02</span>',
    ru: 'Характеристики <span>02</span>',
    en: 'Specifications <span>02</span>',
  },
  rail_info1: {
    uz: 'Material',
    ru: 'Материал',
    en: 'Material',
  },
  rail_target1: {
    uz: 'Temperlangan shisha',
    ru: 'Закаленное стекло',
    en: 'Tempered glass',
  },
  rail_info2: {
    uz: 'Shisha qalinligi',
    ru: 'Толщина стекла',
    en: 'Glass thickness',
  },
  rail_target2: {
    uz: '10-12 mm',
    ru: '10-12 мм',
    en: '10-12 mm',
  },
  rail_info3: {
    uz: 'Maksimal balandlik',
    ru: 'Максимальная высота',
    en: 'Maximum height',
  },
  rail_target3: {
    uz: '1 200 mm',
    ru: '1 200 мм',
    en: '1 200 mm',
  },
  rail_info4: {
    uz: 'Maksimal seksiya uzunligi',
    ru: 'Максимальная длина секции',
    en: 'Maximum section length',
  },
  rail_target4: {
    uz: '2 500 mm',
    ru: '2 500 мм',
    en: '2 500 mm',
  },
  rail_info5: {
    uz: 'Ob-havoga chidamlilik',
    ru: 'Устойчивость к погодным условиям',
    en: 'Weather resistance',
  },
  rail_target5: {
    uz: 'Ha',
    ru: 'Да',
    en: 'Yes',
  },
  rail_info6: {
    uz: "O'rnatish turi",
    ru: 'Тип крепления',
    en: 'Mounting type',
  },
  rail_target6: {
    uz: 'Ramkasiz, profillar bilan',
    ru: 'Безрамное, с профилями',
    en: 'Frameless, with profiles',
  },
  // Продукт 5
  systems6: {
    uz: 'Sensor eshiklar',
    ru: 'Сенсорные двери',
    en: 'Sensor doors',
  },
  description_6: {
    uz: "Sensor eshiklar — bu qulay va zamonaviy yechim bo'lib, tijorat va turar joy binolarining kirish guruhlari uchun. Ular kontaktsiz ochilish va yopilishni ta'minlaydi, bu esa foydalanish qulayligini va xavfsizligini oshiradi.",
    ru: 'Сенсорные двери — это удобное и современное решение для входных групп в коммерческих и жилых зданиях. Они обеспечивают бесконтактное открытие и закрытие, что повышает комфорт и безопасность использования.',
    en: 'Sensor doors are a convenient and modern solution for entrance groups in commercial and residential buildings. They provide contactless opening and closing, increasing the comfort and safety of use.',
  },
  system_desc6: {
    uz: 'Sistemaning tavsifi <span>01</span>',
    ru: 'Описание системы <span>01</span>',
    en: 'System description <span>01</span>',
  },
  description_system6: {
    uz: "Sensor eshiklar odamlarning katta oqimi bo'lgan joylar uchun idealdir, yuzaga tegmasdan tez va qulay ochilishni ta'minlaydi. Bu jamoat binolarida, masalan, savdo markazlari, ofislar va tibbiyot muassasalarida gigiena va xavfsizlikni yaxshilaydi.",
    ru: 'Сенсорные двери идеально подходят для мест с большим потоком людей, обеспечивая быстрое и удобное открытие без необходимости прикасаться к поверхности. Это улучшает гигиену и безопасность, особенно в общественных зданиях, таких как торговые центры, офисы и медицинские учреждения.',
    en: 'Sensor doors are ideal for places with a high flow of people, providing quick and convenient opening without the need to touch the surface. This improves hygiene and safety, especially in public buildings such as shopping centers, offices, and medical facilities.',
  },
  specif6: {
    uz: 'Xususiyatlari <span>02</span>',
    ru: 'Характеристики <span>02</span>',
    en: 'Specifications <span>02</span>',
  },
  door_info1: {
    uz: 'Sensor turlari',
    ru: 'Тип сенсоров',
    en: 'Sensor types',
  },
  door_target1: {
    uz: 'Infraqizil, ultratovushli',
    ru: 'Инфракрасные, ультразвуковые',
    en: 'Infrared, ultrasonic',
  },
  door_info2: {
    uz: 'Material',
    ru: 'Материал',
    en: 'Material',
  },
  door_target2: {
    uz: 'Alyuminiy, shisha',
    ru: 'Алюминий, стекло',
    en: 'Aluminum, glass',
  },
  door_info3: {
    uz: 'Maksimal kenglik',
    ru: 'Максимальная ширина',
    en: 'Maximum width',
  },
  door_target3: {
    uz: '2 500 mm',
    ru: '2 500 мм',
    en: '2 500 mm',
  },
  door_info4: {
    uz: 'Maksimal balandlik',
    ru: 'Максимальная высота',
    en: 'Maximum height',
  },
  door_target4: {
    uz: '2 400 mm',
    ru: '2 400 мм',
    en: '2 400 mm',
  },
  door_info5: {
    uz: 'Germetiklik',
    ru: 'Герметичность',
    en: 'Hermeticity',
  },
  door_target5: {
    uz: 'Ha',
    ru: 'Да',
    en: 'Yes',
  },
  door_info6: {
    uz: 'Energiya tejash',
    ru: 'Энергосбережение',
    en: 'Energy saving',
  },
  door_target6: {
    uz: "Issiqlik yo'qotilishini kamaytiradi",
    ru: 'Снижает потери тепла',
    en: 'Reduces heat loss',
  },
  about_title: {
    uz: 'Biz haqimizda',
    ru: 'О нас',
    en: 'About us',
  },
  about_subtitle1: {
    uz: 'Kompaniyamiz haqida qisqacha:',
    ru: 'Коротко о нашей компании :',
    en: 'Briefly about our company:',
  },
  about_text1: {
    uz: `Bizning kompaniyamiz teraslar uchun eksklyuziv tizimlarni ishlab chiqish va ishlab chiqarishga ixtisoslashgan bo'lib, ochiq havoda qulay va zamonaviy makon yaratish uchun noyob yechimlarni taqdim etadi. Biz pergolalar, gilyotina tizimlari, suriladigan va sensorli eshiklar kabi keng turdagi mahsulotlarni taklif etamiz, ular innovatsion texnologiyalarni, zamonaviy dizaynni va eng yuqori sifatni o'z ichiga oladi. Teraslar uchun bizning tizimlarimiz ochiq havoda qulay va funksional dam olish zonasini yaratishga imkon beradi, ob-havo sharoitlaridan himoya qiladi va makoningizga estetik qiymat qo'shadi. Biz har bir mijoz bilan individual ravishda ishlaymiz, ularning ehtiyojlari va ob'ektning arxitektura xususiyatlariga mos keladigan eng yaxshi yechimlarni taklif qilish uchun. Kompaniyamiz tashkil etilganidan beri biz eng ilg'or texnologiyalar va materiallarni joriy etishga intilamiz, konstruktsiyalarimizning uzoq umrini, ishonchliligini va zamonaviy tashqi ko'rinishini kafolatlaymiz. Biz mijozlarimizning qulay va estetik jozibador teras haqidagi orzularini amalga oshirishga yordam beradigan loyihalarimiz bilan faxrlanamiz.`,
    ru: `Наша компания специализируется на разработке и производстве эксклюзивных систем для террас, создавая уникальные решения для комфортного и стильного открытого пространства. Мы предлагаем широкий спектр продукции, включая перголы, гильотинные системы, раздвижные и сенсорные двери, которые сочетают в себе инновационные технологии, современный дизайн и высочайшее качество. Наши системы для террас позволяют создать уютную и функциональную зону отдыха на открытом воздухе, обеспечивая защиту от погодных условий и добавляя эстетическую ценность вашему пространству. Мы работаем с каждым клиентом индивидуально, чтобы предложить наилучшие решения, соответствующие их потребностям и архитектурным особенностям объекта. С момента основания нашей компании мы стремимся внедрять самые передовые технологии и материалы, гарантируя долговечность, надежность и стильный внешний вид наших конструкций. Мы гордимся тем, что наши проекты помогают воплотить мечты наших клиентов о комфортной и эстетически привлекательной террасе в жизнь.`,
    en: `Our company specializes in the development and production of exclusive terrace systems, creating unique solutions for a comfortable and stylish open space. We offer a wide range of products, including pergolas, guillotine systems, sliding and sensor doors, which combine innovative technologies, modern design, and the highest quality. Our terrace systems allow you to create a cozy and functional outdoor recreation area, providing protection from weather conditions and adding aesthetic value to your space. We work individually with each client to offer the best solutions that meet their needs and the architectural features of the object. Since our company's foundation, we strive to implement the most advanced technologies and materials, ensuring the durability, reliability, and stylish appearance of our structures. We are proud that our projects help realize our clients' dreams of a comfortable and aesthetically appealing terrace.`,
  },
  about_subtitle2: {
    uz: 'Missiya va qadriyatlar:',
    ru: 'Миссия и ценности:',
    en: 'Mission and values:',
  },
  about_text2: {
    uz: `"Bizning missiyamiz — mijozlarimizni ishonchli va zamonaviy teras yechimlari bilan ta'minlash, ochiq havoda hayot uchun qulaylik va ilhom yaratish. Biz doimiy innovatsiyalarga intilamiz, yuqori sifat standartlariga rioya qilamiz va har doim uzoq muddatli hamkorlikka yo'naltirilganmiz."`,
    ru: `"Наша миссия — обеспечить наших клиентов надежными и стильными решениями для террас, создавая комфорт и вдохновение для жизни на открытом воздухе. Мы стремимся к постоянным инновациям, придерживаемся высоких стандартов качества и всегда нацелены на долгосрочное сотрудничество."`,
    en: `"Our mission is to provide our clients with reliable and stylish terrace solutions, creating comfort and inspiration for outdoor living. We strive for continuous innovation, adhere to high quality standards, and are always focused on long-term cooperation."`,
  },
  about_subtitle3: {
    uz: 'Tajriba va yutuqlar:',
    ru: 'Опыт и достижения:',
    en: 'Experience and achievements:',
  },
  about_text3: {
    uz: `Yillar davomida biz mintaqa bo'ylab yuzlab muvaffaqiyatli loyihalarni amalga oshirdik, xususiy mijozlar va yirik korporativ buyurtmachilarning ishonchini qozondik.`,
    ru: `За годы работы мы реализовали сотни успешных проектов по всему региону, завоевав доверие как частных клиентов, так и крупных корпоративных заказчиков.`,
    en: `Over the years, we have implemented hundreds of successful projects throughout the region, earning the trust of both private clients and large corporate customers.`,
  },
  about_subtitle4: {
    uz: "Mijozga yo'naltirilganlik:",
    ru: 'Клиентоориентированность:',
    en: 'Customer focus:',
  },
  about_text4: {
    uz: `Biz loyiha konsepsiyasini ishlab chiqishdan tortib o'rnatish va xizmat ko'rsatishgacha bo'lgan barcha bosqichlarda mijozni qo'llab-quvvatlaymiz, to'liq qoniqish va uzoq muddatli hamkorlikni kafolatlaymiz.`,
    ru: `Мы сопровождаем клиента на всех этапах проекта — от разработки концепции до установки и сервисного обслуживания, гарантируя полное удовлетворение и долгосрочное сотрудничество.`,
    en: `We support the client at all stages of the project — from concept development to installation and service maintenance, ensuring complete satisfaction and long-term cooperation.`,
  },
  about_subtitle5: {
    uz: 'Texnologiyalar va barqarorlik:',
    ru: 'Технологии и устойчивость:',
    en: 'Technologies and sustainability:',
  },
  about_text5: {
    uz: `Biz barqaror rivojlanishga va atrof-muhitni muhofaza qilishga hissa qo'shish uchun ekologik xavfsiz materiallar va energiya samarador yechimlardan foydalanishga alohida e'tibor beramiz.`,
    ru: `Мы уделяем особое внимание использованию экологически безопасных материалов и энергоэффективных решений, чтобы внести вклад в устойчивое развитие и защиту окружающей среды.`,
    en: `We pay special attention to the use of environmentally friendly materials and energy-efficient solutions to contribute to sustainable development and environmental protection.`,
  },
  contact_title: {
    uz: "Biz bilan bog'laning",
    ru: 'Свяжитесь с нами',
    en: 'Contact us',
  },
  contact_subtitle: {
    uz: "Biz har doim sizga yordam berishga tayyormiz. Biz bilan sizga qulay usulda bog'laning.",
    ru: 'Мы всегда готовы помочь вам с вашими запросами. Свяжитесь с нами любым удобным способом.',
    en: 'We are always ready to help you with your inquiries. Contact us in any convenient way.',
  },
  contact_info_title: {
    uz: "Kontakt ma'lumotlari",
    ru: 'Контактная информация',
    en: 'Contact Information',
  },
  address_label: {
    uz: 'Manzil:',
    ru: 'Адрес:',
    en: 'Address:',
  },
  address: {
    uz: "Bobur ko'chasi 1 uy",
    ru: 'ул. Бобура дом №1',
    en: 'No.1 Bobur street',
  },
  phone_label: {
    uz: 'Telefon:',
    ru: 'Телефон:',
    en: 'Phone:',
  },
  email_label: {
    uz: 'Email:',
    ru: 'Email:',
    en: 'Email:',
  },
  feedback_form_title: {
    uz: 'Aloqa formasi',
    ru: 'Форма обратной связи',
    en: 'Feedback Form',
  },
  placeholder_name: {
    uz: 'Ismingiz',
    ru: 'Ваше имя',
    en: 'Your name',
  },
  placeholder_email: {
    uz: 'Email manzilingiz',
    ru: 'Ваш email',
    en: 'Your email',
  },
  placeholder_message: {
    uz: 'Xabaringiz',
    ru: 'Ваше сообщение',
    en: 'Your message',
  },
  submit_button: {
    uz: 'Yuborish',
    ru: 'Отправить',
    en: 'Send',
  },
  map_title: {
    uz: 'Bizning joylashuvimiz',
    ru: 'Наше местоположение',
    en: 'Our Location',
  },
};

const select = document.querySelectorAll('.lang');
const allLang = ['uz', 'ru', 'en'];

select.forEach((el) => {
  el.addEventListener('click', () => {
    const lang = el.alt;
    localStorage.setItem('language', lang);
    changeURLLanguage(lang);
  });
});

function changeURLLanguage(lang) {
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

function changeLanguage() {
  let lang = localStorage.getItem('language') || 'ru';

  if (!allLang.includes(lang)) {
    lang = 'ru';
  }

  select.forEach((el) => {
    el.alt === lang
      ? el.classList.add('active')
      : el.classList.remove('active');
  });

  for (let key in langArray) {
    let elems = document.querySelectorAll('.lng-' + key);
    if (elems) {
      elems.forEach((elem) => {
        elem.innerHTML = langArray[key][lang] || '';
      });
    }
  }

  // Изменяем атрибуты, если необходимо (например, title страницы)
  document.title = langArray['title'][lang];
}

changeLanguage();
