// <></> --> bu fragment hisoblanadi.
// Vazidasi div tagi vazifasini bajaradi. Faqat browserda ko'rinmaydi.

// map loopi orqali ektanga chiqayotgan malumotlar har doim unikal qiymatga ega bo'lishi kerak.
// Buning uchun ' key={id} ' dan foydalanamiz.

// Lifecycle - bu reactda lifecycle lar bitta component ichidagi methods(constructor(), render(), va hokazo ...) navbat bilan natija chiqarishiga aytiladi.
// Lifecycle - bu har bir component ichida bo'ladigan jarayonlar hisoblanadi.

// Lifecycle (Hayot tskili) bo'lishing 3ta fazasi mavjud. Bular: Mounting, Updating, Unmounting;
// Mounting fazasiga : constructor(), getDrivedStateFromProps(props, state), render(), componentDidMount()  kiradi.



// Lifecycle turlari:

// - componentDidMount() - bu browser yangilanganda faqat bir marta ishlaydi.

// - getDrivedStateFromProps(props,state){
// return {};
// }  -  bu har doim return object ga  qaytishi kerak. Bu har doim state ni qiymatini yangilab turadi.

// - shouldComponentUpdate(){
//   return false
// }  -  bu default return true qaytadi. Vazifasi agar return false qaytarsa renderni qayta ishlashini to'xtatadi.

// componentWillUnmount(){

// }  -  componentWillUnmount  vazifasi page almashayotganda yoki biror bir page dan chiqaib ketayotganingizda sizga habar chiqishi ya'ni aynan anashu vaqtda ishlaydigan lifecycle hisoblanadi.

// componentDidUnmout(){

// }  -  bu componentWillUnmout ning aksi hisoblanadi ya'ni page almashingandan keyn yoki update yakunlangandan keyn natijaga chiqadi.

//  -  getSnapshotBeforeUpdate(prevProps, prevState){
//  console.log(prevProps, prevState);
// }  -  bu har doim renderdan keyn va state update bo'lishidan oldin ishlaydi.

// Eslab qoling : Component ichidagi constructor va render ham aslida lifecycle hisoblanadi.



// Functions Components

// Structurasi:

// Function decloration:
// export default function Func() {
//   return (
//     <div>
//       <h1>Hello Webbrain Academy</h1>
//     </div>
//   )
// }


// Arrow function
// export const Arrow = () => {
//   return (
//     <div>
//       <h1>Arrow</h1>
//     </div >
//   )
// }


// React Hooks
// 1).  useState - bu class componentda this.state o'rnida keladi.
// useState dan bizga har doim array qaytadi.  Array ning 2 ta qiymati bo'ladi. Birinchisi: useState ga bergan qiymatimiz, ikkinchisi function.
// bu arrayning 2 - qiymati function kelishidan sabab keynchalik biz useState qiymatini o'zgartirish uchun huddi shu functiondan foydalanamiz.

// Savol: Nima uchun biz state lar o'rniga oddiy veriablelardan foydalanmaymiz?
// Chunki oddiy veriablelar render() lifecycleni qayta ishga tushirib bermaydi. Biz render() ni qayta ishga tushirish uchun state lardan foydalanamiz.

// 2). useEffect - bu class componentdagi barcha lifecycle lar o'rnida ishlatiladi va o'rnini bosa oladi.

// Structurasi:
// useEffect(() => { }, []);
// Bunda useEffect o'zida 2 ta parametr qabul qiladi.
// 1-si callback function: bunda barcha codelarimizni yozamiz.
// 2-si esa Dependency List ' [] ', ya'ni bo'sh array hisoblanadi. Bunda biz cheklov qo'yib qo'yishimiz mumkin.

// Xulosa qilib  oladigan bo'lsak Statelar uchun useState, Lifecycle lar uchun esa useEffect hizmat qiladi Reactning Hook larda.

// Biz window scroll bo'lgan paytda nimadir hodisa roy bersin demoqchi bo'lsak quyidafi function dan foydalanamiz.

// function getScroll() {
//   const scroll = () => {
//     console.log(window.scrollY);
//   }
//   window.addEventListener('scroll', scroll);
// }

// export default getScroll;