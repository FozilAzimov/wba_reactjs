// ReactJS ning yangilangan 18 - versiyasi 2022-yil Mart oyida chiqarilgan.

// Batching - bu 17 versiyada ishlatilgan va undan maqsad render bo'lishlar sonini kamaytirish uchun ishlatilgan. flushSync esa anashu render bo'lishlikni yuzaga keltirib beradi.
// bu holar render bo'lishlik  18 versiyasda avtomatik oldini olingan.

// useTransition, starttransition, useDiferrendValue - bular react ning 18V da chiqarilgan
// useTransition - qaytaradigan veriableni 2 ga ajratamiz.
// birinchisi: isPending;  - bu true yoki false ni, ya'ni data yuklanib bo'ldimi yoki yo'qmi shui tekshiradi.
// ikkinchisi: startTransition; - bu esa jarayonning bajarilish tartibini(prayority) sini eng oxirgi o'rinlarga tushirib beradi.

// Bundan tashqari: useDeferrendValue ham mavjud. Ozida 2 ta parametr qabul qiladi.
// ikkinchi parametri hozirda ishlamaydi ( {timeoutMs} ).

// Suspense - vazifasi bziga backend dan data yetib kelmaganida chiqadigan natijalarni yashirib turadi va keyn ekranga chiqarib beradi.
// Suspense bilan birgalikda React.lazy() bilan birga ishlatiladi. Suspense o'zida atribute sifatida fallback oladi. Biz fallbackda data kelmagan paytda nimadir ' Loading... ' ma'lumot chiqarib qo'ysak bo'ladi.

// Bizga unic id yasab berish uchun ' useId ' ishlatamiz. useId bizga har doim bir biriga teng bo'lmagan qiymat yasab beradi.