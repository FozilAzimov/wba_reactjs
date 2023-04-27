// React optimization - nima?
// bu tushuncha reactja da eng kerakli tushuncha bo'lib bu mavzuni yaxshi o'zlashtiradigan bo'lsak projectimizni tez ishlashiga sababbchi bo'ladi.

// memo - nima?
// mome ni ishlatishda juda etiborli bo'lishimiz kerak. Agar memo ni noto'g'ri ishlatadigan bo'lsak projectni tezlashtiramiz deb sekin ishlashiga sababchi bo'lib qolamiz.
// memo ishlatishdan maqsad biror bir componentortiqcha render bo'lishini oldini olishdan iborat.
// Iloji boricha parent componentni emas  child componentlarni memo bilan o'rash kerakligini yaxshi bilishimiz zarur.

// memo qoidasi:
// 1 - har doim child componentni o'rash kerak iloji boricha. Chunki parentini o'rab qo'ysak memo xotirasida keraksiz malumotlar ko'payadi.
// 2 - har doim memo ga o'ralayot componentda render bo'lishiga sababchi bo'lgan ma'lumotlar bo'lishi shart.

// Biz parentdan childga prop jo'natganimizda u prop o'zgaruvchan qiymat bo'ladigan bo'lsa barcha child ha parentga qo'shilib render bo'ladi.
// Agar fixed ya'ni o'zgarmas qiymat jo'natadigan bo'lsak unda childlar render bo'lmaydi.
// Shu holatda biz non-primitive ma'lumot jo'natadigan bo'lsak misol uchun (array, function, object) bularning referance boshqa-boshqa joyda joylashgani uchun har doim yangi ma'lumot kelayoyganga o'xshaydi.

// 1). birinchi usul - Buning oldini olish uchun biz non-primitive ma'lumotlarni string ko'rinishiga o'tkazib olamiz. Buning uchun bizga JSON.stringify() va JSON.parse kerak bo'ladi.

// 2). ikkinchi usul - useMemo dan foydalanish kerak bo'ladi. useMemo o'zidan qiymat qaytaradi. Ya'ni useMemo returini har doim valuega return qiladi.useMemo qaytargan qiymat return qaytargan qiymat hisoblanadi.
// useMemo va memo ning farqi useMemo  parentga nisbatan ishlatiladi,  memo esa childga nisbatan ishlatiladi. ikkising ham vazifasi ma'lumotni xotiralashni amalga oshiradi.

// 3). uchinchi usul - useCallback dan foydalaniladi. Bu ham useMemoga o'xshaydi ammo u qaytaradigan qiymat function bo'ladi.
// Ya'ni useMemo va useCallback ham parametrida  callback function va dependencyArray qabul qiladi. useCallback manashu parametridagi callback functionni qaytaradi.
// Undan tashqari useCallback ning callback functionida param keladi. daynamic usulda ishlatib ketsak hma bo'ladi buni.