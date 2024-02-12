document.getElementById('triangle-btn').addEventListener('click',function(){
    const triangleBase = document.getElementById('triangle-base');
    const triangleValue = triangleBase.value;
    const base = parseInt(triangleValue);
// -------- triangle height -----------
    const triangleHight = document.getElementById('triangle-hight');
    const triangleHightValue = triangleHight.value;
    const height = parseInt(triangleHightValue);
    const area = 0.5 * base * height;
    // --------- triangle area ----------
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;
    console.log(triangleArea);

})