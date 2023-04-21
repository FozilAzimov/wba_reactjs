// 2-dars. Prop va Component haqida ma'lumotlar.


// Componentga ta'rif;
// ReactJS da componentlar asosan bir marta ishlatiladi. Lekin ko'p marta componentlar yaratsak ham bizga hatolik bermaydi.
// Componentlarning vazifasi biz js da function larni nima maqsadlarda ishlatgan bo'lsak ReactJS da componentlarning vazifasi ham huddi shunday.
// ReactJS da ' class componentlari va function componentlari ' mavjud. Componentlar nomi har doim katta harf bilan boshlanishi shatr. React hooks bu judaham muhim o'rin tutadi.
// Componentlarda ham import, export, export default tushinchalari mavjud. export default js ga o'xshab bitta file da faqat bitta bo'ladi.
// Agar component nomlari bir hil bo'ladigan bo'lsa ularni import qilganda ' as ' kalit so'zi yordamida boshqa yangi nomga almashtirib ketishimiz mumkin.


// Propga ta'rif;
// Componentlarda ' this ' kalit so'zi aynan manashu componentning o'ziga teng boladi. Agar biz render bo'layotgan code ichidagi componentning nomini ichida prop berib yuboriladi.
// Keyin component ichida render ichida va return dan oldin propni this orqali tutib olishimiz mumkin.

// render() bu funcsiya bo'lib componentlar bilan uzviy bog'langan hisoblanadi va malumotlarni ekranga chiqarib beradi.
// render ichida har doim bitta o'rab turuvchi parent div bo'lishi shart. Agar ko'p bo'lib ketsa ularning faqat birinchisi ekranga chiqdi halos.

// Childeren - bu componentni ichida yani taglari orasida yoziladi va uni tutib olish quyidagicha boladi.
// Bu childerenni biz this.props.childeren dan tuttib olamiz. Biz kelayotgan propsni distructure yordamida soddaroq usulda olishimiz mumkin.
// Bir ma'lumot: agar this.props ichida distructure bo'ladigan ma'lumot bor bo'lsa keyn distructure qilinishi shart, aks holda error beradi...