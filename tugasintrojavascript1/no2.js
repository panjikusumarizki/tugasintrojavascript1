const mtk = 90;
const bahasaIndonesia = 80;
const bahasaInggris = 84;
const ipa = 88;

const hasil = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
let grade = '';

if (typeof(mtk) === 'number' && typeof(bahasaIndonesia) === 'number' && typeof(bahasaInggris) === 'number' && typeof(ipa) === 'number'){
    console.log(`Rata-rata = ${hasil}`);
    if (hasil >= 90 && hasil <= 100){
        grade = 'A';
        console.log(`Grade = ${grade}`);
    } else if (hasil >= 80 && hasil <= 89){
        grade = 'B';
        console.log(`Grade = ${grade}`);
    } else if (hasil >= 70 && hasil <= 79){
        grade = 'C';
        console.log(`Grade = ${grade}`);
    } else if (hasil >= 60 && hasil <= 69){
        grade = 'D';
        console.log(`Grade = ${grade}`);
    } else if (hasil >= 0 && hasil <= 59){
        grade = 'E';
        console.log(`Grade = ${grade}`);
    } else {
        console.log('Grade tidak ada !');
    }    
} else {
    console.log('Error');
}