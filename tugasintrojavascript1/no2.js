const mtk = 45;
const bahasaIndonesia = 33;
const bahasaInggris = 77;
const ipa = 76;

if (typeof(mtk && bahasaIndonesia && bahasaInggris && ipa) === 'number'){
    const hasil = parseInt((mtk + bahasaIndonesia + bahasaInggris + ipa) / 4);
    console.log(`Rata-rata = ${hasil}`);
    let grade = '';
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
    console.log('Error, semua nilai harus diisi !');
}