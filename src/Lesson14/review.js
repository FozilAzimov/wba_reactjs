// React js single page application deyiladi. Chunki bitta index.html file mavjud.

// Endi bu qonuniyatni  React Router DOM o'zgartiradi. Bu kutubxona hisoblanadi.
// nmp da (npm install react-router-dom),  yarn da (yarn add react-router-dom); Bu holatda 6 - versiyasi yuklanadi.
// 5-versiyasini o'rnatish uchun (yarn add react-router-dom@5)  deb yoziladi;

// Biz bu darsda o'rganadigan malumotlarimiz:

// 1). React Router DOM - 5;
// 2). BrowserRouter;
// 3). Router;
// 4). Switch;
// 5). Navlink, Link;
// 6). useHistory, useLocation => window.location;
// 7). Redirect

// Biz birinchi bo'lib BrowserRouter ni react-router-dom dan import qilib olamiz.
// va root fileni o'rab qo'yamiz.

// NavLink va Link mavjud. bularni ham react-router-dom dan import qilib olmiz.
// Vazifasi bizga NavLink link tag yaratib beradi va sahifadan sahifaga o'tkazib beradi.
// O'zida 'to' degan atribute qabul qiladi. bu to bizga 'pathname' ni o'zgartirishga yordam beradi.
// activeStyle da biz itemlar active bo'lganda turli xil stylelar bera olamiz.

// Route ni import qilib olamiz. Buni ishlatishdan maqsad bizga sahifada nima ma'lumot ko'rinishini belgilab beradi.
// Route single tag yoki closing tag bo'ladi.
// bir-biridan farqi shundaki biz single tagda faqat component orqali barcha componentlarimizni ishlata olamiz.
// closing tagda esa biz componentlarimizni tag orasida yozib ular ichida prop jo'natsak bo'ladi.

// Switch - biz Route ishlatganimizda  hamma Route larni Swichga o'rab olishimiz kerak. Aks holda biz kerak emas bo'lgan sahifaga o'tkanimizda ham error sahifani birgalikda chiqarib beradi.

// useHistory va uselocation => window dan kelgan.
// useHistory  (goForward, goBack) ning vazifasi biza sahifaning oldingi va keyngi pagelariga o'tishga yordam beradi.

// Redirec - buni ishlatish caselari agar biz pathnameni yozmasak u to'g'ri borib home ni ko'rsatsin desak bo'ladi.