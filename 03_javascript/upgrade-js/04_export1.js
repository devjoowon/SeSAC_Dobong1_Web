// 모듈 만들기 export 이용
// 한 번에 내보내기

const flowers = ['rose', 'sunflower', 'tulip'];

function getFlowers(idx) {
    if(idx >= flowers.length || idx < 0) return 'x';
    return flowers[idx];
}

// export {flowers, getFlowers};
// 별칭으로 내보내기 - as 사용
export {flowers as flr, getFlowers as getFlr};