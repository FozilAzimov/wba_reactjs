// LocalStorage - nima? bu browserning hotirasi hisoblanib unda ma'lum bir muddat klient ma'lumotlari saqlab boriladi.

// Qanday joylarda ishlatiladi:  misol uchun siz biror bir sitega kirganizda tilni o'zgartirish degan qismidan site tilini UZB ga o'zgartirdingiz va boshqa bir page ga o'tkanizda shu site tili saqlanib qoladi.
// Chuki bu site ga kirganizda sitening LocalStorage da sizning ma'lumotlaringiz saqlanib qoladi va keyingi sahifalayga o'tganizda yana sizning ma'lumotlaringizni olib birinchi saqlab olgan LocalStorage dagi data bilan taqqoslab ko'radi.
// Agar bir xil data bo'lsa site tli o'zgarishsiz qoladi. Agar bir xil bo'lmasa aksincha site tili default tiliga o'tib qoladi.

// LocalStorage ning 4 ta xususiyati mavjud:
// 1) - localStorage.setItem('dataName', data);
// 2) - localStorage.getItem('dataName');
// 3) - localStorage.removeItem('dataName');
// 4) - localStorage.clear();

// Biz localStorage.setItem   qilganimizda data non-primitive ma'lumot bo'lsa qanday bo'ladi.
// Shuning uchun biz data ni set qilganimizda JSON.stringify() dan foydalanamiz va get qilib chiqaradiganimizda JSON.parse() dan foydalanamiz.