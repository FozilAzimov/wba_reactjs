// React JS - bu javascript frameworki hisoblanadi. ReactJS singl page application deyilishidan sabab -
// reactning barcha pagelari bitta html fileda joylashgan bo'ladi. Ya'ni bir sahifadan boshqa sahifaga o'tilganda
// browser yangilanmaydi aksincha bitta html fileda pagelar almashinadi.
// Lekin bu holatni React Router DOM bu singl pageni multiple pajega aylantirib beradi.

// Unic dayrectional data flow - bu faqat bir tomonlama harakatlanish tushiniladi. Ya'ni parent, child,...
// avlodi ko'rinishida parent dan child ga malumot jo'natish mumkin. Child dan Parentga yoki sibling elementlarga jo'natib bo'lmaydi.
// Reactning bu xususiyati react ning shu darajada rivojanishiga olib kelgan sababchilardan biri hisoblanadi.
// Bu parent dan child ga va child dan uning child ga malumotlarning jo'natilishi dasturning tez ishlashiga sabab boladi.
// Yana bir ma'lumot: child o'zgartiriladigan bo'lsa bu holat parentga va child siblinglariga umuman ta'sir ko'rsatmaydi.

// React  ' jsx ' ya'ni JavaScript XML file orqali ishlaydi. Bu file reacda yozilgan code lar to'g'ridan to'g'ri browserda chiqmaydi.
// jsx file esa shu codelarni natijasini browserda ko'rsatishga xizmat qiladi. Bundan tashqari Reactda html taglarini bemalol ishlatib ketishga imkon yaratib beradi.
// Bable degan kutubhona mavjud. Bu kutubhona bizga ' jsx ' filedagi ma'lumotlarni ' esx ' borwseri o'qiydigan formatga aylantirib beradi.

// React kutubhonalarining ayrimlari bular: react, ReactDOM.render(), virtual ReactDOM(), .... va hokazo

// npx create-react-app  -- bu bizga react configuratsiyasini yasab beradi.

// node_modules - bu papka barcha kutubhonalarning haqiqiy configuratsiyasini saqlab turadi.
// node_modules va package-lock.json o'zi avtomatik ravishda compyuterga moslashadi. Shuning uchun ham github ga yuklanganda bular push bo'lmaydi.

// public - bu papkada bitta html file va qolganlari icons va img lar hisoblanadi.

// src - bu file da hamma js, css filelar joylashgan bo'ladi. Agar biz birorta project qiladigan bo'lsak manashu src file ichida ajratib ketamiz hammasini.