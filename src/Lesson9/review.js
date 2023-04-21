// lifting state up - bu bizga kelayotgan data ni childlarda emas balki rootga olib o'tishga aytiladi. Shu rootdan turib keyin boshqa bir child componentiningning malumotini boshqa bir child componentda ko'rinishini ya'ni o'zgarishlarini ko'rsatishga yordam beradi.

// prop drilling - bu eng yuqoridagi parentdan eng ichkaridagi childga kirib borilish jarayoni ya'ni parentdan childga kirish, bu childdan yana childga kirish va hokazo ...
// Bu prop drilling ni oldini olish kerak va shunga lifting state up va state management chiqarilgan. statemanagement ni dars davomida gapirib o'tamiz.

// useReducer - React Hook;
// useReducer - ishlatilishidan maqsad: agar biz context ishlatsak context bilan useReducer ishlatamiz. Bu ikkisi Redax kurubhonani vazifasini bajarib beradi.
// Agar context ishlatilmasa useReducer ishlatishdan foyda yo'q. U qilinadigan ishni biz useState dan foydalanib bajarsak  bo'ladi.
// useReducer ning Vazifasi :  ekranda o'zgarib turadigan ma'lumotlar uchun qo'llaniladi. Ya'ni anashu o'zgaradigan qiymatni o'zgartirib turadi.


// Context API

// context - nima?
// context - bu hamma componentlar ishlatishi uchun yaratiladigan omborxona desak bo'ladi.

// context yaratilish tartibi:
// 1). createContext;
// 2). Provider --> store;
// 3). permission;
// 4). useContext;
// Bularga components, Context va index.js papka va filelarimizda misollar keltirib o'tkanmiz.
