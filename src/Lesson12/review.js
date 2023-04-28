// useRef - nima?
// useRef ishlatilishidan maqsad malumot ekranga chiqmasa ham projectni render bo'lishiga sababchi bo'ladi.
// ya'ni input misolida ko'radigan bo'lsak: input ichiga yozganimizda har bir yozilgan qaiymat uchun ekran render bo'ladi.
// Bu esa projectning sekin ishlashiga olib keladi. Buni oldini olish uchun biz useRef dan foydalanamiz.
// useRef  bizga DOM elementini qaytaradi. Bunda biz input ichiga qiymat kiritganimizda render bo'lmaydi.
// Qoida - useRef ni qachon ishlatiladi: Agar qiymat ekranga chiqmasa useRef ishlatiladi, agar ekranga chiqasa yo'q.