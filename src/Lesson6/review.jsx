// style-components haqida.
// Reactda class componentlardan tashqari styled-components ham mavjud.
// react js da style componentsni ishlatishdan maqsad shuki biz css da stylelarni birma bir yozib chiqishimizga to'g'ri kelar edi.
// Lekin style componentsdan foydalansak biz hohlagan tagimizni bir veriablega tenglashtirib uni har joyda ishlatib ketishimiz mumkin.
// Struktura:
// import styled from 'styled-components';
// export const StyleComponents = styled.h1`
//
// barcha style codelari shu yerda yoziladi.
//
// `

// Yana qulaylik tomonlaridan biri ichma ich yozilgan elementlarga biz ichma ich style berib ketsak boladi.

// Yana bir qulayligi biz bitta box yasadik va ikkinchi boxni ham yasamoqchi bo'lsak birinchisidan (inheritens) meros olib ketsak boladi.

// Agar biz styled components ichidagi propsni olmoqchi bolsak callback functiondan foydalanib style yozayotgan file ichida tuttibolsak bo'ladi.

// undan tashqari biz propslardan foydalanib turli hil stylelarni bersak bo'ladi boxlarga.
// bu boxlar ikkita bolsa ternary operatoridan foydalanib ketsak bo'ladi.
// Agat bir nechta bo'lsa biz eng afzali switch case dan foydalanamiz.

// Strukturasi:
// export const Box = styled.div`
// width:${ ({ type }) => {
//     switch (type) {
//       case "Large": return "200px";
//       case "Medium": return "150px";
//       case "Small": return "100px";
//       default: return "50px";
//     }
//   } };
// height:${ ({ type }) => {
//     switch (type) {
//       case "Large": return "200px";
//       case "Medium": return "150px";
//       case "Small": return "100px";
//       default: return "50px";
//     }
//   } };
//   border: 3px solid red;
// `